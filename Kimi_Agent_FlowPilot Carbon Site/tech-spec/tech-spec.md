# FlowPilot — Technical Specification

## Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| react | ^19.0.0 | UI framework |
| react-dom | ^19.0.0 | React DOM renderer |
| vite | ^6.3.0 | Build tool |
| @vitejs/plugin-react | ^4.4.0 | Vite React plugin |
| tailwindcss | ^4.1.0 | Utility CSS |
| @tailwindcss/vite | ^4.1.0 | Tailwind Vite integration |
| typescript | ^5.7.0 | Type checking |
| @types/react | ^19.0.0 | React type definitions |
| @types/react-dom | ^19.0.0 | ReactDOM type definitions |
| framer-motion | ^12.0.0 | Scroll-triggered animations, accordion, modal, tab transitions |
| lucide-react | ^0.510.0 | Icon library (IBM Carbon-aligned) |

No Carbon React component library — build custom components following Carbon's visual spec from design.md. Avoids potential compatibility issues with React 19.

---

## Component Inventory

### Layout

| Component | Source | Reuse |
|-----------|--------|-------|
| NavigationBar | Custom | Shared — fixed top nav with mobile hamburger |
| Footer | Custom | Shared — multi-column footer |
| MobileMenu | Custom | Shared — slide-down nav panel for mobile |

### Sections

| Component | Source | Notes |
|-----------|--------|-------|
| HeroSection | Custom | Two-column layout, workflow visualization |
| ProblemSection | Custom | Light bg band, 2×2 pain-point cards, before/after comparison |
| SolutionSection | Custom | Value props row + product dashboard mockup |
| FeaturesSection | Custom | 3-column feature card grid |
| ProductDemoSection | Custom | Tabbed interface (Workflow/Analytics/Logs) |
| UseCasesSection | Custom | 2×2 use-case cards |
| YCCredibilitySection | Custom | Centered trust section with badge |
| MetricsSection | Custom | 4-column animated counters |
| TestimonialsSection | Custom | 3-column testimonial cards |
| PricingSection | Custom | 3-tier pricing with highlighted middle card |
| FAQSection | Custom | Accordion with single-open behavior |
| FinalCTASection | Custom | Accent-bg CTA block |

### Reusable Components

| Component | Source | Used By |
|-----------|--------|---------|
| SectionHeader | Custom | All 11 content sections — label + title + subtitle pattern |
| SectionReveal | Custom (Framer Motion) | Wrapper for scroll-triggered entrance animations on all sections |
| Card | Custom | Feature cards, use-case cards, testimonial cards, pricing cards |
| Button | Custom | Primary (accent), Secondary (outline), CTA sizing |
| ContactModal | Custom | Triggered by "Book Demo" buttons — form + success state |
| ProductMockup | Custom | CSS-built dashboard visualization used in SolutionSection and ProductDemoSection |
| AnimatedCounter | Custom (Framer Motion) | MetricsSection — counts up from 0 on viewport entry |

### Hooks

| Hook | Purpose |
|------|---------|
| useScrollDirection | Detects scroll direction for nav shadow behavior |
| useInViewOnce | One-time IntersectionObserver trigger for entrance animations and counters |

---

## Animation Implementation

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Section reveal (fade + translateY) | Framer Motion | `whileInView` on section containers, staggerChildren 100ms on parent | Low |
| Hero element staggered entrance | Framer Motion | Parent `staggerChildren` variant, individual child variants with incremental delays | Medium |
| Hero workflow traveling dot | CSS @keyframes | SVG path with offset-dasharray animation, infinite loop | Medium |
| Hero scroll indicator bounce | CSS @keyframes | Infinite translateY 0→8px, 2s duration | Low |
| Nav underline hover | CSS transition | `::after` pseudo-element, width 0→100%, 150ms | Low |
| Card hover lift + shadow | CSS transition | translateY(-2px to -4px) + box-shadow, 300ms | Low |
| Button hover/active | CSS transition | translateY + background-color, 150ms | Low |
| Metrics number counter | Custom hook + rAF | `useInViewOnce` triggers rAF loop interpolating value over 2s. Suffix (%, ×, +) appears on completion via state | Medium |
| Product demo tab crossfade | Framer Motion | `AnimatePresence` with opacity-only transition between tab panels | Low |
| FAQ accordion expand | Framer Motion | `animate={{ height: "auto" }}` with AnimatePresence, chevron rotate via CSS transition | Low |
| Mobile menu slide-down | Framer Motion | `AnimatePresence` with height animation, opacity | Low |
| Contact modal overlay | Framer Motion | `AnimatePresence` fade on overlay, slight scale on container | Low |
| Nav scroll shadow | CSS + JS hook | Toggle class based on scroll position past hero (64px threshold) | Low |
| Mobile menu hamburger → X | CSS transition | Rotate + translate lines, 300ms | Low |

---

## State & Logic Plan

### Contact Modal State (Global)

Simple boolean + React Context. Modal can be triggered from multiple "Book Demo" buttons across the page. Context provides `isOpen`, `open()`, `close()` to any nested component. Modal content switches between form and success state via local component state.

### FAQ Accordion State

Single-open accordion pattern. Track `openIndex: number | null` in FAQSection. Clicking an item sets `openIndex` to its index; clicking the open item sets `null`. Ensures only one answer visible at a time.

### Product Demo Tab State

Track `activeTab: number` (0, 1, or 2) in ProductDemoSection. Tab click updates index. `AnimatePresence` wraps panel content for crossfade.

### Mobile Menu State

Track `isOpen: boolean` in NavigationBar. Hamburger click toggles. Close on link click, Escape key, or overlay click.

### Metrics Counter Trigger

Each AnimatedCounter component independently tracks whether it has animated (boolean ref). `useInViewOnce` fires once when the MetricsSection enters viewport, starting the rAF interpolation loop. No shared state — each counter self-manages.

---

## Other Key Decisions

**No routing**: Single-page site. All navigation uses anchor links (`#section-id`) with smooth scroll.

**No state management library**: ContactModal via React Context, all other state is local component state. No Zustand/Redux needed for this complexity level.

**No React Query**: No server data fetching. Form submission is a mock (no backend).

**Product mockups as HTML/CSS**: All dashboard/workflow visuals are built with styled HTML elements, not images. Keeps assets zero, ensures crisp rendering at all sizes, and enables interactive elements (tab switching) without image swaps.
