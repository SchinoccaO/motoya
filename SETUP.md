# 🚀 Guía de Inicio Rápido - MotoYA

## 📋 Prerequisitos

- **Node.js** 18+ ([Descargar](https://nodejs.org/))
- **npm** 9+ o **yarn** 1.22+ (incluido con Node.js)
- **Git** ([Descargar](https://git-scm.com/))
- **MongoDB** ([Instalar](https://www.mongodb.com/try/download/community)) o cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- *Opcional*: **PostgreSQL** si prefieres base de datos relacional

## ⚙️ Instalación

### 1. Clonar el repositorio
```bash
git clone <url-del-repositorio>
cd MOTOYA
```

### 2. Instalar dependencias raíz
```bash
npm install
```

### 3. Configurar Cliente (Frontend)
```bash
cd client
npm install
```

### 4. Configurar Servidor (Backend)
```bash
cd ../server
npm install
```

### 5. Variables de entorno
```bash
# En la carpeta server/
cp .env.example .env
```

Edita el archivo `.env` con tus configuraciones:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/motoya
JWT_SECRET=tu_clave_secreta_cambiar
```

## 🏃 Ejecución en Desarrollo

### Opción A: Todo junto (recomendado)
Desde la raíz del proyecto:
```bash
npm run dev
```
Esto inicia:
- Frontend en `http://localhost:3000`
- Backend en `http://localhost:5000`

### Opción B: Por separado

**Terminal 1 - Backend:**
```bash
cd server
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd client
npm run dev
```

## 📁 Archivos Actuales

Por ahora, los archivos HTML están en `client/public/`:
- `http://localhost:3000/index.html` - Perfil de taller
- `http://localhost:3000/registromecanico.html` - Registro
- `http://localhost:3000/resena.html` - Reseñas

## 🔄 Próximos Pasos (Migración a React)

1. **Crear componentes React**:
   ```bash
   cd client/src/components
   # Crear Navbar.jsx, TallerCard.jsx, etc.
   ```

2. **Configurar rutas**:
   ```javascript
   // client/src/App.jsx
   import { BrowserRouter, Routes, Route } from 'react-router-dom';
   ```

3. **Conectar con API**:
   ```javascript
   // client/src/services/api.js
   import axios from 'axios';
   const api = axios.create({ baseURL: '/api' });
   ```

## 🛠️ Comandos Útiles

### Desarrollo
```bash
npm run dev              # Inicia frontend + backend
npm run dev:client       # Solo frontend
npm run dev:server       # Solo backend
```

### Build Production
```bash
npm run build            # Build todo
npm run build:client     # Build solo frontend
npm run build:server     # Build solo backend
```

### Linting y Format
```bash
npm run lint            # Revisar código
npm run format          # Formatear con Prettier
```

## 🐛 Troubleshooting

### Puerto ya en uso
```bash
# Windows PowerShell
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Cambiar puerto en vite.config.js o .env
```

### Problemas con MongoDB
```bash
# Verificar que MongoDB esté corriendo
# Windows: Abrir "Services" y buscar "MongoDB"
# O usar MongoDB Atlas (cloud)
```

### Error de CORS
Verifica que `ALLOWED_ORIGINS` en `.env` incluya tu frontend URL.

## 📚 Recursos

- [Documentación React](https://react.dev/)
- [Express.js Guide](https://expressjs.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MongoDB Manual](https://docs.mongodb.com/)

## 💡 Tips

- Usa **Thunder Client** (VS Code) o **Postman** para probar la API
- Instala extensiones de VS Code: ES7 React/Redux, Tailwind IntelliSense
- Revisa `docs/ARQUITECTURA.md` para entender la estructura

---

**¿Problemas?** Revisa los logs en consola o abre un issue en GitHub.
