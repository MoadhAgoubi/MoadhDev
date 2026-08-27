# MoadhDev — site personnel

Site personnel de développeur : qui je suis, mon parcours et mes projets.
Design minimaliste, une seule page, pensé pour évoluer (widgets à venir).

## Stack

- [Next.js 15](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS 4](https://tailwindcss.com)
- Polices : Inter, JetBrains Mono, Caveat (via `next/font`)
- Déployé sur [Vercel](https://vercel.com)

## Personnaliser le contenu

Tout le contenu (textes, chiffres, expériences, projets, témoignages, liens)
vit dans **`src/data/site.ts`**. Modifiez ce fichier, le reste suit.

Points à personnaliser en priorité :

- `stats` : les chiffres sont des valeurs de départ, mettez les vôtres ;
- `experience` : périodes et intitulés à ajuster à votre vrai parcours ;
- `testimonials` : remplacez les témoignages d'exemple par de vrais retours ;
- `socials` : le lien LinkedIn pointe vers la page d'accueil, mettez votre profil.

## Développement

```bash
npm install
npm run dev
```

Le site tourne sur [http://localhost:3000](http://localhost:3000).

## Architecture

```
src/
  data/site.ts            ← tout le contenu du site
  app/
    layout.tsx            ← polices, métadonnées, <html lang="fr">
    page.tsx              ← composition des sections
    globals.css           ← thème (couleurs, polices) Tailwind 4
  components/
    Header.tsx
    SectionLabel.tsx
    ScrollTopButton.tsx
    sections/             ← une section = un composant
      Hero.tsx  TrustedBy.tsx  About.tsx  Achievements.tsx
      Stacks.tsx  Experience.tsx  Projects.tsx  Testimonials.tsx  Footer.tsx
```

Chaque section est un composant autonome : pour ajouter un widget, créez un
composant dans `src/components/sections/` (ou `src/components/widgets/`) et
insérez-le dans `src/app/page.tsx` à l'endroit voulu.
