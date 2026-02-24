const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const OpenAI = require('openai');
let openai = null;
if (process.env.OPENAI_API_KEY) {
  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
} else {
  console.warn('Warning: OPENAI_API_KEY is not set. The AI proposal endpoint will return a placeholder.');
}

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint for generating methodological proposal
app.post('/api/proposal', async (req, res) => {
  const { year, subject, serviceType } = req.body;
  if (!year || !subject || !serviceType) {
    return res.status(400).json({ error: 'Missing parameters' });
  }

  try {
    if (!openai) {
      // return a dummy response when no API key is provided
      const dummy = `Propuesta de ejemplo para año ${year}, asignatura ${subject} y servicio ${serviceType}.\n
- Objetivo: fomentar la conciencia social.\n- Pasos: …\n- Recursos: …`;
      return res.json({ proposal: dummy });
    }

    const prompt = `Eres un asistente que ayuda a profesores del Programa de los Años Intermedios del IB a diseñar actividades de "servicio como acción". ` +
      `Recibe el año PAI (${year}), la asignatura (${subject}) y el tipo de servicio (${serviceType}) y responde con una propuesta metodológica detallada que incluya objetivos, pasos a seguir y recursos posibles.`;

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      max_tokens: 600,
    });

    const text = completion.choices[0].message.content;
    res.json({ proposal: text });
  } catch (error) {
    console.error('OpenAI error', error);
    res.status(500).json({ error: 'Failed to generate proposal' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}`);
});
