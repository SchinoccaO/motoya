# 📂 Estructura del Proyecto MotoYA

```
MOTOYA/
│
├── 📄 README.md                    # Documentación principal del proyecto
├── 📄 SETUP.md                     # Guía de instalación y configuración
├── 📄 TODO.md                      # Lista de tareas y roadmap
├── 📄 .gitignore                   # Archivos ignorados por Git
├── 📄 package.json                 # Dependencias raíz (monorepo)
│
├── 📁 client/                      # FRONTEND (React.js)
│   ├── 📄 package.json            # Dependencias del cliente
│   ├── 📄 vite.config.js          # Configuración de Vite
│   ├── 📄 tailwind.config.js      # Configuración de Tailwind CSS
│   │
│   ├── 📁 public/                 # Archivos estáticos
│   │   ├── 📄 index.html          # Página principal (taller)
│   │   ├── 📄 registromecanico.html  # Formulario de registro
│   │   ├── 📄 resena.html         # Formulario de reseñas
│   │   │
│   │   └── 📁 assets/
│   │       ├── 📁 css/            # Estilos CSS
│   │       │   ├── index.css
│   │       │   ├── registromecanico.css
│   │       │   └── resena.css
│   │       │
│   │       └── 📁 images/         # Imágenes y logos (futuro)
│   │
│   └── 📁 src/                    # Código React (próximo)
│       ├── 📁 components/         # Componentes reutilizables
│       │   ├── common/           # Button, Input, Card, etc.
│       │   ├── layout/           # Navbar, Footer, Sidebar
│       │   └── features/         # Componentes específicos
│       │
│       ├── 📁 pages/              # Páginas/rutas principales
│       │   ├── Home/
│       │   ├── TallerProfile/
│       │   ├── RegistroMecanico/
│       │   └── Resena/
│       │
│       ├── 📁 services/           # Lógica de API
│       │   ├── api.js            # Cliente Axios
│       │   ├── tallerService.js
│       │   ├── userService.js
│       │   └── resenaService.js
│       │
│       └── 📁 utils/              # Utilidades
│           ├── constants.js
│           ├── validators.js
│           └── formatters.js
│
├── 📁 server/                     # BACKEND (Node.js + Express)
│   ├── 📄 package.json            # Dependencias del servidor
│   ├── 📄 .env.example            # Plantilla de variables de entorno
│   │
│   └── 📁 src/
│       ├── 📄 index.js            # Punto de entrada del servidor
│       │
│       ├── 📁 config/             # Configuración
│       │   ├── database.js       # Conexión a BD
│       │   └── constants.js
│       │
│       ├── 📁 controllers/        # Lógica de negocio
│       │   ├── tallerController.js
│       │   ├── userController.js
│       │   └── resenaController.js
│       │
│       ├── 📁 models/             # Modelos de datos
│       │   ├── Taller.js
│       │   ├── User.js
│       │   └── Resena.js
│       │
│       ├── 📁 routes/             # Rutas API
│       │   ├── tallerRoutes.js
│       │   ├── userRoutes.js
│       │   └── resenaRoutes.js
│       │
│       └── 📁 middlewares/        # Middlewares
│           ├── auth.js           # Autenticación JWT
│           ├── validator.js      # Validación de datos
│           └── upload.js         # Subida de archivos
│
├── 📁 database/                   # SCRIPTS DE BASE DE DATOS
│   ├── 📁 migrations/             # Migraciones de esquema
│   └── 📁 seeds/                  # Datos de prueba
│
└── 📁 docs/                       # DOCUMENTACIÓN
    └── 📄 ARQUITECTURA.md         # Detalles de arquitectura

```

## 📊 Estado Actual

### ✅ Completado
- Estructura de carpetas profesional
- Archivos HTML estáticos con diseño
- CSS modularizado con Tailwind
- Configuración de proyecto (package.json)
- Servidor Express básico
- Documentación completa

### 🚧 En Progreso
- Migración a React
- API RESTful
- Autenticación

### 📋 Pendiente
- Base de datos
- Testing
- Deploy

## 🎯 Próximo Paso

**Migrar HTML a componentes React**

1. Instalar dependencias:
   ```bash
   cd client
   npm install
   ```

2. Crear primer componente:
   ```bash
   # Crear client/src/App.jsx
   # Crear client/src/main.jsx
   ```

3. Iniciar dev server:
   ```bash
   npm run dev
   ```

---

**Última actualización**: 2 enero 2026
