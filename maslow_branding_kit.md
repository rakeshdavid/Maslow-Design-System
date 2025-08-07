# Maslow Branding Kit

## Developer Guidelines & Implementation Standards

---

## 1. Color System

### Primary Colors

| Color Name     | HEX Code  | RGB                | Usage Guidelines                                                                    |
| -------------- | --------- | ------------------ | ----------------------------------------------------------------------------------- |
| Maslow Teal    | `#6DC4AD` | rgb(109, 196, 173) | Primary brand color. Use for main CTAs, navigation elements, and brand highlights   |
| Teal Variant 1 | `#73C1AE` | rgb(115, 193, 174) | Secondary teal variant for hover states or gradient creation with primary teal      |
| Teal Variant 2 | `#60C3AE` | rgb(96, 195, 174)  | Tertiary teal variant for active states or subtle differentiation from primary teal |
| Accent Green   | `#2CD552` | rgb(44, 213, 82)   | Use for success states, positive indicators, and complementary accents to teal      |

### Secondary Colors

| Color Name       | HEX Code  | RGB                | Usage Guidelines                                                                         |
| ---------------- | --------- | ------------------ | ---------------------------------------------------------------------------------------- |
| Maslow Pink      | `#EE7BB3` | rgb(238, 123, 179) | Main secondary color. Use for highlighting secondary actions or creating visual interest |
| Pink Variant     | `#DA85B2` | rgb(218, 133, 178) | Alternative pink for hover states or to create depth in pink elements                    |
| Deep Purple      | `#401877` | rgb(64, 24, 119)   | Use for important text or deep accents that need visual weight                           |
| Purple Variant 1 | `#9D4B8E` | rgb(157, 75, 142)  | Mid-range purple for balanced emphasis between deep purple and lighter purples           |
| Purple Variant 2 | `#A070A6` | rgb(160, 112, 166) | Softer purple for secondary elements or hover states                                     |
| Purple Variant 3 | `#A56FA8` | rgb(165, 111, 168) | Lightest purple variant for subtle background treatments or tertiary elements            |

### Foundation Colors

| Color Name | HEX Code  | RGB                | Usage Guidelines                                                        |
| ---------- | --------- | ------------------ | ----------------------------------------------------------------------- |
| Dark Blue  | `#121D35` | rgb(18, 29, 53)    | Use for primary text, headers, and dark backgrounds requiring depth     |
| Sky Blue   | `#469DBB` | rgb(70, 157, 187)  | Complementary accent to the teal family, use for informational elements |
| Coral      | `#E19379` | rgb(225, 147, 121) | Use sparingly as a warm accent or for notification elements             |
| Dark Gray  | `#333333` | rgb(51, 51, 51)    | Secondary text color and UI elements requiring definition               |
| Mid Gray   | `#A5A5A5` | rgb(165, 165, 165) | Tertiary text, disabled states, and subtle UI elements                  |

### Background Colors

| Color Name | HEX Code  | RGB                | Usage Guidelines                                                          |
| ---------- | --------- | ------------------ | ------------------------------------------------------------------------- |
| Silver     | `#E6EAF3` | rgb(230, 234, 243) | Primary interface background with subtle blue undertone                   |
| Light Gray | `#EEEEEE` | rgb(238, 238, 238) | Secondary background color for cards, containers, or alternating sections |
| White      | `#FFFFFF` | rgb(255, 255, 255) | Use for main content areas, cards, and primary input fields               |

### Alert & Feedback Colors

| Color Name     | HEX Code  | RGB               | Usage Guidelines                                               |
| -------------- | --------- | ----------------- | -------------------------------------------------------------- |
| Warning Orange | `#F3A326` | rgb(243, 163, 38) | Use for warnings and caution states                            |
| Orange Variant | `#EBA93D` | rgb(235, 169, 61) | Alternative orange for hover states                            |
| Bright Yellow  | `#FFF860` | rgb(255, 248, 96) | Use for highlighting or temporary notifications                |
| Error Red      | `#D52C2C` | rgb(213, 44, 44)  | Use for error states, destructive actions, and critical alerts |

## 2. Typography System

### Primary Font: Manrope

Manrope is a modern, geometric sans-serif with high legibility and a clean, professional aesthetic.

#### Implementation Guidelines:

```css
/* Font imports */
@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@200;300;400;500;600;700;800&display=swap");

/* Font usage */
body {
    font-family: "Manrope", sans-serif;
}
```

