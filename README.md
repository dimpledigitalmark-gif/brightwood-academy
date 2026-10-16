# Brightwood Academy — GitHub Pages Website

A responsive school landing page built with plain HTML, CSS and JavaScript. No build step is required.

## Files
- `index.html` — page content and sections
- `style.css` — responsive layout, colours, typography and styling
- `script.js` — mobile menu, current year and demo enquiry form

## Publish with GitHub Pages
1. Sign in at https://github.com/
2. Create a **new public repository**, for example `brightwood-academy`.
3. Upload `index.html`, `style.css`, `script.js`, and this README to the repository's root (top-level folder). You can upload the ZIP contents after extracting the ZIP on your computer.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Choose branch **main** and folder **/(root)**, then click **Save**.
7. Wait for the Pages deployment to finish. The URL will look like `https://YOUR-USERNAME.github.io/brightwood-academy/`.

## Edit before publishing
Search the files for `Replace`, `placeholder`, `[Add`, and `sample`:
- Verify the full school address in `index.html`. Current location text is only `Mansarovar, Jaipur, Rajasthan`.
- Add the official phone number and email in the contact section.
- Replace sample curriculum, facilities and school statements with verified details.
- Replace stock/example photos with approved school photos where possible.
- In `script.js`, set `SCHOOL_EMAIL` to the real admissions email. The form opens the visitor's email app; it does not save submissions to a database.
- Update the announcement and admissions text to match the school's actual status.

## Images and fonts
The sample page uses remote Unsplash image URLs and Google Fonts, so those elements need an internet connection. For a fully self-contained site, download school-approved images into an `assets/` folder and update the image URLs.

## Notes
GitHub Pages hosts static websites. A form that collects and stores submissions needs a separate form service or backend. Do not publish private student data.
