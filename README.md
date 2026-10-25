<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

A family of independent tools for Bitcoin, learning, connection and entertainment.

**[Explore the Wallaby Suite website](https://bluesilent9.github.io/wallaby-suite/)**

| Program | Status | Purpose |
| --- | --- | --- |
| **[Wallaby Signer](https://github.com/bluesilent9/wallaby-signer)** | [Stable V1 available](https://github.com/bluesilent9/wallaby-signer/releases/tag/v1.0.0) | Offline Bitcoin message signing for supported Bitcoin Core descriptor wallets |
| **Wallaby Dashboard** | Coming soon | Wallet insights, Australian CGT reporting, visual transactions and family workflows |
| **Wallaby Vault** | Coming soon | Bitcoin protection for your family’s future, exclusively on a cold-storage laptop |
| **[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/)** | Mobile Stable source; desktop Development; public installers pending | Jellyfin playback with built-in SSH tunnelling, cinema browsing and in-app desktop server management |
| **Wallaby School** | Early concept; much further from release | Help families build an individual homeschooling education program |

## Landing page

The complete responsive website is the self-contained `index.html`. Open it locally, or view it through GitHub Pages. No build tools, external fonts, analytics or third-party scripts are required.

Product feature descriptions, development plans and release status are included on the page. Planned capabilities are labelled; there are no announced release dates. The Signer button opens its public repository, with a separate link to the Stable V1 downloads and audit guidance.

## Support and feedback

Please use GitHub Issues for bug reports, questions and feature requests when the relevant product repository is available. Never include private wallet material in issues.

## Publication

This repository contains the suite landing page only. Product code and downloads will live in their own repositories. The landing page is published through GitHub Pages from the main branch’s root directory.


## Wallaby Agent V1

[Wallaby Agent Development](https://github.com/bluesilent9/wallaby-agent/tree/Development) includes source and an Ubuntu 26.04 LTS DEB installer. It provides per-user IPv6 SSH tunnels for Jellyfin, DDNS-GO and the Bitcoin Core connection to Wallaby Dashboard. All services start off; enabled services reconnect and start at user login. Stable has no application release yet.

## Wallaby Popcorn platform hub

[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) brings together the [Android Mobile repository](https://github.com/bluesilent9/wallaby-popcorn/tree/Stable), [desktop Development repository](https://github.com/bluesilent9/wallaby-popcorn-desktop/tree/Development), platform availability and public release files. It reads recent release assets from each repository and has a direct GitHub fallback. No public APK or DEB release assets were available when this page was prepared. No application build is required to publish these static pages.
