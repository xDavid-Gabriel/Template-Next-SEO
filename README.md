# Estructura de carpetas

La carpeta pages se utiliza para crear las páginas de tu sitio web. Cada página tiene su propia carpeta dentro de pages, y cada una de estas carpetas puede tener su propias secciones en carpetas adicionales.

Cada sección puede tener sus propios estilos en archivos con el nombre de ejemplo: "section1.styled.js", también puede tener un "atributte" pequeño para almacenar información pequeña relacionada con la sección. Sin embargo, para información más grande, se recomienda usar una API.

Ejemplo de estructura de carpetas:

pages
├── index.jsx
├── home
│ ├── sections
| │ ├── Banner
| | | ├── Banner.jsx  
│ │ │ ├── Banner.styled.js
│ │ │ ├── atributtes.js
| │ ├── Features
| | | ├── Features.jsx  
│ │ │ ├── Features.styled.js
│ │ │ ├── atributtes.js  
│ └── images
│ ├── banner.jpg
│ ├── feature1.jpg
│ ├── feature2.jpg
│ └── feature3.jpg
├── nosotros
│ ├── index.jsx
│ ├── sections
| │ ├── Banner
| | | ├── Banner.jsx  
│ │ │ ├── Banner.styled.js
│ │ │ ├── atributtes.js
| │ ├── Features
| | | ├── Features.jsx  
│ │ │ ├── Features.styled.js
│ │ │ ├── atributtes.js  
│ └── images
│ ├── banner.jpg
│ ├── feature1.jpg
│ ├── feature2.jpg
│ └── feature3.jpg
├── productos
│ ├── index.jsx
│ ├── [slug].jsx
│ ├── sections
| │ ├── Banner
| | | ├── Banner.jsx  
│ │ │ ├── Banner.styled.js
│ │ │ ├── atributtes.js
| │ ├── Features
| | | ├── Features.jsx  
│ │ │ ├── Features.styled.js
│ │ │ ├── atributtes.js  
│ └── images
│ ├── banner.jpg
│ ├── feature1.jpg
│ ├── feature2.jpg
│ └── feature3.jpg

# Ojo

La carpeta "home" no tendra un "index.js" o un "index.jsx" ya que ese archivo con nombre index, solamente en la carpeta "page" su unica funcion es crear paginas, nada mas, es por ello que lo unico que nesecitariamos de la carpeta "home" seria importar las secciones para la el archivo principal "index.js" o index.jsx

Ejemplo:

pages
├── index.jsx
├── home
│ ├── sections
| │ ├── Banner
| | | ├── Banner.jsx  
│ │ │ ├── Banner.styled.js
│ │ │ ├── atributtes.js
| │ ├── Features
| | | ├── Features.jsx  
│ │ │ ├── Features.styled.js
│ │ │ ├── atributtes.js  
│ └── images
│ ├── banner.jpg
│ ├── feature1.jpg
│ ├── feature2.jpg
│ └── feature3.jpg
