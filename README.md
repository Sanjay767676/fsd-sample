# Simple Full-Stack Project

This project contains:
- `frontend/` (React + Vite)
- `backend/` (Node.js + Express)

## Root Scripts

From the project root:

```bash
npm run install:all
npm run build
npm run start:backend
npm run dev:frontend
```

## Project Structure

```text
root/
  frontend/
  backend/
```

## Environment Variables

### Frontend (`frontend/.env`)

```env
VITE_API_URL=http://localhost:5000
```

### Backend (`backend/.env`)

```env
PORT=5000
```

## Run Locally

1. Install backend dependencies:

```bash
cd backend
npm install
```

2. Start backend:

```bash
npm start
```

3. In a second terminal, install frontend dependencies:

```bash
cd frontend
npm install
```

4. Create `frontend/.env` with `VITE_API_URL=http://localhost:5000`.

5. Start frontend dev server:

```bash
npm run dev
```

6. Open the frontend URL shown by Vite (usually `http://localhost:5173`).

## Build

From `frontend/`:

```bash
npm run build
```

## Backend Endpoint

- `GET /api/message`
- Response:

```json
{
  "message": "Hello from backend"
}
```

## CI/CD (GitHub Actions)

Workflow file: `.github/workflows/ci.yml`

On push to `main`, it:
1. Installs backend dependencies
2. Installs frontend dependencies
3. Starts backend and checks `GET /api/message`
4. Builds frontend

## Deployment Guide

### Option A: Frontend on Vercel + Backend on Render

1. Push this project to GitHub.
2. Deploy backend on Render:
   - Create a new Web Service.
   - Select the repository.
   - Set Root Directory to `backend`.
   - Build Command: `npm install`
   - Start Command: `node server.js`
   - Add environment variable: `PORT=5000` (Render may also provide PORT automatically).
   - Deploy and copy backend URL (example: `https://your-backend.onrender.com`).
3. Deploy frontend on Vercel:
   - Create new project from the same repository.
   - Set Root Directory to `frontend`.
   - Framework preset: Vite.
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Add environment variable: `VITE_API_URL=https://your-backend.onrender.com`
   - Deploy.

### Option B: Frontend on Netlify + Backend on Railway

1. Push this project to GitHub.
2. Deploy backend on Railway:
   - Create a new project from GitHub repository.
   - Set service root to `backend`.
   - Start command: `node server.js`
   - Add environment variable: `PORT=5000` if needed.
   - Deploy and copy backend URL.
3. Deploy frontend on Netlify:
   - Create new site from GitHub.
   - Set Base directory to `frontend`.
   - Build command: `npm run build`
   - Publish directory: `frontend/dist` (or `dist` when base directory is `frontend`).
   - Add environment variable: `VITE_API_URL=https://your-backend-url`
   - Deploy.

## Notes

- Keep CORS enabled in backend (`cors()` middleware).
- Make sure `VITE_API_URL` points to the deployed backend URL in production.
