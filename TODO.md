# 📝 TODO List - MotoYA

## 🎯 Sprint 1: Fundación (2-3 días)

- [x] Crear estructura de carpetas profesional
- [x] Configurar package.json para monorepo
- [x] Configurar Tailwind CSS
- [x] Crear servidor Express básico
- [x] Documentación de arquitectura
- [ ] Configurar ESLint y Prettier
- [ ] Setup de Git hooks (Husky)

## 🎨 Sprint 2: Frontend React (1 semana)

### Componentes Comunes
- [ ] `<Button />` - Botón reutilizable con variantes
- [ ] `<Input />` - Campo de entrada con validación
- [ ] `<Card />` - Tarjeta genérica
- [ ] `<Modal />` - Modal/dialog
- [ ] `<Navbar />` - Navegación principal
- [ ] `<Footer />` - Pie de página

### Páginas
- [ ] Migrar `index.html` → `<TallerProfile />`
- [ ] Migrar `registromecanico.html` → `<RegistroTaller />`
- [ ] Migrar `resena.html` → `<ResenaForm />`
- [ ] Crear `<Home />` - Landing page
- [ ] Crear `<BuscarTalleres />` - Búsqueda y filtros

### Routing
- [ ] Configurar React Router
- [ ] Implementar rutas protegidas
- [ ] Manejo de 404

### Estado
- [ ] Context API para autenticación
- [ ] Context para tema (dark/light)
- [ ] Manejo de estado de formularios

## ⚙️ Sprint 3: Backend API (1 semana)

### Base de Datos
- [ ] Diseñar esquema de base de datos
- [ ] Crear modelos Mongoose/Sequelize
- [ ] Seeds de datos de prueba
- [ ] Migraciones iniciales

### Autenticación
- [ ] Registro de usuarios
- [ ] Login con JWT
- [ ] Middleware de autenticación
- [ ] Refresh tokens
- [ ] Recuperación de contraseña

### CRUD Talleres
- [ ] GET `/api/talleres` - Listar con filtros
- [ ] GET `/api/talleres/:id` - Detalle
- [ ] POST `/api/talleres` - Crear (auth)
- [ ] PUT `/api/talleres/:id` - Actualizar (auth)
- [ ] DELETE `/api/talleres/:id` - Eliminar (auth)

### CRUD Reseñas
- [ ] GET `/api/resenas` - Listar por taller
- [ ] POST `/api/resenas` - Crear (auth)
- [ ] PUT `/api/resenas/:id` - Respuesta del taller
- [ ] PATCH `/api/resenas/:id/util` - Marcar como útil

### Upload de Archivos
- [ ] Configurar Multer
- [ ] Upload de fotos de perfil
- [ ] Upload de fotos de talleres
- [ ] Validación de tipos y tamaños

## 🔗 Sprint 4: Integración (3-4 días)

- [ ] Conectar frontend con API
- [ ] Manejo de errores centralizado
- [ ] Loading states y skeletons
- [ ] Toast notifications
- [ ] Optimistic updates
- [ ] Paginación infinita o tradicional

## 🧪 Sprint 5: Testing (3-4 días)

### Frontend
- [ ] Unit tests con Jest
- [ ] Component tests con RTL
- [ ] E2E con Cypress básico

### Backend
- [ ] Unit tests de controladores
- [ ] Integration tests de rutas
- [ ] Tests de autenticación

## 🚀 Sprint 6: Deploy (2-3 días)

- [ ] Configurar variables de entorno de producción
- [ ] Build optimizado del frontend
- [ ] Deploy frontend en Vercel/Netlify
- [ ] Deploy backend en Railway/Render
- [ ] Configurar MongoDB Atlas
- [ ] CI/CD con GitHub Actions
- [ ] Monitoreo básico

## 🎁 Features Bonus (Futuro)

### MVP+
- [ ] Sistema de favoritos
- [ ] Mapa interactivo con talleres
- [ ] Chat en tiempo real (Socket.io)
- [ ] Notificaciones push
- [ ] Exportar reseñas a PDF

### V2
- [ ] Sistema de citas/reservas
- [ ] Marketplace de repuestos
- [ ] Programa de puntos/recompensas
- [ ] App móvil (React Native)
- [ ] Panel de administración

### Optimizaciones
- [ ] Server-side rendering (Next.js)
- [ ] Redis para caché
- [ ] CDN para imágenes
- [ ] WebP y lazy loading
- [ ] PWA (Progressive Web App)

---

**Actualizado**: 2 enero 2026  
**Prioridad actual**: Sprint 2 - Frontend React
