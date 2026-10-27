<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

A family of independent tools for Bitcoin, learning, connection and entertainment.

**[Explore the Wallaby Suite website](https://bluesilent9.github.io/wallaby-suite/)**

| Program | Status | Purpose |
| --- | --- | --- |
| **[Wallaby Signer](https://github.com/bluesilent9/wallaby-signer)** | [Stable V1 available](https://github.com/bluesilent9/wallaby-signer/releases/tag/v1.0.0) | Offline Bitcoin message signing for supported Bitcoin Core descriptor wallets |
| **[Wallaby Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/)** | [V1 Build 1 Development source](https://github.com/bluesilent9/wallaby-dashboard/tree/Development); DEB build pending | Wallet insights, Australian CGT reporting, visual transactions and family workflows |
| **Wallaby Vault** | Coming soon | Bitcoin protection for your family’s future, exclusively on a cold-storage laptop |
| **[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/)** | Mobile Stable source; desktop and server web Development; public installers pending | Jellyfin playback with built-in SSH tunnelling, cinema browsing and in-app desktop server management |
| **[Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development)** | V2 Development build 3 installer available | Per-user IPv6 SSH access to DDNS-GO, Dashboard browser access and the Bitcoin Core node interface |
| **Wallaby School** | Early concept; much further from release | Help families build an individual homeschooling education program |

## Landing page

The complete responsive website is the self-contained `index.html`. Open it locally, or view it through GitHub Pages. No build tools, external fonts, analytics or third-party scripts are required.

Product feature descriptions, development plans and release status are included on the page. Planned capabilities are labelled; there are no announced release dates. The Signer button opens its public repository, with a separate link to the Stable V1 downloads and audit guidance.

## Support and feedback

Please use GitHub Issues for bug reports, questions and feature requests when the relevant product repository is available. Never include private wallet material in issues.

## Publication

This repository contains the suite landing page only. Product code and downloads will live in their own repositories. The landing page is published through GitHub Pages from the main branch’s root directory.


## Wallaby Agent V2

[Wallaby Agent Development](https://github.com/bluesilent9/wallaby-agent/tree/Development) provides a local HTML5 page for **DDNS-GO Administration**, **Wallaby Dashboard browser access** (port 38951), and the separate **Bitcoin Core Node Dashboard Interface** (port 56443). Each per-user IPv6 SSH service can be enabled independently and starts at login when on. Dashboard browser access needs no Bitcoin Core installation.

The build 3 update adds Dashboard access OFF by default while preserving existing DDNS-GO/node settings. It also includes the staged connection diagnostics and Save settings reminder. The [Ubuntu 26.04 LTS build 3 DEB](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/wallaby-agent_2.0.0~dev3_amd64.deb) and [checksums](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/SHA256SUMS.txt) are available. All 42 automated tests and package inspection pass; installation and live startup testing remain pending. Older installers do not contain these additions. Stable has no released Agent application.

## Wallaby Popcorn platform hub

[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) brings together the [Android Mobile repository](https://github.com/bluesilent9/wallaby-popcorn/tree/Stable), [desktop Development repository](https://github.com/bluesilent9/wallaby-popcorn-desktop/tree/Development) and [server web Development repository](https://github.com/bluesilent9/wallaby-popcorn-web/tree/Development), platform availability and public release files. It reads recent release assets from each repository and has a direct GitHub fallback. No public APK or DEB release assets were available when this page was prepared. No application build is required to publish these static pages.

Wallaby Popcorn Server is the overall installation. Its installer requires a compatible Jellyfin backend, matching Wallaby Popcorn Web package and FFmpeg, following Jellyfin’s package split. The new web design is server-delivered for desktop/web TV, while mobile remains unchanged. Native Android TV has a separate UI. Server/web builds and live validation are pending; no networking change is included.


## Wallaby Dashboard

[Explore Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/) or browse its [Development source](https://github.com/bluesilent9/wallaby-dashboard/tree/Development). V1 Build 1 fixes node wallet loading together with [Agent V2 Development Build 4](https://github.com/bluesilent9/wallaby-agent/tree/Development). Source tests pass; both new installers await their separate build checkpoints. Dashboard will be supplied as a DEB that starts and enables its system service. Historical Agent Build 3 artifacts remain available, but contain the wallet RPC routing defect.
