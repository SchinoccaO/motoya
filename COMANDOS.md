# ⚡ Comandos Rápidos - MotoYA

## 🚀 Inicio Rápido

```bash
# Instalación completa
npm install
cd client && npm install
cd ../server && npm install

# Iniciar todo (desde raíz)
npm run dev
```

## 📦 Gestión de Dependencias

### Instalar paquete en el cliente
```bash
cd client
npm install <paquete>
# Ejemplo: npm install axios react-router-dom
```

### Instalar paquete en el servidor
```bash
cd server
npm install <paquete>
# Ejemplo: npm install mongoose jsonwebtoken
```

### Instalar dependencia de desarrollo
```bash
npm install -D <paquete>
# Ejemplo: npm install -D eslint prettier
```

## 🏃 Desarrollo

```bash
# Todo junto (frontend + backend)
npm run dev

# Solo frontend (puerto 3000)
npm run dev:client

# Solo backend (puerto 5000)
npm run dev:server
```

## 🔨 Build y Producción

```bash
# Build completo
npm run build

# Build solo frontend
npm run build:client

# Build solo backend
npm run build:server

# Ejecutar en producción
npm start
```

## 🧹 Linting y Formato

```bash
# Revisar código
npm run lint

# Formatear código
npm run format

# Fix automático de ESLint
npm run lint -- --fix
```

## 🗄️ Base de Datos

### MongoDB Local
```bash
# Iniciar MongoDB (Windows)
net start MongoDB

# Detener MongoDB
net stop MongoDB

# Conectar con mongo shell
mongosh

# Ver bases de datos
show dbs

# Usar base de datos MotoYA
use motoya

# Ver colecciones
show collections
```

### MongoDB Atlas (Cloud)
1. Crear cuenta en [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Crear cluster gratuito
3. Obtener connection string
4. Actualizar `MONGODB_URI` en `.env`

## 🧪 Testing

```bash
# Correr tests (cuando estén configurados)
npm test

# Tests en modo watch
npm run test:watch

# Coverage
npm run test:coverage
```

## 📂 Gestión de Archivos

### Ver estructura del proyecto
```powershell
# PowerShell
tree /F

# O con mejor formato
Get-ChildItem -Recurse -Directory | Select-Object FullName
```

### Buscar en archivos
```powershell
# Buscar texto en todos los archivos
Select-String -Pattern "texto" -Path .\* -Recurse
```

## 🔧 Troubleshooting

### Limpiar caché y reinstalar
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install

# En cliente y servidor también
cd client
rm -rf node_modules package-lock.json
npm install

cd ../server
rm -rf node_modules package-lock.json
npm install
```

### Puerto ocupado
```powershell
# Windows: Ver qué proceso usa el puerto 3000
netstat -ano | findstr :3000

# Matar proceso por PID
taskkill /PID <número_pid> /F
```

### Problemas con permisos
```powershell
# Ejecutar PowerShell como Administrador
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

## 🌐 Git

```bash
# Estado
git status

# Ver cambios
git diff

# Agregar todos los cambios
git add .

# Commit
git commit -m "Descripción del cambio"

# Push
git push origin main

# Pull (actualizar)
git pull

# Crear rama
git checkout -b feature/nombre-feature

# Cambiar de rama
git checkout main

# Ver historial
git log --oneline --graph
```

## 📝 Atajos Útiles

### Crear archivos rápidamente
```powershell
# Crear archivo vacío
New-Item -Path "ruta\archivo.js" -ItemType File

# Crear múltiples archivos
"componente1.jsx", "componente2.jsx" | ForEach-Object { New-Item -Path "client\src\components\$_" -ItemType File }
```

### Abrir VS Code
```bash
# Abrir proyecto en VS Code
code .

# Abrir archivo específico
code README.md
```

## 🔍 Debugging

### Backend (Node.js)
```bash
# Modo debug
node --inspect src/index.js

# Con nodemon y debug
nodemon --inspect src/index.js
```

### Frontend (React)
- Usa React DevTools (extensión de Chrome/Firefox)
- `console.log()` es tu amigo
- Breakpoints en Chrome DevTools (F12)

## 📊 Análisis de Paquetes

```bash
# Ver tamaño de dependencias
npm list --depth=0

# Paquetes desactualizados
npm outdated

# Actualizar paquetes
npm update

# Auditoría de seguridad
npm audit

# Fix automático
npm audit fix
```

## 🚀 Deploy Rápido

### Frontend (Vercel)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
cd client
vercel
```

### Backend (Railway)
```bash
# Instalar Railway CLI
npm i -g @railway/cli

# Login
railway login

# Deploy
cd server
railway up
```

---

**💡 Tip**: Guarda este archivo como referencia rápida. Puedes agregar tus propios comandos personalizados.
