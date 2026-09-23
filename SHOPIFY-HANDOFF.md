# Shopify and builder handoff

These are working HTML portfolio pages. No Shopify store is connected, no builder-native project has been imported, and no purchase can be completed. The public demo remains usable without Shopify.

## Account and store setup

For hands-on validation, use a Shopify test store and install the builder being demonstrated. Start with GemPages; validating one builder is sufficient for the target job's platform requirement. A Shopify Partner/Dev Dashboard test-store route is appropriate for development; store type and third-party app eligibility must be checked before installing a builder. A test store does not guarantee free access to every app or publishing feature. See [Shopify dev stores](https://shopify.dev/docs/apps/build/stores/development-stores) and [GemPages installation](https://help.gempages.net/articles/install-gempages-to-shopify-store).

No account, paid plan, trial subscription or app permission has been created or accepted for this project. The account owner needs to complete signup and any terms/billing steps. Once access is available, validate in an unpublished theme/page first.

## Page structure

| Concept | Parent | Detail pages | Intended Shopify destination |
| --- | --- | --- | --- |
| VALE | `handbags.html` | `handbags/arc.html`, `fold.html`, `tote.html`, `clutch.html` | Collection/landing page and four product templates |
| TETHER | `phone-accessories.html` | `phone-accessories/case.html`, `grip.html`, `cable.html` | Guided-shopping landing page and three product templates |
| After Dark | `halloween.html` | `halloween/witch.html`, `vampire.html`, `space.html`, `disco.html`, `heist.html`, `fairy.html` | Guide and six editorial pages/articles |

Nested paths express the demo's navigation, not a required Shopify URL format. Map each file to the store's actual product, collection, page or blog URL. Keep breadcrumbs and return links consistent. Halloween links currently go to real Etsy categories as disclosed, non-affiliate examples; replace them with the client's approved destinations when appropriate.

## Builder-specific paths

| Builder | Current package | Native editable route |
| --- | --- | --- |
| GemPages / VALE | `builder-packs/gempages/`: HTML, CSS, JS and all-in-one embed | GemPages documents HTML-to-editable-page conversion through GemCommerce MCP and an Export Builder workflow producing `.gempages` files. Use its current supported schema/workflow, then validate the editor and preview. Our package is not a `.gempages` export. |
| PageFly / TETHER | `builder-packs/pagefly/`: HTML/Liquid content plus CSS and JS | Import the custom content through an HTML/Liquid element, or rebuild using native layout, image, text and product elements for merchant editing. Pasting HTML does not make its child elements native PageFly controls. |
| Shogun / After Dark | `builder-packs/shogun/embed.html` | Use an HTML element for the code version; rebuild native text, image, button and layout elements for editor-managed sections and save reusable Snippets. Shogun's HTML element supports CSS/JS but does not evaluate Liquid. |

Each builder's `details/<slug>/` folder contains the corresponding child-page payloads. Use one page per embed. Replace all `assets/web/` image paths, including every `srcset` candidate, with uploaded store asset URLs. Replace internal `.html` links using the destination route map. Avoid duplicate theme headers, footers and main landmarks. Separate HTML/CSS/JS files and the combined embed are alternatives; do not install both.

Sources: [GemPages HTML-to-page](https://help.gempages.net/articles/gempages-mcp-html-to-page), [GemPages Export Builder](https://help.gempages.net/articles/gempages-export-builder), [PageFly HTML/Liquid](https://help.pagefly.io/page-structure-and-elements/pagefly-elements/basic/html-liquid-element), [Shogun HTML element](https://getshogun.com/help/en/articles/1391671-how-to-embed-html-code-in-shogun), [Shogun Snippets](https://getshogun.com/help/en/articles/1391665-how-to-re-use-content-using-shogun-s-snippets).

## Connect real commerce

1. Create the real products, variants and collections with approved prices, inventory, photography and copy.
2. Bind native builder product controls to Shopify data. Replace the sample cart and hard-coded totals; account for availability, selected variants and quantity. TETHER's optional accessories must add the correct products, not merely a displayed bundle total.
3. Upload responsive images and map navigation to the store's actual routes. Keep accessibility labels, heading order and keyboard interactions when rebuilding.
4. Test mobile and desktop previews in the destination theme: first-screen hook/CTA, no overflow, working product selection/cart, error states, links, focus order, image loading and a test checkout. Retest after publishing to the test storefront.
5. Save a native reusable template/section only after the completed page works inside the builder. Record an editor walkthrough and published preview as evidence of builder proficiency.

## Fit for the Upwork listing

The [advertorial/listicle listing](https://www.upwork.com/jobs/~022102406622260566167) accepts HTML delivery, asks for a relevant portfolio and fluency in at least one listed builder, and emphasizes responsive layouts, mobile UX, early hooks and CTA placement. It states $50 per page and expects supplied-copy turnaround within two business days. Its clients are in health and wellness.

The portfolio demonstrates design and frontend execution. Native-builder proficiency, actual delivery time under client revisions, and health/wellness client experience are not established by these samples. TETHER is guided shopping after the requested redesign; After Dark supplies the long-form editorial/listicle example. Quote the HTML option honestly until a native-builder sample is verified.
