# Aplicación de búsqueda de películas
Esta es una aplicación React que permite a los usuarios buscar películas utilizando la API TMDB. La aplicación obtiene datos de la película según la consulta del usuario y muestra una lista de resultados coincidentes.

## Componentes

### BuscadorPeliculas.jsx
Este es el archivo del componente principal, que contiene los componentes funcionales para manejar la entrada del usuario, obtener datos de la película y representar los resultados de la búsqueda.

- #### handleSubmit:
Una función que maneja el envío de formularios. Evita el comportamiento predeterminado, recupera datos de películas utilizando la API TMDB y actualiza el estado con los resultados de la búsqueda.

- ### handleInputChange:
Una función que actualiza el estado con el valor de consulta actual cuando el usuario escribe algo en el campo de entrada.

### styles/BuscadorPeliculas.css
Este es un archivo CSS que contiene estilos para la aplicación Buscador de Películas. Los estilos se utilizan para personalizar la apariencia del formulario de búsqueda, tarjetas de película y otros elementos de la interfaz de usuario.

- #### className="search-form"
Esta clase define el diseño y el estilo del formulario de búsqueda.

- #### className="movie-card"
Define el diseño y el estilo de las tarjetas de película individuales.

- #### className= "movie-poster, movie-title, movie-release-date, movie-overview"
Definen el estilo de cada componente de una tarjeta de película.

## API Key
La aplicación utiliza una clave API de TMDB para recuperar datos de películas. Esto está incluido en el código como API_KEY. Puede obtener su propia clave API creando una cuenta en el sitio web de TMDB.

### Como funciona
El usuario escribe una consulta en el campo de entrada y envía el formulario.

La función "handleSubmit" evita el comportamiento predeterminado, recupera datos de la película utilizando la API TMDB y actualiza el estado con los resultados de la búsqueda.

La aplicación muestra una lista de tarjetas de películas coincidentes según los resultados de la búsqueda.

### Guía de utilización
Clona este repositorio en tu máquina local.

Instale dependencias usando npm o yarn.

Ejecute la aplicación usando npm start o Yarn Start.

¡Abre la aplicación en tu navegador web y comienza a buscar películas!