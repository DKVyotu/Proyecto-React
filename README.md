# El mocho
El mocho es una aplicación de comercio electrónico construida con React y Vite, diseñada para proporcionar una experiencia de usuario rápida y eficiente.   La aplicación incluye características como gestión de carrito de compras, integración con Firebase para la base de datos y autenticación, y un sistema de validación de formularios.


Tecnologías Usadas
React: Biblioteca de JavaScript para construir interfaces de usuario.
Vite: Herramienta de construcción de frontend que proporciona un entorno de desarrollo rápido y optimizaciones de build.  
Firebase: Plataforma para construir y gestionar aplicaciones web y móviles.  
Yup: Biblioteca de validación de esquemas para JavaScript.  
Bootstrap: Framework de CSS para diseño responsivo y componentes de interfaz de usuario.  
Toastify: Biblioteca para mostrar notificaciones de toast en aplicaciones React.



### ***Dependencias***


@vitejs/plugin-react: ^1.0.0.

<img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Vite-Dark.svg" alt="" width="70px">

bootstrap: ^5.3.0

<img src="https://github.com/tandpfun/skill-icons/raw/main/icons/Bootstrap.svg" alt="" width="70px">

firebase: ^9.8.1

<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/Firebase-Dark.svg" alt="" width="70px">

react: ^17.0.2

<img src="https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/React-Dark.svg" alt="" width="70px">

react-toastify: ^8.0.3

yup: ^0.32.11


## Scripts Disponibles
En el directorio del proyecto, puedes ejecutar:

### **npm install**
Instala todas las dependencias necesarias para el proyecto.

### **npm run dev**
Inicia la aplicación en el modo de desarrollo.  
Abre http://localhost:5173 para verla en tu navegador.

### **npm run build**
Construye la aplicación para producción en la carpeta dist.  
Empaqueta React en modo de producción y optimiza la build para el mejor rendimiento.

## ***Variables de Entorno***
Asegúrate de definir las siguientes variables de entorno en un archivo .env en la raíz del proyecto:

VITE_APP_API_KEY=your_api_key  
VITE_APP_AUTH_DOMAIN=your_auth_domain  
VITE_APP_PROJECT_ID=your_project_id  
VITE_APP_STORAGE_BUCKET=your_storage_bucket 
VITE_APP_MESSAGING_SENDER_ID=your_messaging_sender_id  
VITE_APP_APP_ID=your_app_id



Clona este repositorio.

Ejecuta npm install para instalar todas las dependencias.  
Define las variables de entorno en el archivo .env.  
Ejecuta npm run dev para iniciar la aplicación en modo de desarrollo.    
Si deseas contribuir a este proyecto, por favor crea un fork del repositorio y envía un pull request con tus cambios.