#### Type Scale:

| Element | Size | Weight | Line Height | Usage                              |
| ------- | ---- | ------ | ----------- | ---------------------------------- |
| H1      | 40px | 800    | 48px        | Main page headings                 |
| H2      | 32px | 700    | 40px        | Section headings                   |
| H3      | 24px | 600    | 32px        | Sub-section headings               |
| H4      | 20px | 600    | 28px        | Card headings, feature titles      |
| H5      | 18px | 600    | 24px        | Minor headings, emphasized content |
| H6      | 16px | 700    | 24px        | Small headings, button text        |
| Body 1  | 16px | 400    | 24px        | Primary body text                  |
| Body 2  | 14px | 400    | 20px        | Secondary body text                |
| Caption | 12px | 500    | 16px        | Labels, captions, footnotes        |
| Button  | 16px | 600    | 16px        | Button text, call to actions       |

### Secondary Font: Graphik

Graphik provides contrast to Manrope and should be used selectively for specialty purposes.

#### Implementation Guidelines:

```css
/* Font imports */
@import url("https://fonts.googleapis.com/css2?family=Graphik:wght@300;400;500;600;700&display=swap");

/* Font usage - reserved for special elements */
.specialty-text {
    font-family: "Graphik", sans-serif;
}
```

#### Usage Guidelines:

- Use Graphik primarily for:
    - Pull quotes
    - Testimonials
    - Marketing headlines
    - Feature callouts
    - Specialized UI elements requiring distinction

## 3. Logo Usage Guidelines

### Logo Variants

#### Regular Logo (Full Color)

- Primary logo usage
- Minimum clear space: Equal to the height of the "M" in the logo
- Minimum size: 120px width for digital, 1.5" for print

#### Black Logo

- Use when color printing is unavailable
- Suitable for monochrome applications
- Use on light backgrounds only

#### White Logo

- Use on dark backgrounds or photo backgrounds
- Minimum background contrast ratio: 4.5:1

#### Squared Logo

- Use for social media avatars, favicons, and app icons
- Maintain equal padding within the square frame
- Do not crop or alter the proportions

### Logo Do's and Don'ts

✅ DO:

- Maintain the logo's proportions when scaling
- Use the appropriate logo version for the background
- Maintain adequate clear space around the logo
- Use the logo in its approved colors only

❌ DON'T:

- Stretch or distort the logo
- Change the logo colors outside the approved palette
- Apply effects like shadows, outlines, or gradients
- Place the logo on busy backgrounds without sufficient contrast
- Rotate the logo or use partial versions of the logo

## 4. Component Design System

### Buttons

#### Primary Button

```css
.button-primary {
    background-color: #6dc4ad;
    color: #ffffff;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 16px;
    transition: background-color 0.2s ease;
}

.button-primary:hover {
    background-color: #60c3ae;
}

.button-primary:active {
    background-color: #73c1ae;
}

.button-primary:disabled {
    background-color: #a5a5a5;
    cursor: not-allowed;
}
```

#### Secondary Button

```css
.button-secondary {
    background-color: transparent;
    color: #6dc4ad;
    border: 2px solid #6dc4ad;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 16px;
    transition: all 0.2s ease;
}

.button-secondary:hover {
    background-color: rgba(109, 196, 173, 0.1);
}

.button-secondary:active {
    background-color: rgba(109, 196, 173, 0.2);
}
```

#### Tertiary Button

```css
.button-tertiary {
    background-color: transparent;
    color: #121d35;
    border: none;
    border-radius: 8px;
    padding: 12px 24px;
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 16px;
    transition: background-color 0.2s ease;
}

.button-tertiary:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

.button-tertiary:active {
    background-color: rgba(0, 0, 0, 0.1);
}
```

### Form Elements

#### Text Input

```css
.input-text {
    border: 1px solid #a5a5a5;
    border-radius: 8px;
    padding: 12px 16px;
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    color: #121d35;
    background-color: #ffffff;
    transition: border-color 0.2s ease;
}

.input-text:focus {
    border-color: #6dc4ad;
    outline: none;
    box-shadow: 0 0 0 2px rgba(109, 196, 173, 0.2);
}

.input-text:disabled {
    background-color: #eeeeee;
    color: #a5a5a5;
}
```

#### Checkbox

