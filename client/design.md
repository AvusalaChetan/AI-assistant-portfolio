---
name: Obsidian Minimalist
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c8'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c6c6c7'
  primary: '#ffffff'
  on-primary: '#2f3131'
  primary-container: '#e2e2e2'
  on-primary-container: '#636565'
  inverse-primary: '#5d5f5f'
  secondary: '#c7c6c6'
  on-secondary: '#2f3131'
  secondary-container: '#484949'
  on-secondary-container: '#b8b8b8'
  tertiary: '#ffffff'
  on-tertiary: '#342f2d'
  tertiary-container: '#eae1dd'
  on-tertiary-container: '#6a6360'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e2e2e2'
  primary-fixed-dim: '#c6c6c7'
  on-primary-fixed: '#1a1c1c'
  on-primary-fixed-variant: '#454747'
  secondary-fixed: '#e3e2e2'
  secondary-fixed-dim: '#c7c6c6'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#464747'
  tertiary-fixed: '#eae1dd'
  tertiary-fixed-dim: '#cec5c1'
  on-tertiary-fixed: '#1f1b19'
  on-tertiary-fixed-variant: '#4b4643'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  headline-lg:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '600'
    lineHeight: 24px
    letterSpacing: -0.01em
  body-primary:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0em
  body-user:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  body-assistant:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-subtitle:
    fontFamily: Inter
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.03em
  label-description:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: 16px
  placeholder:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 4px
  gutter: 16px
  margin: 24px
  container-max: 1200px
---

## Brand & Style
The design system is rooted in extreme minimalism, prioritizing content density and focus through a monochromatic, dark-mode-first aesthetic. It targets power users, developers, and creative professionals who value a "quiet" interface that recedes into the background.

The style is a hybrid of **Minimalism** and **Technical Professionalism**. It relies on precise alignment, subtle tonal shifts rather than shadows, and high-quality typography. The emotional response is one of calm, control, and premium utility. Vibrant colors are strictly prohibited to maintain a sophisticated, utilitarian atmosphere.

## Colors
The palette is strictly grayscale to eliminate visual noise. Depth is communicated through a series of dark surface increments and thin borders. 

- **Primary Background**: Use `#0a0a0a` for the base canvas.
- **Surface Tiering**: Use `#0f0f0f` for large containers and `#111111` or `#1a1a1a` for elevated elements like cards or modals.
- **Borders**: These are the primary tool for separation. Use `#1a1a1a` for low-contrast divisions and `#252525` for interactive element boundaries.
- **Status**: A single, desaturated green (`#22c55e`) is permitted only for the pulse status indicator, appearing almost like an illuminated LED on hardware.

## Typography
The system uses **Inter** exclusively to maintain a clean, systematic look. 

- **Primary Body**: Set at 14px for optimal information density.
- **Subtitles**: Set at 11px with slight tracking (letter-spacing) and medium weight to differentiate functional metadata from content.
- **Hierarchy**: Contrast is achieved through color (`#f0f0f0` vs `#444444`) rather than excessive size variations.
- **Scale**: Headlines stay relatively small (max 24px) to preserve the "unrefined" yet premium editorial feel.

## Layout & Spacing
The layout follows a strict 4px grid system. 

- **Grid**: Use a 12-column fixed grid for desktop (centered), transitioning to a fluid layout for tablet and mobile.
- **Margins**: Standardize on 24px side margins for containers.
- **Dot Grid Background**: A subtle dot grid (1px dots, 24px apart, color `#1a1a1a`) should be applied to the primary background to reinforce the technical/architectural vibe.
- **Reflow**: On mobile, stack all multi-column elements and reduce horizontal padding to 16px.

## Elevation & Depth
This design system avoids traditional shadows. Depth is created through:
1.  **Tonal Stacking**: Darker colors stay in the background; lighter grays (up to `#1a1a1a`) represent "closer" surfaces.
2.  **Borders**: Every elevated element (cards, modals, dropdowns) must have a 1px solid border using the defined border tokens.
3.  **Backdrop Blurs**: For overlays (like navigation bars or modals), use a `20px` backdrop blur over a semi-transparent `#0a0a0a` (80% opacity) to maintain context without visual clutter.

## Shapes
The design uses **Rounded** geometry (8px standard) to prevent the UI from feeling too aggressive or "brutalist," maintaining its premium status.

- **Base Radius**: 8px (`0.5rem`) for buttons, inputs, and small cards.
- **Large Radius**: 12px (`0.75rem`) for main content containers or modals.
- **Interactive States**: No change in shape on hover, only subtle border color shifts.

## Components
- **Buttons**: Use a 1px border (`#252525`) with a transparent background for secondary. For primary, use a solid `#f0f0f0` background with `#0a0a0a` text. No gradients.
- **Inputs**: Background `#0f0f0f`, 1px border `#1f1f1f`. On focus, the border brightens to `#252525`. Text uses the placeholder token `#333333`.
- **Cards**: Background `#111111`, 1px border `#1a1a1a`. Padding should be a consistent 20px.
- **Chips**: Small, 11px text, 4px vertical padding, 8px horizontal. Border `#1f1f1f`.
- **Status Indicator**: A small 6px circle using `#22c55e` with a CSS "pulse" animation (expanding ring) to indicate live connectivity.
- **Lists**: Separated by 1px horizontal lines (`#1a1a1a`). No alternating row colors; use hover states with `#0f0f0f` background instead.