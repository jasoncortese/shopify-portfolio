# Focused landing-page studies

Design and implementation by Jason Cortese. Independent, unsolicited portfolio concepts; neither page represents a commissioned client engagement or a live business service.

- [Scottsdale scalp micropigmentation](https://jasoncortese.github.io/shopify-portfolio/concepts/scottsdale-scalp-micropigmentation.html)
- [Flip The Contract: landing page + CRM](https://jasoncortese.github.io/shopify-portfolio/concepts/real-estate-crm-redesign.html)

## SMP: a shortened conversion-flow study

A premium editorial hero, Scottsdale positioning, clear consultation CTA, direct artist relationship, three-step process and two-step consultation form. Mobile includes a persistent CTA. The form validates required fields and reaches a dedicated demo confirmation page. Selected files remain on the visitor's device; no lead data is sent, logged or stored. Use sample details only.

The production scope would add Karl's approved brand assets, actual results gallery, verified testimonials, artist portrait, confirmed prices, phone number, secure form delivery and photo handling, email notifications, consent-aware Meta/GA4 tracking, attribution, domain and SSL. The brief gives two different starting prices ($1,500 and $1,800); confirm before publishing prices. No unverified reviews, credentials, outcomes or ratings were invented for this study.

SEO includes a descriptive URL and title, meta description, canonical URL, semantic headings, descriptive image alt text, Open Graph text metadata and WebPage JSON-LD identifying this as a portfolio concept. `sitemap.xml` lists the two studies. The demo completion page is `noindex`. No fabricated LocalBusiness address, review schema or ranking claim.

## Flip The Contract: focus and continuity

Reference reviewed September 25, 2026: [existing public landing page](https://flipthecontract.com/). The public site presents a purple identity with gold brand accents, product previews, an analyzer, workflow sections and multiple entry points. The job requests retention of brand identity, clearer messaging, simpler navigation, better onboarding and responsive implementation in the existing codebase.

This concept keeps purple and gold, simplifies the opening around one primary demo action, and pairs it with a daily-priority view. A compact pipeline leads into a contextual detail dialog: review activity, choose a next action, and see it on the same card. Search includes an empty state. Escape closes the dialog and returns focus to the initiating card. The introductory workflow provides a visible first-day path.

All properties, people and numbers are fictional. This is a proposed workflow, not a reconstruction or audit of the private CRM. No measurable reduction in clicks or conversion improvement is claimed. No Supabase data, authentication, live property search, contract generation or messaging is connected. Changes last only in page memory and reset on reload. The next client step would be reviewing the existing framework, current flows, permissions and a fixed list of screens before integrating the design.

## Implementation and verification

Dependency-free HTML, CSS and JavaScript; scoped page palettes and shared layout/form primitives. Native form controls and a native modal dialog. No tracking scripts, external font requests or paid hosting.

Verified in Chrome through browser automation:

- Both studies at 320, 390, 768 and 1440 CSS pixels: document width matches viewport; no horizontal overflow.
- Desktop and 390px mobile visuals inspected; portrait loads successfully.
- SMP: empty first step blocks progression; valid selections reveal contact fields; sample contact details reach the confirmation page.
- CRM: card opens detail; selected action updates card and status; search filters and shows empty state; Escape closes dialog and restores focus.
- One H1 per study; labeled controls, skip links, visible focus treatment and reduced-motion CSS.

These are targeted checks, not a complete WCAG audit or live integrations test.

## Image provenance

`assets/scottsdale-smp-editorial-portrait.jpg` is an optimized export of an image generated with the built-in OpenAI image-generation tool on September 25, 2026. It is explicitly labeled as AI-generated concept photography, not Karl, a client or a treatment result.

Prompt: “Use case: photorealistic-natural. Create one premium editorial portrait photograph for an independent scalp micropigmentation landing page concept. A confident man around 40 with very closely shaved dark hair, natural receding hairline, subtle salt-and-pepper beard, warm olive skin, wearing a plain black crew-neck shirt. Waist-up seated, relaxed direct gaze, slightly off-center toward right. Contemporary charcoal studio background, soft directional window light, subtle warmth, restrained luxury aesthetic, genuine skin texture and pores, sharp facial detail, no airbrushing. Vertical 4:5 composition, entire head visible with space above, enough torso for crop. Not a patient before/after, not a treatment demonstration; no medical equipment, no text, no logos, no watermark. Save the generated asset for website use.”