```css
.checkbox {
    position: relative;
    height: 20px;
    width: 20px;
    background-color: #ffffff;
    border: 2px solid #a5a5a5;
    border-radius: 4px;
    transition: all 0.2s ease;
}

.checkbox:checked {
    background-color: #6dc4ad;
    border-color: #6dc4ad;
}

.checkbox:focus {
    box-shadow: 0 0 0 2px rgba(109, 196, 173, 0.2);
}
```

### Cards

#### Standard Card

```css
.card {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

.card-title {
    font-family: "Manrope", sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: #121d35;
    margin-bottom: 16px;
}

.card-body {
    font-family: "Manrope", sans-serif;
    font-size: 16px;
    font-weight: 400;
    color: #333333;
}
```

#### Feature Card

```css
.card-feature {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 24px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
    border-top: 4px solid #6dc4ad;
}

.card-feature:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
    transition: all 0.3s ease;
}
```

## 5. Responsive Design Guidelines

### Breakpoints

- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Large Desktop: 1440px and above

### Grid System

- Base unit: 8px
- Column count: 12 columns on desktop, 8 on tablet, 4 on mobile
- Gutter width: 24px on desktop and tablet, 16px on mobile
- Margin: 64px on desktop, 32px on tablet, 16px on mobile

### Responsive Typography

```css
/* Base font size */
html {
    font-size: 16px;
}

/* Mobile typography */
@media (max-width: 767px) {
    h1 {
        font-size: 32px;
        line-height: 40px;
    }
    h2 {
        font-size: 28px;
        line-height: 36px;
    }
    h3 {
        font-size: 22px;
        line-height: 28px;
    }
    body {
        font-size: 16px;
        line-height: 24px;
    }
}

/* Tablet typography */
@media (min-width: 768px) and (max-width: 1023px) {
    h1 {
        font-size: 36px;
        line-height: 44px;
    }
    h2 {
        font-size: 30px;
        line-height: 38px;
    }
    h3 {
        font-size: 24px;
        line-height: 30px;
    }
    body {
        font-size: 16px;
        line-height: 24px;
    }
}

/* Desktop typography */
@media (min-width: 1024px) {
    h1 {
        font-size: 40px;
        line-height: 48px;
    }
    h2 {
        font-size: 32px;
        line-height: 40px;
    }
    h3 {
        font-size: 24px;
        line-height: 32px;
    }
    body {
        font-size: 16px;
        line-height: 24px;
    }
}
```

## 6. Accessibility Guidelines

### Color Contrast Requirements

- Text and interactive elements must maintain a minimum contrast ratio of 4.5:1 against their backgrounds
- Large text (18pt or 14pt bold) must maintain a minimum contrast ratio of 3:1
- UI components and graphical objects must maintain a minimum contrast ratio of 3:1 against adjacent colors

### Focus States

All interactive elements must have visible focus states using:

```css
:focus {
    outline: 2px solid #6dc4ad;
    outline-offset: 2px;
}
```

### Keyboard Navigation

- All interactive elements must be accessible via keyboard
- Focus order must follow natural reading order
- Custom components must implement appropriate ARIA attributes

### Screen Reader Support

- All images must include descriptive alt text
- Form fields must have associated labels
- Use semantic HTML elements where possible
- Complex interactive components must include appropriate ARIA roles, states, and properties

## 7. Animation & Transition Guidelines

### Motion Principles

- **Purpose**: Animations should communicate functionality, not just decorate
- **Context**: Motion should feel natural within the user's current context
- **Continuity**: Changes should feel connected and fluid, not jarring

### Standard Timing Functions

```css
/* Default transition for UI elements */
.transition-default {
    transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Entrance animations */
.transition-entrance {
    transition: all 0.3s cubic-bezier(0, 0, 0.2, 1);
}

/* Exit animations */
.transition-exit {
    transition: all 0.2s cubic-bezier(0.4, 0, 1, 1);
}
```

### Animation Duration Guidelines

- Micro-interactions (button states, form feedback): 100-200ms
- UI transitions (panels, modals): 200-300ms
- Page transitions: 300-500ms
- Loading states: 1500ms loop maximum

## 8. Developer Implementation Notes

### CSS Variables Implementation

