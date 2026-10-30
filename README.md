# Impackt Loans — Official Website

A modern, high-performance website application for **Impackt Loans**, connecting purposeful credit, escrow-backed brand engagement, and verifiable livelihood outcome tracking for lenders, brands, and women entrepreneurs.

Built with **Next.js 15 (App Router)**, **React 19**, and a bespoke **Vanilla CSS design system**.

---

## 🌟 Key Features

1. **Editorial Design & Rich Visual Aesthetics:**
   - Deep royal violet (`#24065b`), vibrant gold (`#ffca06`), flame orange (`#ff6a00`), and crimson accents.
   - Distinctive typography using Google Fonts: *Fraunces* (editorial serif), *Plus Jakarta Sans* (clean UI), and *Caveat* (handwritten notes & annotations).
   - Dynamic micro-animations: infinite marquee, SVG draw effects, floating polygon badges (`.bob`), and interactive hover lifts.

2. **Interactive Audience Pathways:**
   - Dynamic tabbed switcher for **Lenders**, **Brands**, and **Business Owners**.
   - Side-by-side comparative analysis between traditional sourcing-led DSAs and the Impackt Loans model.

3. **6-Step Livelihood Journey:**
   - Visual trajectory from eligibility screening (CIBIL 750+, zero DPD) to cash-flow tracking and the Impackt Score.

4. **Interactive Livelihood & Credit Progress Simulator:**
   - Real-time loan and business modeler with pre-configured industry presets (*Kirana & FMCG*, *Apparel & Tailoring Studio*, *Solar Energy & Appliance Kiosk*).
   - Computes 10% escrow contribution check, amortized monthly EMI, operating cashflow, net take-home income, Debt Service Coverage Ratio (DSCR), and year-1 savings potential.

5. **Dynamic FAQ Accordion:**
   - Accessible accordion addressing risk mitigation, escrow guarantees, underwriting responsibilities, and priority sector lending (PSL).

6. **Interactive Checklist Modal Dialog:**
   - Accessible modal with role switcher, clickable checkable action items, and instant clipboard export.

7. **Structured Partnership Inquiry Form & Data Persistence:**
   - Lead capture for prospective lending institutions, consumer brands, and community anchors with instant submission feedback.
   - All submitted partner requests are safely recorded in [`data/inquiries.json`](file:///c:/Projects/Impackt%20Loans/data/inquiries.json).

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18.17+ or v20+ recommended)
- npm, yarn, or pnpm

### Installation

```bash
npm install
```

### Development Server

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

Create an optimized production bundle:

```bash
npm run build
npm run start
```

---

## 📁 Project Architecture

```
Impackt Loans/
├── public/                     # Static public assets
│   ├── assets/
│   │   └── logo.png            # High-res Impackt Loans brandmark
│   └── logo.png
├── src/
│   ├── app/
│   │   ├── globals.css         # Design tokens, keyframes, typography & utility classes
│   │   ├── layout.jsx          # Root layout with SEO meta, OpenGraph & Google Fonts
│   │   └── page.jsx            # Main single-page application entry point
│   └── components/
│       ├── Navbar.jsx          # Responsive header with drawer menu & quick checklist trigger
│       ├── Hero.jsx            # Editorial headline, SVG flourishes & model summary card
│       ├── Marquee.jsx         # Continuous marquee banner
│       ├── AudienceTabs.jsx    # Tabbed audience switch + DSA comparison matrix
│       ├── Journey.jsx         # 6-step lifecycle timeline
│       ├── Outcomes.jsx        # 4 social impact pillars
│       ├── Calculator.jsx      # Interactive loan & livelihood simulator
│       ├── FaqAccordion.jsx    # Expandable FAQ accordion
│       ├── RolesCta.jsx        # 3-way role cards
│       ├── InquiryForm.jsx     # Lead capture & partnership inquiry form
│       ├── ChecklistModal.jsx  # Accessible modal with checklist & copy button
│       └── Footer.jsx          # Legal disclosures, concept disclaimer & sitemap
├── _reference/                 # Original visual mockup reference export
├── next.config.mjs             # Next.js configuration
├── package.json
└── README.md
```

---

## ⚖️ Disclaimer
Impackt Loans operates as a business coordination and outcome verification mechanism. Credit assessment, sanction authority, and repayment pricing remain strictly with licensed regulated lending institutions.
