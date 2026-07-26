# Spika legal pages (GitHub Pages)

Public Terms of Service and Privacy Policy for store listings and in-app links.

## Live URLs (after Pages is enabled)

Base: `https://moeamara.github.io/Spika/`

| Document | English | Arabic |
|----------|---------|--------|
| Hub | [index.html](https://moeamara.github.io/Spika/) | [index-ar.html](https://moeamara.github.io/Spika/index-ar.html) |
| Privacy | [privacy.html](https://moeamara.github.io/Spika/privacy.html) | [privacy-ar.html](https://moeamara.github.io/Spika/privacy-ar.html) |
| Terms | [terms.html](https://moeamara.github.io/Spika/terms.html) | [terms-ar.html](https://moeamara.github.io/Spika/terms-ar.html) |

**Google Play:** use the English Privacy URL:
`https://moeamara.github.io/Spika/privacy.html`

## Enable GitHub Pages

1. Push this `docs/` folder to the `main` branch on `MoeAmara/Spika`.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**.
4. Branch: `main` / folder: `/docs`.
5. Save, wait a minute, open the hub URL above.

## App wiring

In-app links are defined in `lib/core/constants/legal_config.dart`.
Update `pagesBaseUrl` only if the Pages URL changes.

## Before Play submission

- [ ] Pages URL opens without login
- [ ] Replace GitHub Issues with a real support email in these HTML files when you have one
- [ ] Data safety form matches this Privacy Policy
- [ ] Re-check when subscriptions or App Store launch
