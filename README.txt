[EJERCICIO PRACTICO 2, MODULO 4]

Este ejercicio se llevó a cabo optimizando la página creada en el ejercicio práctico 1, haciendo uso del ReactDOM, PropTypes y Profiler.

[GITHUB: https://github.com/LeenahJz/EJERCICIOPRAC1.git]

Estructura

ejercicioPractico1
├── node_Modules
├── public
│   └── vite.svg
├── src
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── AppointmentForm.jsx
│   │   ├── DoctorCard.jsx
│   │   ├── Footer.jsx
│   │   ├── Homepage.jsx
│   │   ├── Navbar.jsx
│   │   └── ServiceList.jsx
│   ├── HOC
│   │   └── withLogger.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── Context.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js

Es código cumple con los requisitos solicitados siguientes:

1. Manejo del DOM Virtual en ReactJS
- Implementa una sección del sistema del hospital donde se gestione eficientemente la
renderización de datos utilizando el DOM Virtual.
- Explica cómo ReactJS utiliza el DOM virtual para mejorar el rendimiento de la
interfaz del hospital (secciones como listado de doctores o servicios).
- Implementa componentDidMount o el uso de useEffect para gestionar la
actualización del DOM al cargar los datos.

2. Creación y Uso de Referencias en React
- Utiliza referencias en uno de los componentes para manipular elementos del DOM
directamente. Por ejemplo:
- Crea una referencia para controlar un campo de formulario en el que los
usuarios agendan citas o consultas médicas.
- Usa referencias mediante callback para interactuar con elementos del DOM
cuando se realiza alguna acción del usuario (como enfocar un campo en el
formulario de contacto del hospital).

3. Uso de Fragmentos y Contexto en ReactJS 
- Usa Fragmentos (<React.Fragment>) para evitar elementos innecesarios en el DOM
y mejorar la estructura del código en el sistema del hospital.
- Utiliza Context para gestionar el estado global de la aplicación, como el acceso
a los datos de un usuario o doctor a lo largo de la aplicación sin necesidad de
pasar props entre múltiples componentes.

4. Verificación de Tipos con PropTypes
- Implementa PropTypes para verificar el tipo de datos que se pasan a los componentes
DoctorCard, ServiceList, y AppointmentForm.
- Asegúrate de que los tipos de datos como strings, arrays y objetos se validen
correctamente y muestra un mensaje de error en caso de que el tipo de dato no
sea el correcto.

5. Uso de Componentes de Orden Superior y Portales
- Implementa un Componente de Orden Superior (HOC) para reutilizar la lógica de un
componente en otras secciones del sistema.
- Crea un portal para renderizar un modal que muestre información detallada de
un doctor o servicio en una capa superior sin interferir con la estructura del DOM
principal.

6. Optimización de Rendimiento y Profiler en ReactJS
- Uso de herramientas de optimización de ReactJS como Profiler para identificar cuellos de botella en la renderización y mejorar el rendimiento del sistema del hospital,
especialmente en secciones que cargan muchos datos, como el listado de doctores o
citas.

-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


