# Aryan & Team — Rishikesh Digital Services Portfolio

A showcase site we present to local Rishikesh business owners to prove what we can build for them. Earthy, premium, trustworthy — not corporate.

## Design system

- **Palette (oklch in `src/styles.css`)**: forest green primary (~oklch(0.38 0.08 150)), warm sandstone secondary, warm white background, deep charcoal text, soft accent gold for highlights. Soft layered shadows, generous radius (~14px).
- **Typography**: Poppins via Google Fonts (display + body). Tight headings, relaxed body leading.
- **Vibe**: editorial-meets-local — generous whitespace, large headings, soft natural imagery (mountains, chai, cafés), restrained motion (fade/slide on scroll via framer-motion).
- Fully responsive (mobile-first), accessible contrast in light mode.

## Route architecture (TanStack Start)

Each major section gets its own SSR-friendly route with unique `head()` metadata:

```
src/routes/
  __root.tsx        (header + footer wrapper, fonts, meta)
  index.tsx         /         Landing: hero, who we are, services overview, why us, contact teaser
  services.tsx      /services Full service cards w/ "See Sample" links
  samples.tsx       /samples  Sample website preview, Google listing mockup, booking widget
  pricing.tsx       /pricing  3-tier teaser
  contact.tsx       /contact  WhatsApp / Instagram / email + "chai and talk" CTA
```

Shared `Header` + `Footer` components live in `src/components/layout/`. Nav links use `<Link>` from `@tanstack/react-router`.

## Page content

### 1. Hero (index)
Headline "We Help Rishikesh Businesses Grow Online", subtext as given. Two CTAs: "See What We Offer" → `/services`, "Chat on WhatsApp" → `wa.me/<number>`. Background: soft sandstone gradient with subtle Himalayan illustration / generated hero image.

### 2. Who We Are (index)
Friendly two-paragraph intro. Small portrait/illustration. Tags: "CS Students · Summer in Rishikesh · Real People".

### 3. Services (index overview + /services full)
Six visual cards, each: emoji/Lucide icon, title, 2-line description, "See Sample" button linking to relevant anchor on `/samples`.
- Website Design & Development → `/samples#website`
- Website Fixing & Improvement → `/samples#website`
- Google Business Profile → `/samples#gbp`
- Online Booking & WhatsApp → `/samples#booking`
- Instagram Setup & Content → `/samples#instagram` (mock IG grid)
- Basic Analytics Setup → `/samples#analytics` (mock dashboard card)

### 4. Sample Website Preview (/samples)
A polished in-page mockup of a fictional Rishikesh café/guesthouse ("Ganga Leaf Café & Stay") rendered as a realistic browser-frame component containing: hero with generated image, about, menu/services, photo gallery (4 generated images), contact form, sticky WhatsApp button. Built as a real React component inside a styled `<div>` mock browser chrome — not an iframe.

### 5. Google Business Listing Mockup (/samples#gbp)
Side-by-side cards: "Empty listing" (no photos, no hours, 0 reviews) vs "Optimised listing" (photos, 4.8★ (124), hours, category "Café · Guesthouse", address, review snippets). Styled to mimic Google Maps card look.

### 6. Booking Widget (/samples#booking)
Interactive mock: tab toggle (Table / Room / Yoga), date+time+guests fields, "Book Now" + green "WhatsApp Us" button. Local state only, shows toast on submit.

### 7. Why Us (index)
5 bullet points as icon + text grid. Soft cards.

### 8. Pricing (/pricing)
3 columns: Basic / Standard / Full Package. Each lists what's included (no prices). Single "Let's Talk" CTA → WhatsApp.

### 9. Contact (/contact + footer)
Headline "Interested? Let's grab a chai and talk." WhatsApp (primary), Instagram, email. Simple contact form (frontend only, opens mailto / WhatsApp prefilled message).

## Technical details

- **Stack**: TanStack Start + React + Tailwind v4 + framer-motion + lucide-react. Design tokens in `src/styles.css` via oklch + `@theme inline`. Poppins loaded via `<link>` in `__root.tsx` head.
- **Components**: shadcn `Button`, `Card`, `Input`, `Tabs`, `Badge`. Custom `BrowserFrame`, `ServiceCard`, `SectionHeading`, `WhatsAppFAB` (floating button on every page).
- **Images**: ~5–7 generated images via imagegen (hero, café exterior, food, yoga studio, gallery shots). Stored in `src/assets/`.
- **Placeholders to confirm later (using sensible defaults for now)**: WhatsApp number `+91 99999 99999`, Instagram `@aryanandteam`, email `hello@aryanandteam.in`. Easy to swap in one config constant (`src/lib/contact.ts`).
- **SEO**: per-route `head()` with unique title/description/og tags. Single H1 per page. Semantic sections, alt text on all images.
- **No backend needed** — pure frontend showcase. No Lovable Cloud unless contact form should actually send emails (can add later).

## Out of scope (v1)

- Real form submissions / email delivery
- CMS or admin
- Multi-language toggle (copy is English; Hindi mention is content only)
- Actual analytics integration

After approval I'll build this in one pass: tokens → layout → routes → mock components → image generation → polish.