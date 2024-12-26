[EJERCICIO PRACTICO 1, MODULO 4]

Este ejercicio se llevó a cabo haciendo una página totalmente de 0, utilizando React.

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
│   ├── App.css
│   ├── App.jsx
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

1. Creación de Componentes en ReactJS (1.5 puntos)
- Crea los siguientes componentes reutilizables para la aplicación del hospital:
- DoctorCard: Muestra la información de un doctor (nombre, especialidad, años
de experiencia).
- ServiceList: Lista los servicios médicos disponibles en el hospital.
- AppointmentForm: Un formulario para que los usuarios agenden una cita con
un doctor.

2. Uso de JSX para Renderización de Datos (1 punto)
- Utiliza JSX para crear la estructura visual de los componentes. Asegúrate de:
- Insertar expresiones JSX para mostrar los datos dinámicos de los doctores,
servicios y citas.
- Utilizar correctamente atributos en JSX y evitar errores comunes como el uso
incorrecto de className en lugar de class.

3. Flujo de Datos con Props (1 punto)
- Implementa props para pasar datos entre los componentes:
- Pasa los datos de doctores al componente DoctorCard desde el componente
principal.
- Pasa los datos de servicios al componente ServiceList desde el componente
principal.
- Usa props para manejar los datos de entrada en el formulario de citas
(AppointmentForm), como el nombre del paciente y el doctor seleccionado.

4. Listas y Keys en React (1 punto)
- Utiliza correctamente listas y keys en React para renderizar dinámicamente la lista de
doctores y servicios.
- Asegúrate de que cada ítem de la lista tenga una key única para optimizar el
rendimiento de la aplicación.

5. Formulario con Manejo de Estado (1 punto)
- Crea el formulario de citas (AppointmentForm) y utiliza Hooks como useState
para manejar los datos del formulario (nombre del paciente, especialidad del doctor,
fecha de la cita).
- Al enviar el formulario, muestra los datos ingresados en la consola del
navegador o en la interfaz.

6. Introducción a Hooks y Ciclo de Vida (1.5 puntos)
- Utiliza Hooks para manejar el ciclo de vida de los componentes:
- Usa useEffect para cargar la lista de doctores y servicios cuando el
componente principal se monta en el DOM.
- Usa useState para manejar

-Créditos-
Imágenes de Google
https://t3.ftcdn.net/jpg/02/95/51/80/360_F_295518052_aO5d9CqRhPnjlNDTRDjKLZHNftqfsxzI.jpg

https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?w=360

https://img.freepik.com/foto-gratis/atractivo-profesional-medico-uniforme-pie-brazos-cruzados-contra-fondo-aislado_662251-416.jpg

https://i.pinimg.com/736x/c5/a3/90/c5a3904b38eb241dd03dd30889599dc4.jpg

https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg

https://t3.ftcdn.net/jpg/01/30/45/54/360_F_130455409_fTuinPO1LXECv5hlk9VBREnL6yowYUo3.jpg


