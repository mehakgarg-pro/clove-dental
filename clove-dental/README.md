# Clove Dental – Landing Page (Web Dev Intern Assessment)
Vanilla HTML/CSS/JS, mobile-first. Sections: Hero + booking form, Root Canal treatments, Why Choose Clove (accordion), Patient stories (slider), Find Us (cities + clinics), FAQ (accordion) + footer.
Images are in `assets/` (cropped from design screenshots; replace with Figma exports for higher quality, keeping the same file names).
Deploy: push to GitHub → Settings → Pages (main / root), or drag the folder to app.netlify.com/drop.
# Clove Dental – Landing Page

Responsive landing page built from the provided Figma design, for the Unbundl Web Dev Intern assessment.

**Live URL:** <https://comforting-basbousa-1e2eda.netlify.app/>
**Repository:** <https://github.com/mehakgarg-pro/clove-dental>

## Tech Stack

- HTML5 (semantic markup)
- CSS3 (mobile-first, Flexbox and Grid, CSS variables)
- Vanilla JavaScript (no frameworks)

## Sections Built
1. **Hero** with the booking form and a scrolling stats strip
2. **Types of Root Canal Treatments**
3. **Why Choose Clove Dental** (accordion)
4. **What Our Patients Say** (slider)
5. **Find Us Across India** (city list and clinic photos)
6. **Frequently Asked Questions** (accordion)

The navbar and footer are included as well.

I chose these sections because together they show a range of layouts (split hero, card grid, two-column accordion, horizontal slider, photo grid) and different kinds of interaction.

## Features
- Mobile-first responsive layout, checked at 375px, 768px, 1024px and 1440px
- Hamburger menu on mobile, sticky header with a shadow on scroll
- Accordions with `aria-expanded`, one item open at a time
- Patient slider with arrow buttons, touch swipe and keyboard arrow keys
- Booking form validation (name, 10-digit mobile number, captcha, consent)
- Semantic HTML, alt text on images, visible focus states, reduced-motion support

## Project Structure
├── index.html
├── css/style.css
├── js/main.js
└── assets/

## Notes
- Images were cropped from design screenshots because Figma export was not available. They can be replaced with the original exports using the same file names.
- FAQ answers are placeholder text written by me, since the design did not include them.
- The captcha is a simple client-side demo and the form does not send data to a server.

## Run Locally
Open `index.html` in a browser, or use the VS Code Live Server extension.