# Amy & Aman Wedding Website — PRD

## Problem Statement
Tasteful, award-worthy wedding website for Amy & Aman. Jaipur, India · Dec 17 & 18, 2026 at Narain Niwas. Take RSVPs via external Notion form link; include hero/save-the-date, wedding details, notes for guests, photo preview.

## Art Direction
"Luxury Editorial Indian Wedding" — Cormorant Garamond serif + Outfit sans, ivory/sand palette with Jaipur rose & palace green accents. Lenis smooth scroll, framer-motion masked reveals + parallax, film-grain overlay, editorial marquee.

## Core Requirements (static)
- Kinetic hero with masked name reveal + parallax arch palace image + live countdown
- Our Story (numbered manifesto chapters)
- Wedding Details grid (Narain Niwas, dates, Jaipur, 350 guests, Ajeez catering, planner Nisha)
- Two-day Schedule timeline (Dec 17 & 18)
- Editorial Photo Gallery with lightbox
- RSVP CTA -> external Notion form (new tab)
- Travel/Stay in Jaipur + Notes for guests
- Guest well-wishes board (backend GET/POST /api/wishes)
- Floating background music toggle

## What's Been Implemented (2026)
- Full single-page experience: Nav, Hero, Marquee, Story, Details, Schedule, Gallery(+lightbox), Travel/Notes, RSVP, WellWishes, Footer, MusicToggle, Grain
- Backend: /api/wishes (POST with validation, GET newest-first) on MongoDB
- Lenis + framer-motion motion system; tested end-to-end (iteration_1.json) — all pass

## Backlog / Next
- P1: Replace placeholder gallery images with couple's real pic-time photos (gallery is token-protected)
- P1: Swap placeholder ambient track with chosen music
- P2: Native RSVP form saving to DB (currently external Notion)
- P2: Map embed for venue, add-to-calendar buttons
