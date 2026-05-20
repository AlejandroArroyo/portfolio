# AGENTS.md

## Objetivo

Portfolio profesional senior con enfoque editorial, sobrio y corporativo.
Pivota sobre resiliencia de sistemas, operaciones críticas, ciberseguridad y diagnóstico avanzado.
Tono: español de España, formal, sin anglicismos innecesarios.

## Stack

- Astro 4.15 (SSG estático)
- Tailwind CSS 3.4
- JavaScript (ES modules)
- Node.js 24

## Reglas

- Mantener estética minimalista oscura (fondo #070708)
- No añadir librerías ni dependencias innecesarias
- Todo el contenido editable vive en `src/data/content.json`
- Los componentes leen exclusivamente de content.json, nunca hardcodean texto
- Responsive progresivo: px-4 (móvil) → px-6 (tablet) → px-8 (desktop)
- Ancho máximo global: max-w-[1400px]
- Accesibilidad: focus-visible, contraste alto, semántica HTML
- Español de España en toda la interfaz y contenido

## Estado actual

- Header con indicador de estado "NOMINAL" y navegación responsive
- Hero con propuesta de valor orientada a negocio + panel de valores clave
- Métricas (3 KPIs: SLA 99,99%, 8 Años, < 15m MTTR)
- Cronología profesional (3 roles en NTT DATA: 2017-2025)
- Competencias técnicas (3 columnas: Gobernanza, Diagnóstico, Ciberseguridad)
- Certificaciones (4 credenciales: Máster, CCNA, CyberOps, FCP)
- Contacto con estética de terminal segura
- Footer con créditos
- Panel de administración CMS en /admin (puerto 3100)
- Sección de casos de estudio eliminada (contenido inventado)

## Estructura de archivos

```
src/
  data/
    content.json          ← Única fuente de verdad para todo el contenido
  layouts/
    Layout.astro          ← HTML semántico, SEO, fuentes, reset global
  components/
    Header.astro          ← Barra superior con estado y navegación
    Hero.astro            ← Propuesta de valor + panel lateral de valores
    Metrics.astro         ← Tablero de 3 métricas clave
    Timeline.astro        ← Cronología profesional con stack por rol
    TechArsenal.astro     ← 3 columnas de competencias técnicas
    Certifications.astro  ← Grid de 4 certificaciones
    Contact.astro         ← Terminal de contacto + footer
  pages/
    index.astro           ← Página principal, orquesta todos los componentes
admin/
  server.js               ← Servidor Node para el panel CMS (puerto 3100)
  public/
    index.html            ← Interfaz gráfica del editor de contenido
```

## Convenciones

- Componentes en /src/components
- Datos centralizados en /src/data/content.json
- Layouts en /src/layouts
- Páginas en /src/pages
- Panel de administración en /admin

## Scripts

- `npm run dev`     → Servidor de desarrollo Astro (localhost:4321)
- `npm run build`   → Genera estático en /dist
- `npm run preview` → Vista previa de producción
- `npm run admin`   → Panel de edición CMS (localhost:3100)

## Paleta de colores

- Fondo principal: #070708 (brand-dark)
- Superficies: #0d0d0f (brand-surface)
- Bordes: #1a1a1e (brand-border)
- Acento seguro: #10b981 (emerald)
- Acento forense: #06b6d4 (cyan)
- Alerta: #ef4444 (red)
- Texto apagado: #8e8e93

## Tipografía

- Sans: Inter (cuerpo y títulos)
- Mono: JetBrains Mono (datos técnicos, logs, etiquetas)

## Deploy

- Build genera carpeta /dist estática
- Compatible con Netlify Drop, Vercel, GitHub Pages
- Panel de admin NO se incluye en el deploy (solo para desarrollo local)
