# Arquitectura del Proyecto MotoYA

## 🏗️ Visión General

MotoYA es una aplicación web full-stack diseñada con arquitectura de tres capas:

1. **Frontend (Client)**: React.js con Tailwind CSS
2. **Backend (Server)**: Node.js + Express API RESTful
3. **Database**: MongoDB (o PostgreSQL según elección)

## 📐 Patrón de Diseño

### Frontend - Arquitectura por Componentes

```
client/src/
├── components/          # Componentes reutilizables
│   ├── common/         # Botones, Inputs, Cards, etc.
│   ├── layout/         # Navbar, Footer, Sidebar
│   └── features/       # Componentes específicos del dominio
├── pages/              # Páginas/rutas principales
│   ├── Home/
│   ├── TallerProfile/
│   ├── RegistroMecanico/
│   └── Resena/
├── services/           # Lógica de comunicación con API
│   ├── api.js         # Cliente Axios configurado
│   ├── tallerService.js
│   ├── userService.js
│   └── resenaService.js
└── utils/              # Helpers, constantes, validaciones
    ├── constants.js
    ├── validators.js
    └── formatters.js
```

### Backend - Arquitectura MVC

```
server/src/
├── config/             # Configuración centralizada
│   ├── database.js    # Conexión a DB
│   └── constants.js
├── controllers/        # Lógica de negocio
│   ├── tallerController.js
│   ├── userController.js
│   └── resenaController.js
├── models/             # Esquemas de datos
│   ├── Taller.js
│   ├── User.js
│   └── Resena.js
├── routes/             # Definición de endpoints
│   ├── tallerRoutes.js
│   ├── userRoutes.js
│   └── resenaRoutes.js
├── middlewares/        # Middlewares personalizados
│   ├── auth.js        # Autenticación JWT
│   ├── validator.js   # Validación de datos
│   └── upload.js      # Manejo de archivos
└── index.js            # Punto de entrada
```

## 🗄️ Modelo de Datos (Propuesto)

### Usuario
```javascript
{
  _id: ObjectId,
  nombre: String,
  email: String (unique),
  password: String (hashed),
  rol: Enum ['usuario', 'mecanico', 'admin'],
  foto: String (URL),
  createdAt: Date,
  updatedAt: Date
}
```

### Taller
```javascript
{
  _id: ObjectId,
  nombre: String,
  tipo: Enum ['taller', 'mecanico_independiente', 'casa_repuestos'],
  propietario: ObjectId (ref: Usuario),
  descripcion: String,
  direccion: {
    calle: String,
    ciudad: String,
    provincia: String,
    coordenadas: {
      lat: Number,
      lng: Number
    }
  },
  telefono: String,
  email: String,
  horarios: {
    lunes: { apertura: String, cierre: String },
    // ... otros días
  },
  servicios: [String],
  fotos: [String],
  verificado: Boolean,
  rating: Number (calculado),
  totalResenas: Number,
  createdAt: Date,
  updatedAt: Date
}
```

### Reseña
```javascript
{
  _id: ObjectId,
  taller: ObjectId (ref: Taller),
  usuario: ObjectId (ref: Usuario),
  rating: Number (1-5),
  tipoServicio: String,
  tiempoPrometido: String,
  tiempoReal: String,
  comentario: String,
  respuestaTaller: String (opcional),
  util: Number (likes),
  createdAt: Date,
  updatedAt: Date
}
```

## 🔄 Flujo de Datos

### Ejemplo: Crear una Reseña

1. **Frontend**: Usuario llena formulario en `resena.html` (React: `<ResenaForm />`)
2. **Service**: `resenaService.create()` envía POST a `/api/resenas`
3. **Backend**: 
   - Middleware de autenticación valida JWT
   - Middleware de validación verifica datos
   - `resenaController.create()` procesa solicitud
   - `Resena.create()` guarda en DB
   - Actualiza rating del taller
4. **Response**: JSON con la reseña creada
5. **Frontend**: Actualiza UI y muestra confirmación

## 🔐 Seguridad

- **Autenticación**: JWT (JSON Web Tokens)
- **Passwords**: bcrypt con salt rounds = 10
- **Validación**: express-validator en backend, react-hook-form en frontend
- **CORS**: Configurado para orígenes permitidos
- **Rate Limiting**: Implementar en producción
- **Sanitización**: XSS protection y SQL injection prevention

## 🚀 Escalabilidad

### Optimizaciones Futuras

1. **Caching**: Redis para datos frecuentes
2. **CDN**: Cloudflare para assets estáticos
3. **Load Balancing**: Nginx reverse proxy
4. **Microservicios**: Separar servicios de notificaciones, búsqueda
5. **WebSockets**: Chat en tiempo real
6. **Queue**: Bull para tareas asíncronas (emails, procesamiento imágenes)

## 📊 Monitoreo y Logs

- **Logs**: Winston o Pino
- **Monitoring**: PM2 en producción
- **Analytics**: Google Analytics + eventos personalizados
- **Error Tracking**: Sentry (opcional)

## 🧪 Testing

- **Frontend**: Jest + React Testing Library
- **Backend**: Jest + Supertest
- **E2E**: Cypress o Playwright
- **API**: Postman/Thunder Client collections

## 📦 Deploy

### Frontend
- **Vercel** o **Netlify** (recomendado para React)
- Build estático servido vía CDN

### Backend
- **Railway**, **Render** o **Heroku**
- Variables de entorno configuradas
- Base de datos en MongoDB Atlas o PostgreSQL en Supabase

### CI/CD
- GitHub Actions para testing y deploy automático
- Branches: `main` (producción), `develop` (staging), `feature/*`

---

**Última actualización**: 2 de enero de 2026
