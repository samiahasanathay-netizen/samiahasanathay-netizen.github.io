# Samia Athay — Portfolio Website

A personal portfolio site for Samia Athay (PR, film production &amp; costume design), built with plain HTML/CSS/JS — no build step, so it publishes on GitHub Pages exactly as-is.

## Pages

| File | Page |
|---|---|
| `index.html` | Landing page — name, intro, portrait, featured work |
| `about.html` | Profile, education, skills, achievements |
| `academic.html` | Grid of all 14 ULAB coursework projects |
| `project.html?id=N` | Detail view for one academic project (reads `js/academic-data.js`) |
| `professional.html` | Work experience + film/costume design credits |
| `photography.html` | Photo gallery (placeholders — see below) |
| `contact.html` | Contact info + message form |

## Publishing to GitHub Pages

1. Create a new repository on GitHub (e.g. `samia-portfolio`).
2. Upload **everything inside this folder** to the root of that repository — `index.html`, `css/`, `js/`, `assets/`, all the `.html` files.
   - Easiest way: on the repo page, click **Add file → Upload files**, drag in everything, and commit.
   - Or with git:
     ```
     git init
     git add .
     git commit -m "Portfolio site"
     git branch -M main
     git remote add origin https://github.com/<your-username>/<repo-name>.git
     git push -u origin main
     ```
3. In the repository, go to **Settings → Pages**.
4. Under **Source**, choose **Deploy from a branch**, pick the `main` branch and `/ (root)` folder, then **Save**.
5. GitHub gives you a live URL after a minute or two, usually:
   `https://<your-username>.github.io/<repo-name>/`

No build tools, npm installs, or servers needed — it's static HTML the whole way.

## Adding your photography

`photography.html` currently shows six placeholder tiles. To swap in real photos:

1. Put your image files in `assets/photography/`.
2. In `photography.html`, find a placeholder block like:
   ```html
   <figure><span class="ph">Add photo<br>gallery / 01</span><figcaption>Set &amp; behind-the-scenes</figcaption></figure>
   ```
3. Replace the `<span class="ph">…</span>` with an `<img>` tag:
   ```html
   <figure><img src="assets/photography/your-file.jpg" alt="Describe the photo"><figcaption>Set &amp; behind-the-scenes</figcaption></figure>
   ```
4. Add or delete whole `<figure>…</figure>` blocks to change how many tiles show. Edit the `<figcaption>` text for the caption that appears on hover.

## Editing your academic projects

All 14 academic project entries live in one place: `js/academic-data.js`. Each project is a plain object — edit `title`, `description`, `justification`, `link`, etc. directly there. `academic.html` and `project.html` both read from this file, so you only ever need to edit it once.

## Editing colors & type

Every color and font in the site is defined once at the top of `css/style.css` under `:root`. Change a value there (e.g. `--gold`, `--indigo`, `--f-display`) and it updates everywhere.

## Notes

- Your phone number and references' contact details from your CV were **left off the public site** for privacy — only your email, LinkedIn, and city are shown. Add them back in `contact.html` / `about.html` if you'd like.
- The contact form doesn't send email itself (that needs a backend or a service like Formspree) — it opens the visitor's email app with your address and their message pre-filled.
- Bengali text (film titles, project 5's title) uses Noto Serif Bengali / Hind Siliguri as fallback fonts, loaded from Google Fonts alongside Fraunces, Inter and Space Mono.
