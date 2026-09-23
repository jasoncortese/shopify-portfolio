# Verification — September 23, 2026

## Completed checks

- All four pages (collection index plus three concepts) fit at 320, 390, 768 and 1440 CSS pixels without horizontal document overflow. All images loaded.
- Desktop and 390px mobile layouts visually reviewed in Chrome on macOS. Mobile CTA links reached the product, kit and costume sections.
- axe-core 4.13.0 checked the four pages at 390px and 1440px against WCAG 2 A/AA, 2.1 AA, 2.2 AA and best-practice tags: **zero reported violations across eight page/width audits**.
- The Halloween hearts and rotated caption required manual contrast review. Heart foreground/background contrast is 14.81:1 in either state; the caption colors are 13.63:1. The handbag caption was changed to an opaque background and passes automated contrast checking.
- Handbag quantity 2 produced a $570 total. Removing the item restored the empty state and $0 total.
- Dialog opening focuses the close button; Tab/Shift+Tab stay within the modal controls. Escape closes the modal and restores the invoking control. Keyboard focus containment was retested after adding explicit cycling.
- The phone form blocked submission without a model. An iPhone 16 Pro case plus grip and cable updated to $100 and produced the matching cart item.
- Costume filters returned 4 easy, 4 statement and 3 together ideas. Saving a look updated the shortlist and survived a reload; removal worked.
- A styling disclosure opened with Enter. The skip link moved focus to the main content.
- Local links, fragment targets and unique IDs checked on all four pages.

## Limits

Automated checks do not establish complete WCAG conformance. No dedicated screen-reader session, physical mobile-device test, Safari/Firefox pass or native Shopify-builder preview was performed. Reviews used Chrome and controlled iframe widths. The runtime has no external dependencies; original PNG assets are included, so optimized responsive image derivatives remain a sensible production step.

The custom-code builder payloads match the final HTML/CSS/JavaScript but still require hosted image URLs, destination-theme checks and published-preview testing. They are not proprietary native-builder exports. No Shopify checkout or real product integration was tested.
