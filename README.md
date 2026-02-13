# API REST - Gestión de Cursos 📚

API RESTful desarrollada con Node.js y Express para la gestión integral de cursos de programación e idiomas. Permite consultar, agregar, modificar y eliminar cursos (CRUD completo) con filtrado dinámico por lenguaje y nivel de dificultad.

## Características Clave ✨

✅ **CRUD completo** para las categorías de Idiomas y Programación.
✅ **Filtrado dinámico** por lenguaje y nivel (básico, intermedio, etc.).
✅ **Estructura modular** escalable utilizando `express.Router()`.
✅ **Almacenamiento en memoria** ideal para desarrollo y pruebas rápidas.
✅ **Manejo de peticiones JSON** para creación y actualización de datos.

## Tecnologías Utilizadas 🛠️

* **Node.js (v24+)**: Entorno de ejecución JavaScript.
* **Express.js (v5.2.1)**: Framework web ligero y flexible.
* **Nodemon**: Herramienta de desarrollo para reinicio automático del servidor.
* **Insomnia / REST Client**: Para la prueba de endpoints y consumo de la API.

## Estructura del Proyecto 📁

```text
API-REST-CURSOS/
├── datos/                 # Base de datos en memoria
│   └── cursos.js          # Arreglos de objetos con la información predefinida
├── routers/               # Controladores y definición de rutas
│   ├── idiomas.js         # Lógica CRUD para cursos de idiomas
│   └── programacion.js    # Lógica CRUD para cursos de programación
├── .gitignore             # Archivos excluidos del control de versiones
├── app.js                 # Punto de entrada principal y configuración del servidor
├── index.http             # Archivo de pruebas locales con REST Client
└── package.json           # Gestión de dependencias y scripts de ejecución
```
Instalación y Uso 🚀
Prerequisitos
Node.js instalado en tu sistema.


Git.


Pasos de Instalación
Clonar el repositorio:
```
git clone [https://github.com/Masterax1109/API-REST-CURSOS.git](https://github.com/Masterax1109/API-REST-CURSOS.git)
cd API-REST-CURSOS
```

Instalar dependencias:
```
npm install
```

Iniciar el servidor en modo desarrollo:
```
npm run dev
```

Verificar funcionamiento:Abre tu navegador o envía una petición GET a http://localhost:3000.Respuesta esperada: "servidor cursos idiomas".
Endpoints Disponibles 🌐La API está dividida en dos rutas principales: /api/cursos/programacion y /api/cursos/idiomas. Ambos comparten la misma estructura de métodos.
Nota: Reemplaza <categoria> por programacion o idiomas según corresponda.

| Método | Endpoint | Descripción |
|---|---|---|
| `GET` | `/api/cursos` | Devuelve el objeto completo con ambas categorías. |
| `GET` | `/api/cursos/<categoria>` | Obtiene todos los cursos de esa categoría. |
| `GET` | `/api/cursos/<categoria>/:lenguaje` | Filtra los cursos por el nombre del lenguaje/idioma. |
| `GET` | `/api/cursos/<categoria>/:lenguaje/:nivel` | Filtra los cursos por lenguaje y su nivel específico. |
| `POST` | `/api/cursos/<categoria>` | Crea un nuevo curso. |
| `PUT` | `/api/cursos/<categoria>/:id` | Actualiza un curso completo basado en su ID. |
| `PATCH` | `/api/cursos/<categoria>/:id` | Modifica propiedades específicas de un curso. |
| `DELETE` | `/api/cursos/<categoria>/:id` | Elimina un curso basado en su ID. |

```
    "titulo": "C++",
    "nivel": "Avanzado",
    "duracion": "4 meses",
    "costo": "150$"
}
```

Datos Predefinidos 📦
Al iniciar el servidor, la API carga automáticamente 12 cursos en memoria para facilitar las pruebas:

Idiomas:

Inglés (Básico e Intermedio)

Francés (Básico e Intermedio)

Portugués (Básico e Intermedio)

Programación:

Python (Básico e Intermedio)

JavaScript (Básico e Intermedio)

Java (Básico e Intermedio)

Ejemplos de Uso (JSON) 📝
1. Crear un nuevo curso de Programación (POST)
Petición a: POST http://localhost:3000/api/cursos/programacion
Headers: Content-Type: application/json
Body:
```
{
    "id": 7,
    "titulo": "C++",
    "nivel": "Avanzado",
    "duracion": "4 meses",
    "costo": "150$"
}
```
2. Actualizar solo el costo de un curso (PATCH)
Petición a: PATCH http://localhost:3000/api/cursos/idiomas/1
Headers: Content-Type: application/json
Body:
```
{
    "costo": "100$"
}
```

Guía de Pruebas con Insomnia / REST Client 🧪
Obtener la lista completa: Realiza un GET a http://localhost:3000/api/cursos para familiarizarte con el JSON original.

Probar los parámetros de ruta (Filtros): Realiza un GET a http://localhost:3000/api/cursos/programacion/python/basico.

Agregar información: Usa el método POST enviando un objeto JSON en el Body para agregar un nuevo idioma. Revisa que el servidor responda con el arreglo actualizado incluyendo tu nuevo elemento al final.

Modificar y Eliminar: Intenta modificar el curso que acabas de crear usando PUT (pasando el ID en la URL) y luego elimínalo usando DELETE.
