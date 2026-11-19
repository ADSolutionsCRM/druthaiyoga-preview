# Dru Thai Yoga — Website Preview

Preview website for Dru Thai Yoga, mobile Thai yoga massage and 1:1 yoga in Farnham, Surrey.

Static site (`index.html` + `img/`), ready for GitHub Pages.

Content, prices and reviews from Dru's current site; photography supplied by Dru.

Built by ADSolutions.

## Online booking (Cal.com)

The booking section embeds a Cal.com calendar so clients can see live availability and book.

1. Dru creates a free account at https://cal.com and picks a username (e.g. `druthaiyoga`).
2. In Cal.com: set **Availability** (Mon, Tue, Thu, Fri 09:30–14:30), connect her Google/Apple calendar, and create two event types: *Thai Yoga Massage – 1 hour (£65)* and *Thai Yoga Massage – 90 minutes (£85)*. Add buffer time between sessions and a minimum notice period.
3. In `index.html`, set `var CAL_LINK = "druthaiyoga";` (search for `CAL_LINK`).

Until `CAL_LINK` is set, the panel shows "Online booking opens soon" and the enquiry form still works. To preview any Cal.com link without editing, add `?cal=username` to the site URL.
