DANIEL LEWIS SITE

Files
  index.html   the engine: particles, backgrounds, layout. You should not need to open it.
  content.js   every word on the site, every date, every photo path. This is the file you edit.
  img/         photos. me.jpg is the portrait.
  resume.pdf   add your resume here with exactly this name and the Resume link works.

Edit text
  Open content.js in any text editor (VS Code works). Change the words between the quotes. Save. Refresh the page.
  Text sits inside "double quotes", so apostrophes are safe. If a sentence needs a double quote mark, write it as \".

Add a photo to an entry
  1. Put the file in img/, for example img/nyx/half-scale-closed.jpg
  2. In that entry, change   photos: []   to
       photos: [ { src: "img/nyx/half-scale-closed.jpg", caption: "Half-scale prototype, closed, Oct 2026" } ]
     More than one photo: separate the { ... } blocks with commas.
  Photos are graded automatically (slightly desaturated) so phone shots match the page.
  Keep photos under about 400 KB each (1600 px on the long side is plenty).

Add a photo to a project tile
  In that world's tile line, set   photo: "img/nyx/tile.jpg"

Photography page
  1. Put photos in img/photos/ (make the folder). Resize to about 2000 px on the long side first; phone originals are too heavy.
  2. In content.js, find the Photography world (the last one) and fill   photos: []   like this:
       photos: [ { src: "img/photos/moon-1.jpg", caption: "Waxing gibbous, Oct 2026" },
                 { src: "img/photos/lightning.jpg" } ]
  The grey placeholder frames disappear as soon as there is one real photo. Click a photo on the page to see it large.

Add or remove a logbook entry
  Copy a whole { date: ..., photos: [] } block, paste it where it belongs, change it. Delete a block to remove it.
  Watch the commas between blocks.

Links
  At the bottom of content.js. Paste your LinkedIn URL into its href. For email use "mailto:you@example.com".
  An empty href hides that link.

See it locally
  Double-click index.html. It runs straight from the folder.

Publish free on GitHub Pages
  1. Make a repository named  danielewis1019.github.io  on GitHub (public).
  2. Upload everything in this folder (index.html, content.js, img, resume.pdf) to it.
  3. Repository Settings, Pages: deploy from the main branch, root folder.
  4. The site is live at https://danielewis1019.github.io in a minute or two.
  Every later change: edit content.js or add photos, upload again, done.
  Custom domain later: buy one, then add it under Settings, Pages, Custom domain.

Never put Lockheed proprietary information in content.js.
