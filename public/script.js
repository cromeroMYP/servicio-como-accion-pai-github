document.getElementById('proposal-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const year = document.getElementById('year').value;
  const subject = document.getElementById('subject').value;
  const serviceType = document.getElementById('serviceType').value;
  const resultDiv = document.getElementById('result');
  resultDiv.textContent = 'Generando propuesta...';

  try {
    const resp = await fetch('/api/proposal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ year, subject, serviceType })
    });
    const data = await resp.json();
    if (data.error) {
      resultDiv.textContent = 'Error: ' + data.error;
    } else {
      resultDiv.textContent = data.proposal;
    }
  } catch (err) {
    resultDiv.textContent = 'Error al comunicarse con el servidor.';
  }
});
