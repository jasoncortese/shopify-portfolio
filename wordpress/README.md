# WordPress + Elementor portfolio

Two real Elementor Free examples by Jason Cortese, built and verified in WordPress. Fictional brands and prices; AI-generated product photography.

- [Portfolio and downloads](https://jasoncortese.github.io/shopify-portfolio/wordpress/)
- [VALE collection](https://jasoncortese.github.io/shopify-portfolio/wordpress/vale.html)
- [TETHER accessories](https://jasoncortese.github.io/shopify-portfolio/wordpress/tether.html)
- [Editing and import guide](https://jasoncortese.github.io/shopify-portfolio/wordpress/editor-guide.html)
- [Verification notes](https://jasoncortese.github.io/shopify-portfolio/wordpress/verification.html)

## What is included

`templates/vale.json` and `templates/tether.json` are portable Elementor page templates, exported from the saved WordPress documents and successfully re-imported through Elementor's native template importer. They contain 40 and 38 native widgets respectively: headings, text, images and buttons inside responsive containers. Neither page is a single HTML widget or a screenshot substitute.

`vale.html` / `tether.html` and their CSS are static copies of the WordPress-rendered pages. They preserve the layout while removing all editor/admin scripts. Public previews have no WordPress backend, checkout, forms or accounts.

`blueprint.json` recreates both editable pages in a fresh WordPress Playground sandbox. It downloads the pinned free plugins/theme and the public portfolio images. No owner credentials or database backup are included.

`support/portfolio-support.php` provides a skip link, visible keyboard focus, reduced-motion handling and a small paragraph reset. It also hides the front-end admin toolbar for clean demo previews. Install it in a demo site's `wp-content/mu-plugins/` folder if reproducing the exact presentation; review before adding it to an existing site.

## Import

1. Install Elementor Free and Hello Elementor.
2. Import a JSON file through Elementor's Saved Templates > Import Templates.
3. Create a page using Elementor Canvas and insert the template, preserving its styles.
4. Confirm Media Library imports and alt text. Local image copies are in `assets/` if needed.
5. Check all three device modes and the button links before publishing.

Verified with WordPress 7.1.2, PHP 8.3, Elementor 4.3.1 and Hello Elementor 3.5.1. No paid subscriptions are required. Third-party service availability and future version compatibility are not guaranteed.

## License and attribution

Elementor and Hello Elementor CSS: GNU GPL v3 or later; see `licenses/`. Corresponding source: https://downloads.wordpress.org/plugin/elementor.4.3.1.zip and https://downloads.wordpress.org/theme/hello-elementor.3.5.1.zip. Custom layouts and copy are portfolio work by Jason Cortese. Photography was generated for these fictional concepts. No client endorsement or conversion performance is claimed.
