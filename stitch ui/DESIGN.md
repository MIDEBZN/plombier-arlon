---
name: Apex Trade Trust
colors:
  surface: '#f9f9ff'
  surface-dim: '#d1daf4'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8ff'
  surface-container-highest: '#d9e2fc'
  on-surface: '#121b2e'
  on-surface-variant: '#43474f'
  inverse-surface: '#273044'
  inverse-on-surface: '#edf0ff'
  outline: '#747780'
  outline-variant: '#c4c6d0'
  surface-tint: '#435f8c'
  primary: '#001f43'
  on-primary: '#ffffff'
  primary-container: '#14345f'
  on-primary-container: '#829dcf'
  inverse-primary: '#abc7fb'
  secondary: '#bb0027'
  on-secondary: '#ffffff'
  secondary-container: '#e0283c'
  on-secondary-container: '#fffbff'
  tertiary: '#001a52'
  on-tertiary: '#ffffff'
  tertiary-container: '#002d80'
  on-tertiary-container: '#7598ff'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d6e3ff'
  primary-fixed-dim: '#abc7fb'
  on-primary-fixed: '#001b3d'
  on-primary-fixed-variant: '#2a4773'
  secondary-fixed: '#ffdad8'
  secondary-fixed-dim: '#ffb3b1'
  on-secondary-fixed: '#410007'
  on-secondary-fixed-variant: '#92001c'
  tertiary-fixed: '#dbe1ff'
  tertiary-fixed-dim: '#b4c5ff'
  on-tertiary-fixed: '#00174b'
  on-tertiary-fixed-variant: '#003ea8'
  background: '#f9f9ff'
  on-background: '#121b2e'
  surface-variant: '#d9e2fc'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '800'
    lineHeight: 48px
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 30px
    fontWeight: '800'
    lineHeight: 36px
    letterSpacing: -0.015em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
    letterSpacing: -0.015em
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 22px
    fontWeight: '700'
    lineHeight: 28px
  headline-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-phone:
    fontFamily: Plus Jakarta Sans
    fontSize: 20px
    fontWeight: '800'
    lineHeight: 24px
    letterSpacing: 0.01em
  label-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 18px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 12px
    fontWeight: '700'
    lineHeight: 16px
    letterSpacing: 0.04em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  gutter: 1rem
  gutter-md: 1.5rem
  gutter-lg: 2rem
  margin: 1rem
  margin-md: 2rem
  margin-lg: 3rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system serves a professional local trade and emergency plumbing business where immediacy, credibility, and competence dominate the customer experience. Users visiting the platform are frequently dealing with urgent household crises—burst pipes, sewer backups, or failing water heaters—requiring immediate clarity, rapid phone access, and unmistakable signals of licensed legitimacy.

The design philosophy unites **Corporate / Modern** trade professionalism with functional, high-utility service design:
- **Clarity over cleverness:** No ambiguous icons, no abstract SaaS gradients, and no hidden navigation. Critical actions (Call Now, Book Dispatch, Check Pricing) are immediately visible.
- **Authoritative & Grounded:** Anchored by an institutional deep navy that suggests structural permanence, master licensing, and bonded accountability.
- **Conversion-Driven Urgency:** Emergency hotlines and primary dispatch triggers leverage an intentional high-visibility red, reserved exclusively for conversion events and urgent availability flags.
- **High-Trust Scaffolding:** Persistent accreditation badges, upfront flat-rate pricing indicators, real technician profile verification, and Google review validation are integrated into the foundational card and layout architecture.

## Colors

The palette is engineered around high functional contrast, clear state delineation, and deliberate conversion paths:

- **Primary Navy (`#14345F`):** Represents structural authority, used across top bars, primary navigation bars, hero backgrounds, service headers, trust seals, and footer anchors.
- **Accent Emergency Red (`#C8102E`):** Strictly deployed for direct transactional moments—"Call Now" tap-to-call mobile buttons, emergency dispatch toggles, schedule confirmation triggers, and active notification pips. It is never diluted on decorative elements.
- **Tertiary Blue (`#2563EB`):** A clean mechanical blue applied to standard informational links, secondary informational badges, calendar availability highlights, and inline system links.
- **Base Canvas & Surfaces:**
  - `Surface White` (`#FFFFFF`): Primary container cards, input fields, and modal dialogs.
  - `Surface Slate` (`#F5F7FA`): Canvas body background and alternating section modules to ground content blocks without harshness.
- **Borders & Dividers:**
  - `Border Gray` (`#E4E9F0`): Clean, structural containment lines for service modules, inputs, and pricing tiers.
- **Typography Tones:**
  - `Main Text` (`#172033`): Deep blue-black for all headlines and primary body text, maintaining WCAG AAA contrast against light backgrounds.
  - `Muted Text` (`#5E6878`): Secondary metadata, technician license numbers, and timestamp details.

## Typography

