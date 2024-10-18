# Plataforma de Coworking

## Descripción
Esta es una plataforma de coworking donde los usuarios pueden reservar espacios de trabajo, gestionar sus reservas y consultar información sobre diferentes espacios disponibles.

## Tecnologías Usadas
- **Backend**: Node.js, Express, MongoDB
- **Frontend**: React, Bootstrap
- **Autenticación**: JWT (JSON Web Tokens)

## Instalación

### Backend
1. Navega a la carpeta del backend:
   ```bash
   cd server
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo .env en la carpeta del backend y añade tus variables de entorno:
   ```bash
   MONGO_URI=tu_uri_de_mongodb
   JWT_SECRET=tu_secreto_jwt
   EMAIL_USER=tu_email
   EMAIL_PASS=tu_password
   ```
4. Inicia el servidor:
   ```bash
   npm start
   ```

### Frontend
1. Navega a la carpeta del frontend:
   ```bash
   cd client
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```
3. Inicia la aplicación:
   ```bash
   npm start
   ```

### Uso
Regístrate o inicia sesión en la plataforma.
1. Consulta los espacios disponibles.
2. Realiza reservas de espacios.
3. Visualiza y gestiona tus reservas.

### Contribuciones
Si deseas contribuir, por favor abre un issue o envía un pull request.

### Licencia
Este proyecto está bajo la Licencia MIT.