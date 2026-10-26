# CUIMC Brand Alignment Guide for eHospital

**Purpose:** Instructions for Claude Design to align the eHospital prototype with the Columbia University Irving Medical Center (CUIMC) visual identity.

**Source of the values below:** Colors marked *(sampled)* were measured from a screenshot of the CUIMC homepage. They are strong approximations, not official specifications. Anything marked **VERIFY** must be confirmed against the official CUIMC brand guidelines (CUIMC Communications / Columbia identity standards) before launch.

---

## 1. Current state of the prototype

The prototype is built on **Bootstrap 5.3.3** with a small set of variable overrides. The brand is applied only where overridden. Everything else falls back to Bootstrap defaults.

**Already aligned (keep):**
- Primary blue `#1D4F91`, hover `#163D72`, active `#122F59`. This exactly matches the CUIMC header blue *(sampled)*.
- Montserrat as the body typeface.
- Light neutral page background (`#F4F6F7`).
- Primary blue on white contrast is 8.1:1 (passes WCAG AAA).

**Needs work:**
1. Bootstrap's rounded corners and pill badges differ from CUIMC's square-cornered cards.
2. No bright accent blue for primary calls to action.
3. Default Bootstrap status colors (not brand-aligned; two fail contrast).
4. No Columbia/CUIMC identity lockup (needs a decision, see section 7).
5. Headings lack the CUIMC heading treatment.
6. Some 11px text is too small.

---

## 2. Color palette

### Brand colors

| Role | Hex | Notes |
|---|---|---|
| Primary navy | `#1D4F91` | Header, primary buttons, links, active states. Matches CUIMC header *(sampled)*. |
| Primary navy, hover | `#163D72` | Keep existing. |
| Primary navy, active | `#122F59` | Keep existing. |
| Card blue | `#2058A2` | Slightly lighter navy used for quick-link cards on the homepage *(sampled)*. Use for feature cards and promo panels. |
| Bright blue (accent) | `#0077C8` | CUIMC's main call-to-action color ("Find a Doctor") and footer band *(sampled)*. **VERIFY.** |
| Page background | `#F2F2F3` | Homepage neutral gray *(sampled)*. Prototype's `#F4F6F7` is acceptable. |
| Surface | `#FFFFFF` | Cards, tables, forms. |
| Border | `#DCE3E7` | Keep existing. |
| Body text | `#15232B` | Keep existing. |
| Secondary text | `#5A6B75` | 5.1:1 on `#F4F6F7`, passes AA. Keep existing. |

### Accent usage rule

Use the bright blue `#0077C8` for **one primary action per screen** (for example "Continue your rotation", "Submit"). Use the navy `#1D4F91` for everything else: navigation, secondary buttons, links, progress, selected states. White text on `#0077C8` is about 4.6:1, so it is fine for button labels at 14px+ semibold, but do not use it for small body text on white.

### Status colors (replace the Bootstrap defaults)

Bootstrap's `#ffc107` (warning) is 1.6:1 on white and `#0dcaf0` (info) is 2.0:1. Both fail. Replace the status set with the following. **All pairs below should be re-verified with a contrast checker after implementation.**

| Status | Fill / icon | Text on white | Subtle background | Subtle border |
|---|---|---|---|---|
| Success | `#1E7B4F` | `#1E7B4F` | `#E3F3EA` | `#BFE0CE` |
| Warning | `#B26A00` | `#8A5200` | `#FFF3D6` | `#F2D9A0` |
| Danger | `#B42318` | `#B42318` | `#FDE8E6` | `#F5C2BD` |
| Info | `#0B6A8F` | `#0B6A8F` | `#E1F1F7` | `#B7DCEA` |

Rules:
- Never use a bright yellow or cyan as text or as a thin icon on white.
- Where a bright yellow fill is wanted (badges), put **dark text** (`#15232B`) on it, never white.
- Never rely on color alone. Pair status colors with an icon or text label.

---

## 3. Typography

