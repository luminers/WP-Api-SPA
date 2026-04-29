# WP API SPA

Una Single Page Application (SPA) construida con Vanilla JavaScript que se conecta a la API REST pública de sitios web construidos con WordPress para consumir y mostrar sus artículos (posts).

## Características
* **Vanilla JS**: Sin frameworks ni librerías adicionales. Código basado en ES Modules.
* **Consumo de API REST**: Interactúa dinámicamente con la API JSON nativa de WordPress.
* **Componentización**: Estructurado mediante funciones que retornan elementos del DOM, logrando un código limpio y separado.
* **Enrutamiento del lado del cliente (Router)**: Navegación tipo SPA utilizando el evento `hashchange` de la URL (`#`).

## Estructura del Proyecto

* `index.html`: Punto de entrada de la aplicación.
* `app/`
  * `index.js`: Archivo de arranque que inicializa la aplicación y escucha los eventos del DOM.
  * `App.js`: Componente contenedor principal (crea el layout base).
  * `components/`: Componentes de interfaz de usuario (Header, Loader, PostCard, Router, Title, SearchForm, Menu).
  * `helpers/`: Utilidades y configuraciones (manejo de peticiones AJAX con `fetch` y variables de la API de WP).
  * `assets/`: Archivos estáticos como los estilos CSS (`style.css`).

## Instalación y Uso

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador. **Nota:** Se recomienda fuertemente utilizar un servidor local (como la extensión *Live Server* en VSCode) para evitar problemas con las políticas de CORS que bloquean los módulos ES (`type="module"`).
3. Por defecto, la aplicación extraerá y mostrará los últimos artículos del conocido blog de desarrollo [CSS-Tricks](https://css-tricks.com). 

## Personalización (Usar otra página web)
Puedes apuntar a la API de **cualquier otro sitio web hecho en WordPress**. Simplemente modifica las constantes en el archivo `app/helpers/wp_api.js`:

```javascript
// Cambia esto por el dominio que quieras consultar
const NAME = "css-tricks",
DOMAIN = `https://${NAME}.com`,
```
