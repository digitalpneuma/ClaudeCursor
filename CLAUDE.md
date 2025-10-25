# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an AI Consultancy website project for an AI integration and app development firm targeting SMBs. The website is planned as a modern, single-page application (SPA) with a unique "vibe-driven" aesthetic rather than generic AI-generated designs.

**Core Services:**
- Video/Image Prompt Engineering (Midjourney, Stable Diffusion)
- "Vibe Coding" - Junior-level app development using no-code/low-code platforms
- AI Integration Consulting and business audits

## Tech Stack

**Frontend:**
- Framework: Next.js (with server-side rendering for SEO)
- Styling: Tailwind CSS with custom extensions
- Animations: Framer Motion

**Backend (if implemented):**
- Database/Auth: Supabase or Firebase
- AI Integration: OpenAI API for demo features

**Deployment:**
- Hosting: Vercel
- Version Control: Git/GitHub

**Testing:**
- E2E Testing: Cypress

## Key Sections to Build

The website is structured as a single-page SPA with these main sections:
1. **Hero** - Dynamic AI animation with tagline "Unlock AI's Vibe for Your Business"
2. **Services** - Interactive cards with hover reveals
3. **About Us** - Founder story and consultancy journey
4. **Case Studies** - Portfolio carousel with client metrics
5. **Blog/Resources** - Educational content for SMB audiences
6. **Contact/Audit Form** - Request form with AI chatbot integration
7. **Footer** - Links, privacy policy, Easter egg prompt generator

## Design System

**Color Palette (Cosmic Vibe Theme):**
- Primary: #1A237E (Indigo Night) - backgrounds and CTAs
- Secondary: #651FFF (Electric Violet) - highlights and interactive elements
- Accent: #00E5FF (Neon Cyan) - AI-related features
- Neutral: #F5F5F5 / #121212 - light/dark mode
- Success: #4CAF50 (Green with gradients)

**Typography:**
- Primary Font: Inter (body text)
- Heading Font: Space Grotesk (distinct, modern)
- Base Size: 16px with generous spacing

**Key Features:**
- Interactive AI Demo tool (input business problem → get customized prompt)
- Dark Mode Toggle (branded as "Vibe Switch")
- Custom SVG icons with AI motifs (no Font Awesome)
- Hand-drawn style AI illustrations
- Parallax scrolling and asymmetric grid layouts
- Mobile-first responsive design
- WCAG AA accessibility compliance

**Form Styling:**
- Audit Form button: Shiny green (#4CAF50) with gradient, all caps, glow effect on hover
- Rounded input borders with subtle shadows
- Front-end validation with friendly error messages

## Common Development Commands

Once Next.js is initialized:

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run Cypress E2E tests
npx cypress open

# Lint code (if configured)
npm run lint

# Format code (if configured)
npm run format
```

## Development Workflow

1. **Setup:** Initialize Next.js with Tailwind CSS and Framer Motion
2. **Components:** Build reusable components for sections (Hero, ServiceCard, CaseStudy, etc.)
3. **Styling:** Use Tailwind for base styling with custom Tailwind config extensions for unique animations
4. **Animations:** Implement Framer Motion for scroll triggers and interactive elements
5. **Forms:** Build the audit form with client-side validation and optional Supabase/Firebase integration
6. **AI Integration:** Add OpenAI API wrapper for interactive demo feature
7. **Testing:** Write E2E tests covering key user flows (navigation, form submission)
8. **Performance:** Use Next.js Image optimization, lazy loading, and maintain Lighthouse scores >90
9. **Accessibility:** Ensure WCAG AA compliance with proper contrast ratios and semantic HTML

## Important Notes

- **Avoid Generic Design:** Custom elements only. No stock templates or generic AI site builders.
- **Tone:** Copy should be approachable, expert, and enthusiastic - like a knowledgeable friend, not a corporate entity.
- **Mobile-First:** Design and test mobile experience first, then enhance for desktop.
- **SEO:** Utilize Next.js SSR for better SEO on target keywords (e.g., "AI integration for small businesses").
- **Deployment:** Set up on Vercel for seamless Next.js integration. Configure custom domain and Google Analytics for tracking conversions.
