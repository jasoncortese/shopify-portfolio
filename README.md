# Commerce design studies

Three independent portfolio concepts by Jason Cortese. Open `index.html`, or run `python3 -m http.server 4174` from this folder and visit http://localhost:4174.

| Concept | Format | Builder handoff | Working interactions |
| --- | --- | --- | --- |
| VALE — The Arc | Handbag DTC | GemPages | Strap choice, quantity, sample bag, product disclosures |
| TETHER Fieldnotes | Phone-accessories advertorial | PageFly | Model selection, optional accessories, live total, sample bag |
| After Dark | Halloween listicle | Shogun | Six looks, category filters, styling recipes, saved shortlist |

## What this demonstrates

Distinct art direction, conversion-focused information hierarchy, responsive CSS, accessible native controls and lightweight JavaScript. Each page has an early CTA and a mobile action bar. The advertorial identifies its brand authorship. No fabricated testimonials, discounts, scarcity, conversion metrics or client outcomes are presented.

The websites are standalone HTML/CSS/JavaScript. **They were not authored or verified inside the proprietary builder editors.** Builder folders are custom-code handoffs, not native drag-and-drop templates or evidence of platform experience. Suggested portfolio wording: “Three responsive commerce concepts with custom-code handoffs for GemPages, PageFly and Shogun.”

All brands, products, prices and specifications are fictional. Photography was generated for this project; see `image-provenance.md`. Shopping bags are session-only demonstrations. No checkout, customer data collection, payment or Shopify API is connected. Saved Halloween ideas persist locally when browser storage is available.

## Builder setup

Upload the assets to the destination store's Files library. Replace relative `assets/*.png` URLs in the relevant `content.html` or `embed.html` with hosted URLs. Replace links to `index.html` with the portfolio collection URL. Use a blank/full-width page template to avoid duplicate headers and footers.

* **GemPages / VALE:** add a Custom Code element; use `builder-packs/gempages/content.html` for HTML/Liquid, `styles.css` for CSS and `script.js` for JavaScript. See the [Custom Code documentation](https://help.gempages.net/articles/custom-code-element).
* **PageFly / TETHER:** place `builder-packs/pagefly/content.html` in an [HTML/Liquid element](https://help.pagefly.io/page-structure-and-elements/pagefly-elements/basic/html-liquid-element). Add CSS and JavaScript through the [custom code editor](https://help.pagefly.io/page-structure-and-elements/optimization/custom-code-editor).
* **Shogun / After Dark:** paste `builder-packs/shogun/embed.html` into an [HTML element](https://getshogun.com/help/en/articles/1391671-how-to-embed-html-code-in-shogun). This combines HTML, scoped styles and script. It contains no Liquid. Check script behavior in the destination plan and published preview.

Use one concept per page. Each handoff includes a header, main landmark and footer; remove duplicate theme landmarks if necessary. Keep `.sp-root` and its theme class around the content. Do not combine the all-in-one embed with the separate CSS/JS files. Styles are scoped, but theme CSS may still need adjustment. Validate the published preview: editor canvases can behave differently.

For a real store, replace demo shopping logic with genuine product/variant data and Shopify cart integration, verify all product claims, and retest accessibility within the final theme. No store or builder subscription is necessary to view these portfolio versions.

## Accessibility and maintenance

Semantic headings and landmarks, skip links, labels, alt text, visible keyboard focus, native dialogs, status announcements, reduced-motion support and touch targets are included. See `verification.md` for the checks actually performed and their limits; this is not an accessibility certification.

Edit the standalone HTML, `styles.css` and `app.js` directly. Builder packages are snapshots: mirror changes into them before importing. No runtime dependencies, build step, tracking scripts or external fonts are required.
