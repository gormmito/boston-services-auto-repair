# Boston Services Auto Repair — Website

A one-page website for **Boston Services Auto Repair**, a local mechanic and licensed North Carolina inspection station at **1702 Capital Blvd, Raleigh, NC 27604**.

It's plain HTML, CSS and JS with no build step. To preview it, open `index.html` in a browser. To host it, upload the folder to GitHub Pages, Netlify or Cloudflare Pages. All three are free.

| File | Purpose |
|---|---|
| `index.html` | Page content and SEO markup. It includes schema.org `AutoRepair` data so Google can show the hours, rating and address. |
| `styles.css` | Styles. Works on phones, tablets and desktops. |
| `script.js` | Shows open or closed based on Raleigh time and highlights today's hours. The quote form opens a text message to the shop with the details already filled in. |
| `favicon.svg` | Original "B" emblem. |
| `assets/` | Photos. `inspection-station.jpg` is the owner's own Google Business photo. `storefront.jpg` and `lot.jpg` are Google Street View crops for the pitch demo; replace them before launch. |
| `PRODUCT.md` | Confirmed facts about the business. Nothing on the site goes beyond this file. |
| `SALES-NOTES.md` | Research findings, sources, and what to confirm with the owner. |

## Design
The site is styled as the shop's own carbon-copy **repair order**. It uses only two inks, preprint red and carbon blue, on canary and pink carbonless paper. Real photos are paperclipped to the sheet.

## Features
- Click-to-call in the header and a sticky **Call / Quote / Directions** bar on phones
- Live **Open now / Closed** badge, based on Mon–Fri 10am–6pm Eastern
- A services table, an NC inspection section with the shop's own photo, the Google rating (4.5★ from 48 reviews) and verbatim customer remarks
- Embedded Google Map, directions link and a bus stop note
- **A working repair order as the quote form.** Tick services, then "Text this order to the shop" opens an SMS with everything filled in. It needs no server and has no monthly fees.
- **Carbon-copy sync.** Ticking a line in the services table ticks it on the form above, and the other way round.
- Local SEO: title and description, Open Graph tags and structured data
