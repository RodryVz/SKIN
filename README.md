# Softcare Skin

Una landing page moderna y minimalista para una marca premium de cuidado de la piel. Construida con React, Vite, Tailwind CSS y Framer Motion, con un enfoque particular en microinteracciones fluidas y estética de alta gama.

## 🏗️ Arquitectura del Proyecto

Para garantizar escalabilidad, claridad y un fácil mantenimiento, el proyecto se ha dividido en componentes modulares. Anteriormente, todo residía en `App.jsx`, lo que dificultaba su crecimiento y lectura. Ahora el código funciona de manera muchísimo más limpia y ordenada.

### Estructura de Carpetas

```text
src/
├── assets/                     # Imágenes y recursos estáticos
├── components/                 # Componentes reutilizables de React
│   ├── layout/                 # Elementos ubicuos / repetitivos de la estructura
│   │   ├── Navbar.jsx          # Menú principal de navegación superior
│   │   └── Footer.jsx          # Pie de página y enlaces extra, newsletter
│   └── sections/               # Bloques independientes de contenido
│       ├── HeroSection.jsx     # Banner inicial (Imagen modelo + Título principal)
│       ├── StorySection.jsx    # Filosofía de la marca e introducción de ritual de 3 pasos
│       └── GridSection.jsx     # Catálogo o colección inicial con listado interactivo
├── constants/                  # Constantes y datos para hidratar de información la UI
│   └── data.js                 # Colecciones de productos e integraciones de configuración estandar de framer motion
├── App.jsx                     # Orquestador principal (Agrupa y renderiza los componentes)
├── main.jsx                    # Punto de entrada de React
└── index.css                   # Estilos globales y custom classes
```

## 🚀 Optimizaciones de Rendimiento y Transiciones

Las animaciones (manejadas a través de `framer-motion`) han sido optimizadas buscando mayor soltura y fluidez perceptiva, eliminando por completo cualquier comportamiento "trabado" (choppy) o salto durante el scroll:
- **Unificación de Transiciones (`smoothTransition`)**: En el archivo `constants/data.js` establecí una curva cúbica fluida compartida (`[0.22, 1, 0.36, 1]`) de modo que cada bloque entre en cuadro con una aceleración elegante y salida súper gradual que parece físicamente natural, reemplazando los típicos y ásperos `easeOut` genéricos.
- **`willChange` / Hardware Acceleration (GPU)**: Todos los grandes contenedores dinámicos ahora poseen un atributo CSS en línea `willChange: "transform, opacity"`. Su propósito es delegar el cómputo del re-dibujado directo al hardware gráfico mitigando picos de latencia en el re-render y asegurando 60 frameworks por segundo fluidos al scrollear.
- **Reducción de Atributos de Recomputación**: Mantenemos las animaciones en las propiedades más baratas para el engine (`transform` via variables de scale/position y `opacity`).

## 🛠️ Tecnologías

- **Core**: React 18, Vite
- **Styling**: Tailwind CSS (CDN cargado en el archivo base) y CSS tradicional para ciertos utilitarios.
- **Motion Engine**: Framer Motion
- **Iconos / Tipos**: Material Symbols Outlined, Manrope (Google Fonts)

## 🏃 Cómo usar el Proyecto

1. Ábrelo en Visual Studio Code o entorno preferido.
2. Si es tu primera vez aquí, no olvides descargar las librerias: `npm install`
3. Arranca el motor de desarrollo (Hot Reload): `npm run dev`
4. Observa el resultado impecable en la url de localhost otorgada en la consola. Todo renderiza de manera óptima y modular.
