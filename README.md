# MotoYA - Plataforma de Gestión de Talleres Mecánicos

Plataforma web para conectar motociclistas con talleres mecánicos, repuestos y servicios relacionados con transparencia y confianza.

## 📁 Estructura del Proyecto

```
MOTOYA/
├── client/                 # Frontend (React.js)
│   ├── public/            # Archivos estáticos y HTML actuales
│   │   ├── assets/        # CSS, imágenes, iconos
│   │   │   ├── css/       # Estilos CSS
│   │   │   └── images/    # Imágenes y recursos visuales
│   │   ├── index.html
│   │   ├── registromecanico.html
│   │   └── resena.html
│   └── src/               # Código fuente React (futuro)
│       ├── components/    # Componentes reutilizables
│       ├── pages/         # Páginas/vistas principales
│       ├── services/      # Servicios API y lógica de negocio
│       └── utils/         # Utilidades y helpers
│
├── server/                # Backend (Node.js/Express)
│   └── src/
│       ├── config/        # Configuración (DB, env, etc.)
│       ├── controllers/   # Controladores de rutas
│       ├── middlewares/   # Middlewares (auth, validación, etc.)
│       ├── models/        # Modelos de datos (Mongoose/Sequelize)
│       └── routes/        # Definición de rutas API
│
├── database/              # Scripts de base de datos
│   ├── migrations/        # Migraciones de esquema
│   └── seeds/             # Datos de prueba
│
├── docs/                  # Documentación del proyecto
│
└── src/                   # [DEPRECADO] Archivos originales
```

## 🚀 Estado Actual

**Fase:** Prototipo HTML estático
- ✅ 3 páginas HTML funcionales con Tailwind CSS
- ✅ Navegación entre páginas
- ✅ CSS modularizado

## 🎯 Roadmap

### Fase 1: Fundación (✅ Completada)
- [x] Estructura de carpetas profesional
- [x] Separación de frontend/backend/database
- [x] Páginas HTML estáticas con diseño

### Fase 2: Frontend React (✅ Completada)
- [x] Migrar a React con Vite
- [x] Componetizar UI (Navbar, Footer)
- [x] Routing con React Router
- [x] 3 páginas funcionales (TallerProfile, RegistroTaller, ResenaForm)
- [ ] Estado global (Context API o Redux)
- [ ] Formularios con validación

### Fase 3: Backend API
- [ ] Setup Node.js + Express
- [ ] Autenticación JWT
- [ ] CRUD de talleres, reseñas, usuarios
- [ ] Upload de imágenes
- [ ] API RESTful documentada

### Fase 4: Base de Datos
- [ ] Diseño del esquema (MongoDB/PostgreSQL)
- [ ] Modelos: Taller, Usuario, Reseña, Servicio
- [ ] Migraciones y seeders

### Fase 5: Integración
- [ ] Conexión frontend-backend
- [ ] Testing (Jest, Cypress)
- [ ] Deploy (Vercel/Netlify + Railway/Heroku)

## 🛠️ Tecnologías Previstas

### Frontend
- React.js 18+
- React Router 6
- Tailwind CSS
- Axios
- Formik/React Hook Form

### Backend
- Node.js 18+
- Express.js
- JWT (autenticación)
- Multer (uploads)
- Mongoose/Sequelize

### Base de Datos
- MongoDB o PostgreSQL
- Redis (caché opcional)

### DevOps
- Git + GitHub
- ESLint + Prettier
- Docker (opcional)
- CI/CD con GitHub Actions

## 📝 Páginas Actuales

1. **index.html** - Perfil de taller con reseñas y métricas
2. **registromecanico.html** - Formulario de registro de talleres
3. **resena.html** - Formulario para dejar reseñas

## 🤝 Contribución

Este proyecto está en desarrollo activo. Para contribuir:
1. Fork el repositorio
2. Crea una rama feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Proyecto en desarrollo - Derechos reservados (2026)
