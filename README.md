# Spika legal pages

Legal HTML lives in the **public** repo [`MoeAmara/spika-legal`](https://github.com/MoeAmara/spika-legal)
so Google Play and users can open the links without access to the private Spika repo.

## Live URLs

Base: `https://moeamara.github.io/spika-legal/`

| Document | English | Arabic |
|----------|---------|--------|
| Hub | [index.html](https://moeamara.github.io/spika-legal/) | [index-ar.html](https://moeamara.github.io/spika-legal/index-ar.html) |
| Privacy | [privacy.html](https://moeamara.github.io/spika-legal/privacy.html) | [privacy-ar.html](https://moeamara.github.io/spika-legal/privacy-ar.html) |
| Terms | [terms.html](https://moeamara.github.io/spika-legal/terms.html) | [terms-ar.html](https://moeamara.github.io/spika-legal/terms-ar.html) |

**Google Play:** `https://moeamara.github.io/spika-legal/privacy.html`

**Operator:** Individual developer  
**Contact:** spika.support@gmail.com

## App wiring

In-app links: `lib/core/constants/legal_config.dart` → `pagesBaseUrl`.

## Publish to GitHub Pages (manual)

When you update legal HTML in this folder, sync to the public repo:

1. Clone or open [`MoeAmara/spika-legal`](https://github.com/MoeAmara/spika-legal).
2. Copy these files from `docs/` into the repo root (same paths):
   - `privacy.html`, `privacy-ar.html`, `terms.html`, `terms-ar.html`
   - `styles.css`, `legal.js`
   - `index.html`, `index-ar.html` (if hub pages changed)
   - `brand/` (logos/wordmarks)
3. Commit and push to `main` (GitHub Pages source branch).
4. Wait for Pages deploy (~1–2 minutes).
5. Verify in browser:
   - https://moeamara.github.io/spika-legal/privacy.html
   - https://moeamara.github.io/spika-legal/privacy-ar.html
   - https://moeamara.github.io/spika-legal/terms.html
   - https://moeamara.github.io/spika-legal/terms-ar.html
6. In the app: Settings → About → Privacy / Terms — confirm links open live content.

**Pre-launch checklist (1.0.0):** No Huawei AppGallery in Play-context sections; Google Play only for billing; Drive backup opt-in disclosed; no phone number; Firebase Analytics + Crashlytics automatic (no in-app toggle).

