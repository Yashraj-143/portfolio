# Yashraj — Editorial Portfolio

A designer-led personal portfolio built with semantic HTML, custom CSS and vanilla JavaScript. No framework, build step, paid API or package installation is required.

## Copy direction
The updated hero and about copy aims to sound more specific and personal without claiming professional experience. Skill levels are stated honestly.

## Design direction
- Editorial × cinematic: warm paper background, ink typography and restrained terracotta accent.
- Playfair Display for display headings; DM Sans for body text; Manrope for utility labels.
- Large type, asymmetrical columns, section numbering, fine rules and intentionally limited colour.
- Responsive layouts with dedicated mobile breakpoints.
- No personal photo; the hero uses an external architectural image from Unsplash.

## Interactions
- Mobile navigation menu with accessible state.
- Light/dark theme toggle.
- Copy-email button with placeholder checking.
- Subtle hero entrance, scroll reveals, and restrained hover transitions with reduced-motion support.
- Skip link, keyboard focus states and reduced-motion support.

## Before publishing
1. Replace `ADD_YOUR_EMAIL` in the email link in `index.html` with your real email address.
2. Confirm the education details and current semester are accurate.
3. Verify the Devnest changes described in the project section; link to your actual pull request or commit if available.
4. The portfolio project is labelled as a personal project; don't claim it is deployed until you publish it.
5. Test at desktop and mobile widths and check every link.
6. The fonts and two photographs load from external services. For offline use, replace them with locally hosted assets or system font fallbacks.

## Run locally
Open `index.html` in a browser. No build command is needed. VS Code Live Server is optional.

## Publish with GitHub Pages (free)
1. Create a public GitHub repository named `yashraj-portfolio`.
2. Upload `index.html`, `style.css`, `script.js` and `README.md` to the repository root.
3. Go to **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/(root)`, then save.
5. After GitHub Pages finishes deploying, open the URL shown in the Pages settings and test it.

## Explain these design decisions in an interview
- Why use a serif display font with a neutral sans-serif body font?
- How do CSS Grid and media queries change the layout across screen sizes?
- How does the mobile menu update `aria-expanded`?
- What does `classList.toggle()` do for the theme switch?
- Why should a project page accurately describe personal contribution rather than claiming ownership of a whole repository?

## Honest resume wording (use only after you test it)
**Personal Portfolio Website** — Designed and built a responsive personal portfolio using semantic HTML, CSS Grid, responsive media queries and vanilla JavaScript. Implemented mobile navigation, a light/dark theme toggle and a copy-email interaction. Published with GitHub Pages after testing on mobile and desktop.
