# Servicio como Acción - IB MYP

Esta aplicación web ofrece una explicación detallada del concepto de *servicio como acción* dentro del Programa de los Años Intermedios (PAI) del Bachillerato Internacional (IB). Además, incorpora un sistema de inteligencia artificial que ayuda a los docentes a diseñar una actividad de servicio como acción según parámetros específicos.

## Características

- 📘 Información sobre qué es el servicio como acción y sus tipos
- 🧠 Generador basado en IA para propuestas metodológicas de actividades
- 🛠️ Entrada de año PAI, asignatura y tipo de servicio

## Estructura del proyecto

```
/ (raíz del repositorio)
├─ package.json           # dependencias y scripts
├─ server.js              # servidor Express con ruta de IA
├─ .env.example           # plantilla de variables de entorno
└─ public/
   ├─ index.html          # interfaz de usuario
   └─ script.js           # lógica de formulario
```

## Instalación y ejecución

1. Clonar el repositorio y entrar al directorio:
   ```bash
   git clone <repo_url>
   cd servicio-como-accion-pai-github
   ```
2. Instalar dependencias:
   ```bash
   npm install
   ```
3. Crear un archivo `.env` basado en `.env.example` y añadir tu clave de OpenAI:
   ```ini
   OPENAI_API_KEY=tu_clave_aqui
   PORT=3000
   ```
4. Iniciar la aplicación en modo desarrollo:
   ```bash
   npm run dev
   ```
   o para producción:
   ```bash
   npm start
   ```

5. Abrir el navegador en `http://localhost:3000` y comenzar a utilizar la aplicación.

## Uso

Rellena el formulario con el año PAI, la asignatura y el tipo de servicio (directo, indirecto, promoción de una causa o investigación). La IA generará una propuesta metodológica detallada.

## Licencia

MIT