- **Typeface:** Montserrat (already loaded). Fallback `system-ui, sans-serif`.
- **Headings:** Montserrat **bold (700)**, tight line height (about 1.2). CUIMC headings are heavy and confident.
- **Card titles:** Bold, with a **short underline accent** beneath the title (about 32px wide, 2px thick, white on dark cards, `#0077C8` on light cards). This is a signature element of the homepage cards.
- **Body:** Montserrat regular (400), 16px base, line height 1.5.
- **Links:** Semibold (600), navy `#1D4F91`, underline on hover.
- **Minimum text size:** **12px**, and only for non-essential metadata. Replace the existing 11px instances. Default small text should be 14px.
- **Wordmark:** The CUIMC wordmark uses a serif small-caps face. Do **not** imitate it with a font. Use the official logo asset only (see section 7).

---

## 4. Shape, spacing, and elevation

- **Border radius:** Move toward the square-cornered CUIMC look.
  - Cards, panels, tables, inputs, buttons: `0` to `2px`.
  - Set `--bs-border-radius: 2px; --bs-border-radius-sm: 2px; --bs-border-radius-lg: 2px;`.
  - Avatars may stay circular. Replace `rounded-pill` status badges with `rounded-0` or `2px`.
- **Shadows:** Minimal. Prefer a 1px border (`#DCE3E7`) over drop shadows.
- **Cards:** Flat, white or `#2058A2`, generous padding (about 20 to 24px).
- **Layout:** Keep generous whitespace. CUIMC pages use clear blocks of color and content, not dense decoration.

---

## 5. Components

**Buttons**
- Primary action: bright blue `#0077C8`, white semibold text, square corners. Hover `#005FA3`.
- Secondary: navy `#1D4F91` fill or outline.
- Destructive: danger color from section 2.
- Visible focus ring on every button: `0 0 0 .25rem rgba(29,79,145,.35)`.

**Navigation / header**
- Top bar in solid navy `#1D4F91` with white text, mirroring the CUIMC header.
- Active nav item: clear underline or filled state in bright blue, not just a color change.

**Forms**
- Labels above inputs, semibold, `#15232B`.
- Inputs: 1px `#DCE3E7` border, square corners, navy focus border and ring.
- Errors: danger color text plus icon, placed directly under the field.

**Badges and status**
- Square or 2px radius. Use the subtle backgrounds from section 2 with the matching dark text.
- Rotation states (Completed, Up next, Not started, Locked) must be distinguishable by label and icon, not color alone.

**Progress**
- Bar in navy `#1D4F91` on a `#DCE3E7` track. Always show a text percentage or step count.

**Alerts**
- Use the subtle background and border from section 2, a left accent bar in the status color, and an icon.

---

## 6. Accessibility requirements (WCAG 2.1 AA)

- Normal text contrast: at least **4.5:1**. Large text (18px+ or 14px+ bold) and UI component borders: at least **3:1**.
- Do not use `#ffc107` or `#0dcaf0` as text or icon color on white.
- Light-blue link text on navy cards (as on the homepage) is hard to read at small sizes. In eHospital, use **white** text on `#1D4F91` and `#2058A2`.
- Keyboard focus must always be visible.
- Touch targets at least 44 x 44px for primary actions.
- Do not convey meaning with color alone.

---

## 7. Logo and identity (decision required)

The prototype currently uses a placeholder mark: a white lowercase "e" in a rounded square. It does not use the Columbia crown or CUIMC wordmark.

- **Do not** recreate or approximate the Columbia crown, Columbia wordmark, or CUIMC lockup. Use only official assets supplied by CUIMC Communications.
- If eHospital is an official CUIMC product, confirm with the brand owners which lockup is required (for example "eHospital | Columbia University Irving Medical Center") and the clear-space and minimum-size rules.
- Until official assets are provided, keep the placeholder mark and add a visible `TODO: replace with approved CUIMC lockup` note in the design file, not in the shipped UI.

---

## 8. Implementation: Bootstrap variable overrides

Replace the existing `:root` override block with the following (extends the current one):

