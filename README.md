# Portfolio Demo

A demo personal portfolio site built with Vite + React + TypeScript + Tailwind CSS,
based on a minimal "UI/UX designer" portfolio layout: hero, selected work grid,
service accordion, experience timeline, and a contact section.

Note: the profile photo is a generic placeholder illustration, not a real photo —
swap in your own image in `src/components/AvatarPlaceholder.tsx` (or replace it
with an `<img>` tag pointing at `/public/your-photo.jpg`).

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview
```

## Structure

```
src/
  components/
    Navbar.tsx          sticky pill nav bar
    AvailableBadge.tsx   "Available for new project" pill
    AvatarPlaceholder.tsx placeholder profile illustration
    Hero.tsx             name/headline + intro
    SelectedWork.tsx     filterable project grid
    Service.tsx          accordion of services
    Experience.tsx       dark timeline card
    Contact.tsx          closing CTA + socials
  data.ts               all editable content (nav, socials, work items, services, experience)
  App.tsx
  main.tsx
  index.css
```

Edit `src/data.ts` to swap in your own name, projects, services, and experience.