Typography relies on **Plus Jakarta Sans** across all roles, providing clear legibility under rapid scan scenarios. Its geometric clarity combined with open counters ensures phone numbers, pricing figures, and license identifiers are readable even in bright outdoor sunlight on mobile displays.

- **Headlines:** Set in `700` and `800` weights with slight negative letter spacing to project stability and authority.
- **Numerical Data & Phone Numbers:** `label-phone` is explicitly tracked for quick recognition, used primarily inside sticky headers, emergency banner overlays, and mobile bottom navigation triggers.
- **Body & Microcopy:** Kept at standard 1.5 line height proportions for readability across diagnostic lists, service scope descriptions, and warranty details.

## Layout & Spacing

The layout is built on a responsive 12-column grid system (4 columns on mobile `< 768px`, 8 columns on tablet `768px–1024px`, and 12 columns on desktop `> 1024px` capped at `1240px` max-width).

- **Mobile First Focus:** On mobile views, the top viewport allocates persistent space for the tap-to-call phone action and 24/7 status. Vertical margins are compact to bring the contact forms and phone dispatch prompts above the fold.
- **Rhythm:** Spacing follows an 8-point base scale (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Element grouping in service cards relies on tight inner padding (`space-md`) paired with generous section dividers (`space-xl`) to clearly separate emergency services from routine maintenance offerings.

## Elevation & Depth

Visual depth avoids decorative SaaS drop-shadows and blurred multi-stop gradients. Depth is established through **low-contrast outlines** paired with **crisp, low-blur ambient offsets**:

- **Ground Level (Flat):** Base canvas in `#F5F7FA`.
- **Card Level:** `#FFFFFF` background bound by a precise `1px` border in `#E4E9F0`. A subtle tactile shadow (`0 2px 4px rgba(20, 52, 95, 0.04)`) prevents the white card from melting into the light background.
- **Hover / Focus Elevation:** On interactive cards (e.g., service selection or dispatch windows), the border shifts to `#14345F` with an elevated shadow (`0 6px 16px rgba(20, 52, 95, 0.08)`).
- **Sticky Emergency Bar / Floating Call Button:** Elevated with a high-contrast structural shadow (`0 4px 18px rgba(0, 0, 0, 0.12)`) ensuring clear separation over all scrolled content.

## Shapes

The design system standardizes on **Rounded (Level 2)** geometry:
- Default interactive targets, cards, form inputs, and status containers use an 8px radius (`0.5rem`).
- Large diagnostic containers, hero cards, and modal sheets utilize a 12px to 16px radius (`rounded-lg` at `1rem`).
- Emergency tags, phone pills, and status chips (e.g., "Available in 30 Mins") retain controlled pill-style edges (`9999px`) to immediately signal real-time status and actionable buttons.

## Components

### Buttons
- **Primary Emergency Button:** Background `#C8102E`, text `#FFFFFF`, 8px radius, bold tracking. Hover: `#B00D27`. Accompanied by a bold inline phone icon. Dedicated to "Call Technician Now" or "Book Dispatch".
- **Navy Secondary Button:** Background `#14345F`, text `#FFFFFF`, 8px radius. Hover: `#0F2645`. Used for standard inquiries, scheduling estimates, and service exploration.
- **Outline Button:** `#FFFFFF` background with a 1.5px `#14345F` border and `#14345F` text. For secondary actions like viewing coverage maps or reading licensing info.

### Cards (Service & Pricing)
- Compact layout with `#FFFFFF` background, 8px–12px radius, and a 1px `#E4E9F0` perimeter border.
- Cards maintain distinct header sections with navy text (`#14345F`), concise checklists with blue bullet icons, upfront transparent pricing tags, and a full-width bottom CTA button.

### Input Fields & Booking Forms
- 48px standard touch target height.
- Background `#FFFFFF` with `#E4E9F0` 1px border and 8px corner radius.
- Active focus state uses a 1.5px `#14345F` border with a subtle 2px ring offset in `#E4E9F0`.
- Integrated instant zip code verification inputs with inline "We service your area" feedback indicator in dark navy.

### Chips & Badges
- **Emergency Dispatch Chip:** Background `#C8102E` at 10% opacity, text `#C8102E`, 1px border in `#C8102E` at 20% opacity. Accompanied by a pulsing indicator dot.
- **Trust Badges:** Background `#F5F7FA`, text `#14345F`, displaying "Licensed & Insured", "Master Plumber On Staff", or "5.0 Google Rated".

### Checkboxes & Radios
- Square 20px boxes with 4px corner radius. Checked states fill `#14345F` with a solid white check icon. Focus states leverage `#14345F` rings.

### Persistent Mobile Call Bar
- A full-width docked bottom bar (height 64px) locked to the viewport on mobile devices: `#FFFFFF` surface, top border in `#E4E9F0`, featuring an split-state design: "Dispatch Line" with a direct `#C8102E` tap-to-call button displaying the phone number prominently.