```css
:root {
  /* Brand */
  --bs-primary: #1D4F91;
  --bs-primary-rgb: 29, 79, 145;
  --bs-primary-bg-subtle: #E4ECF7;
  --bs-primary-border-subtle: #C9D8EE;
  --bs-primary-text-emphasis: #163D72;
  --bs-link-color: #1D4F91;
  --bs-link-color-rgb: 29, 79, 145;
  --bs-link-hover-color: #163D72;
  --bs-link-hover-color-rgb: 22, 61, 114;

  /* Custom brand tokens */
  --cuimc-navy: #1D4F91;
  --cuimc-navy-dark: #163D72;
  --cuimc-card-blue: #2058A2;
  --cuimc-accent: #0077C8;
  --cuimc-accent-dark: #005FA3;

  /* Type */
  --bs-body-font-family: 'Montserrat', system-ui, sans-serif;
  --bs-body-color: #15232B;
  --bs-secondary-color: #5A6B75;
  --bs-border-color: #DCE3E7;
  --bs-focus-ring-color: rgba(29, 79, 145, .35);

  /* Shape */
  --bs-border-radius: 2px;
  --bs-border-radius-sm: 2px;
  --bs-border-radius-lg: 2px;
  --bs-border-radius-xl: 2px;
  --bs-border-radius-pill: 2px;

  /* Status */
  --bs-success: #1E7B4F;  --bs-success-rgb: 30, 123, 79;
  --bs-success-bg-subtle: #E3F3EA;  --bs-success-border-subtle: #BFE0CE;
  --bs-warning: #B26A00;  --bs-warning-rgb: 178, 106, 0;
  --bs-warning-bg-subtle: #FFF3D6;  --bs-warning-border-subtle: #F2D9A0;
  --bs-warning-text-emphasis: #8A5200;
  --bs-danger: #B42318;   --bs-danger-rgb: 180, 35, 24;
  --bs-danger-bg-subtle: #FDE8E6;   --bs-danger-border-subtle: #F5C2BD;
  --bs-info: #0B6A8F;     --bs-info-rgb: 11, 106, 143;
  --bs-info-bg-subtle: #E1F1F7;     --bs-info-border-subtle: #B7DCEA;
}

body { background: #F4F6F7; -webkit-font-smoothing: antialiased; }

/* Primary call to action = bright blue */
.btn-cta {
  --bs-btn-bg: #0077C8;
  --bs-btn-border-color: #0077C8;
  --bs-btn-color: #fff;
  --bs-btn-hover-bg: #005FA3;
  --bs-btn-hover-border-color: #005FA3;
  --bs-btn-hover-color: #fff;
  --bs-btn-active-bg: #004D85;
  --bs-btn-active-border-color: #004D85;
  --bs-btn-font-weight: 600;
}

/* Heading treatment */
h1, h2, h3, h4, h5, h6, .card-title { font-weight: 700; line-height: 1.2; }
.card-title--accent::after {
  content: "";
  display: block;
  width: 32px;
  height: 2px;
  margin-top: 10px;
  background: currentColor;
  opacity: .8;
}
```

---

## 9. Change checklist for Claude Design

1. Replace the `:root` block with section 8.
2. Replace every `text-bg-warning`, `text-warning`, `text-info`, and similar Bootstrap status classes so no status color fails contrast.
3. Convert the single most important action on each screen to `.btn-cta`.
4. Remove `rounded-pill` from badges.
5. Add the underline accent to card titles.
6. Replace all 11px text with 12px minimum (14px for anything the user must read).
7. Verify every status color pair with a contrast checker.
8. Leave a placeholder for the approved CUIMC lockup (section 7).
9. Confirm all **VERIFY** values with CUIMC brand owners.

---

## 10. Open questions for CUIMC brand owners

- Official hex values for primary blue, accent blue, and neutral grays.
- Approved status/alert colors for product UI.
- Approved typeface for product interfaces (Montserrat appears on the website, but confirm it is licensed and sanctioned for applications).
- Required logo lockup, clear space, and minimum size for an eHospital product.
- Whether product UI may use rounded corners at all, or must follow the square-cornered web standard.