```css
:root {
    /* Primary Colors */
    --color-teal: #6dc4ad;
    --color-teal-variant-1: #73c1ae;
    --color-teal-variant-2: #60c3ae;
    --color-accent-green: #2cd552;

    /* Secondary Colors */
    --color-pink: #ee7bb3;
    --color-pink-variant: #da85b2;
    --color-deep-purple: #401877;
    --color-purple-variant-1: #9d4b8e;
    --color-purple-variant-2: #a070a6;
    --color-purple-variant-3: #a56fa8;

    /* Foundation Colors */
    --color-dark-blue: #121d35;
    --color-sky-blue: #469dbb;
    --color-coral: #e19379;
    --color-dark-gray: #333333;
    --color-mid-gray: #a5a5a5;

    /* Background Colors */
    --color-silver: #e6eaf3;
    --color-light-gray: #eeeeee;
    --color-white: #ffffff;

    /* Alert Colors */
    --color-warning: #f3a326;
    --color-warning-variant: #eba93d;
    --color-bright-yellow: #fff860;
    --color-error: #d52c2c;

    /* Typography */
    --font-primary: "Manrope", sans-serif;
    --font-secondary: "Graphik", sans-serif;

    /* Spacing - using 8px grid */
    --space-xxs: 4px;
    --space-xs: 8px;
    --space-sm: 16px;
    --space-md: 24px;
    --space-lg: 32px;
    --space-xl: 48px;
    --space-xxl: 64px;

    /* Border radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;

    /* Shadows */
    --shadow-sm: 0 2px 4px rgba(0, 0, 0, 0.05);
    --shadow-md: 0 4px 8px rgba(0, 0, 0, 0.08);
    --shadow-lg: 0 8px 16px rgba(0, 0, 0, 0.1);
}
```

### Best Practices for AI Code Implementation

1. **Color Application**
    - Always use CSS variables rather than hardcoded HEX values
    - Group colors semantically by function, not just by visual similarity
    - Apply colors consistently across related components

2. **Typography Implementation**
    - Maintain the type scale hierarchy strictly
    - Avoid introducing new font sizes or weights
    - Use relative units (rem) for responsive typography

3. **Component Development**
    - Build components from the provided design system, not from scratch
    - Follow the nesting patterns shown in the CSS examples
    - Use utility classes for spacing according to the 8px grid

4. **Accessibility Implementation**
    - Test color contrast before implementation
    - Implement focus states for all interactive elements
    - Include appropriate ARIA attributes based on component functionality

5. **Responsive Implementation**
    - Mobile-first approach is preferred
    - Use the defined breakpoints consistently
    - Avoid introducing new breakpoints unless absolutely necessary

## 9. File Organization Guidelines

### Assets Directory Structure

```
/assets
  /fonts
    - manrope-variable.woff2
    - graphik-regular.woff2
    - [additional font weights]
  /images
    /logos
      - maslow-logo-full.svg
      - maslow-logo-black.svg
      - maslow-logo-white.svg
      - maslow-logo-square.svg
    /icons
      - [system icons]
    /illustrations
      - [illustrations]
  /styles
    /base
      - _variables.scss
      - _typography.scss
      - _reset.scss
      - _grid.scss
    /components
      - _buttons.scss
      - _forms.scss
      - _cards.scss
      - [additional component styles]
    /layouts
      - _header.scss
      - _footer.scss
      - _sidebar.scss
    /utilities
      - _spacing.scss
      - _colors.scss
      - _accessibility.scss
    /pages
      - [page-specific styles]
    - main.scss
```

### JavaScript Component Structure

```
/components
  /Button
    - Button.js
    - Button.test.js
    - Button.stories.js
  /Card
    - Card.js
    - Card.test.js
    - Card.stories.js
  /Form
    /Input
      - Input.js
      - Input.test.js
      - Input.stories.js
    /Checkbox
      - Checkbox.js
      - Checkbox.test.js
      - Checkbox.stories.js
```

## 10. Version Control & Documentation

### Version Tracking

- Maintain a CHANGELOG.md file at the root of the design system
- Use semantic versioning (MAJOR.MINOR.PATCH)
- Document all changes, including deprecations and additions

### Documentation Requirements

- Each component must include:
    - Usage examples
    - Props/parameters documentation
    - Accessibility considerations
    - Responsive behavior
    - Customization options

### Documentation Format

- Use Markdown for all documentation
- Include code snippets with syntax highlighting
- Provide visual examples for all components
- Cross-reference related components

---

This branding kit was created to provide comprehensive guidelines for implementing the Maslow brand identity across digital platforms. For questions or clarification, please contact the design team.
