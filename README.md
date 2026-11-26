# Kristian Sollie Pedersen | Personal Portfolio & Digital Workbench

Nordic Technical Workbench portfolio engineered with **Next.js (App Router)**, **React 19**, **TypeScript (strict)**, **Tailwind CSS v4**, and **Framer Motion**.

## Architecture & Content Structure

All bilingual copy, projects, tech stack domains, workbench bento modules, and timeline milestones are decoupled from UI components:

- `content/profile.ts`: Coordinates (`60.27° N, 11.17° E`), GitHub (`kripe00`), LinkedIn, MakerWorld, and repository URLs.
- `content/no.ts`: Norwegian (Bokmål) content (default locale).
- `content/en.ts`: English content.
- `content/types.ts`: Shared strict TypeScript schemas keeping NO and EN synchronized.
- `app/globals.css`: Custom CSS variable design token system supporting **Dark Obsidian** (`[data-theme="dark"]`) and **Light CAD Blueprint** (`[data-theme="blueprint"]`) modes.
- `components/sections/SpatialCadViewport.tsx`: Interactive 60 FPS 3D isometric/perspective HTML5 Canvas CAD viewport with three live assemblies (`Floorplan 3D`, `OpenSCAD BOSL2`, `Core-84`), pointer orbit, and extrusion controls.

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npx tsc --noEmit
npm run lint
npm run build
```
