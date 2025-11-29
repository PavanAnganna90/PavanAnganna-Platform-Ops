# Deployment Guide

This application is currently built as a raw TypeScript/React file (`.tsx`) intended for a development playground. To deploy it to production services like Google Cloud Run or Vercel, we must first wrap it in a standard build tool (Vite) to compile the TypeScript into browser-readable JavaScript.

## Phase 1: Production Setup (Required for all platforms)

Before deploying, run these commands in your project root to set up the build environment.

### 1. Initialize the Project
Open your terminal in the project folder and run:

```bash
# 1. Initialize Node.js project
npm init -y

# 2. Install React and Icons
npm install react react-dom lucide-react

# 3. Install Build Tools (Vite & TypeScript)
npm install -D vite @vitejs/plugin-react typescript @types/react @types/react-dom
```

### 2. Create Configuration Files

**Create a file named `vite.config.ts` in the root:**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})
```

**Create a file named `tsconfig.json` in the root:**
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

### 3. Restructure Files
1. Create a folder named `src`.
2. Move `index.tsx` into the `src` folder.
3. Update `index.html`:
   - Remove the `<script type="importmap">...</script>` block completely.
   - Update the script tag at the bottom:
     Change: `<script type="module" src="./index.tsx"></script>`
     To: `<script type="module" src="/src/index.tsx"></script>`

---

## Option 1: Deploy to Google Cloud Run

Cloud Run requires a Docker container. We will build the app using Node.js and serve it using Nginx.

### 1. Create a `Dockerfile`
Create a file named `Dockerfile` (no extension) in your root directory:

```dockerfile
# Stage 1: Build
FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Google Cloud Run expects usage of the $PORT environment variable
# We configure Nginx to listen on port 8080 by default
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
```

*Note: You may need to update `package.json` "scripts" to include `"build": "vite build"`.*

### 2. Build and Deploy
Run the following Google Cloud CLI commands:

```bash
# 1. Build the image (replace PROJECT_ID with your GCP Project ID)
gcloud builds submit --tag gcr.io/PROJECT_ID/pavan-portfolio

# 2. Deploy to Cloud Run
gcloud run deploy pavan-portfolio \
  --image gcr.io/PROJECT_ID/pavan-portfolio \
  --platform managed \
  --region us-central1 \
  --allow-unauthenticated
```

---

## Option 2: GitHub via Vercel

This is the recommended path for personal portfolios as it offers free hosting and automatic HTTPS.

*(Note: "Verbal" in your request is likely a typo for "Vercel", the standard platform for deploying React/Vite apps from GitHub).*

### 1. Push to GitHub
1. Create a new repository on GitHub.
2. Run these commands locally:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

### 2. Connect Vercel
1. Go to [Vercel.com](https://vercel.com) and sign up/login.
2. Click **"Add New..."** -> **"Project"**.
3. Select "Continue with GitHub".
4. Select the repository you just created.
5. Vercel will automatically detect `Vite` as the framework.
6. Click **Deploy**.

Vercel will build your site and provide you with a live URL (e.g., `pavan-portfolio.vercel.app`).
