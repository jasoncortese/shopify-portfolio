# Verification — September 23, 2026

## Completed checks

- All 17 pages (collection index, three concepts and 13 detail pages) fit at 320, 390, 768 and 1440 CSS pixels without horizontal document overflow. All images loaded. Local navigation, fragments, unique IDs and one H1 per page also passed.
- Final desktop and 390px mobile layouts visually reviewed in Chrome on macOS: a four-bag collection, side-by-side phone configurator that stacks on mobile, and a fully vertical Halloween shopping guide. Mobile CTA links reach their product, kit and costume sections.
- axe-core 4.13.0 checked all 17 pages at 390px and 1440px against WCAG 2 A/AA, 2.1 AA, 2.2 AA and best-practice tags: **zero reported violations across 34 page/width audits**.
- The Halloween heart icons required manual contrast review: foreground/background contrast is 14.81:1 in either state. Photo captions now use ordinary text beneath the photos.
- The Fold detail page quantity 2 produced $390. Detail layouts were visually reviewed at 390px, including a manual correction to After Dark header contrast.
- Handbag quantity 2 produced a $570 total. Removing the item restored the empty state and $0 total. The three added bags produced separate $195, $345 and $165 cart lines with a correct combined total of $705.
- Dialog opening focuses the close button; Tab/Shift+Tab stay within the modal controls. Escape closes the modal and restores the invoking control. Keyboard focus containment was retested after adding explicit cycling.
- The phone form blocked submission without a model. An iPhone 16 Pro case plus grip and cable updated to $100 and produced the matching cart item.
- Halloween uses a single vertical article with six costume chapters, a table of contents and twelve retailer links. Saving a look updated the shortlist and survived a reload; removal worked.
- A styling disclosure opened with Enter. The skip link moved focus to the main content.
- All three main pages show their H1 and primary CTA above the fold at 320 × 568, 375 × 667, 390 × 844, 768 × 1024 and 1440 × 900, accounting for the mobile dock. TETHER leads with its headline on mobile; desktop retains the photo beside the shopping controls.
- All 12 photos now have responsive JPEG derivatives: 4,637,038 bytes in full-size web variants versus 27,973,429 bytes in PNG masters (83.4% smaller). The 640px variants total 1,198,317 bytes. Browser selection uses srcset/sizes; actual transfer depends on viewport and pixel density.

## Limits

Automated checks do not establish complete WCAG conformance. No dedicated screen-reader session, physical mobile-device test, Safari/Firefox pass or native Shopify-builder preview was performed. Reviews used Chrome and controlled iframe widths. The runtime has no external dependencies; responsive JPEG derivatives are included alongside original PNG masters. No throttled-network performance score or real-device benchmark is claimed.

The custom-code builder payloads match the final HTML/CSS/JavaScript but still require hosted image URLs, destination-theme checks and published-preview testing. They are not proprietary native-builder exports. No Shopify checkout or real product integration was tested.
