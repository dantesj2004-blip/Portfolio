# Portfolio — Alejandro Sánchez

Portfolio personal: diseñador gráfico, community manager y programador web.
HTML + CSS + JS, sin build. Se despliega tal cual en Netlify.

## Estructura

- `index.html` — página principal
- `css/portfolio.css` — estilos
- `js/portfolio.js` — animación de la foto, iconos Lucide, formulario de contacto
- `assets/` — foto (`mi-foto.png`), foto de reserva (`mi-foto.svg`) y CV descargable (`CV-Alejandro-Sanchez.pdf`)

## Personalizar

- **Foto:** guarda tu foto del CV como `assets/mi-foto.png` (si no existe, se usa `mi-foto.svg`).
- **CV:** sustituye `assets/CV-Alejandro-Sanchez.pdf` por tu versión actual (mismo nombre).
- **Email del formulario:** cambia `dante.s.j.2004@gmail.com` en `index.html` (campo `action` del formulario) por tu email. La primera vez que alguien envíe el formulario, FormSubmit te pedirá activar el buzón.

## Subir a GitHub

```bash
cd portfolio-alejandro
git init
git add .
git commit -m "Portfolio inicial"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git push -u origin main
```

## Desplegar en Netlify

1. Entra en [netlify.com](https://netlify.com) → **Add new site → Import an existing project**.
2. Conecta GitHub y elige el repositorio.
3. Build command: *(vacío)* · Publish directory: `.` (ya configurado en `netlify.toml`).
4. **Deploy**. Cada `push` a `main` redespliega solo.
