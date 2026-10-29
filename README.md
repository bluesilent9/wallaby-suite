<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

A family of independent tools for Bitcoin, connection and entertainment.

**[Explore the Wallaby Suite website](https://bluesilent9.github.io/wallaby-suite/)**

| Program | Status | Purpose |
| --- | --- | --- |
| **[Wallaby Signer](https://github.com/bluesilent9/wallaby-signer)** | [Stable V1 available](https://github.com/bluesilent9/wallaby-signer/releases/tag/v1.0.0) | Offline Bitcoin message signing for supported Bitcoin Core descriptor wallets |
| **[Wallaby Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/)** | [V1 Build 7 Development DEB](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/dist/wallaby-dashboard_1.0.0~dev7_all.deb) available | Wallet insights, Australian CGT reporting, visual transactions and family workflows |
| **[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/)** | Mobile Stable source; desktop and server web Development; public installers pending | Jellyfin playback with built-in SSH tunnelling, cinema browsing and in-app desktop server management |
| **[Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development)** | V2 Development Build 7 available |  IPv6 services, public/read-only RPC, unsigned vault proposals and locally verified approvals |

## Landing page

The complete responsive website is the self-contained `index.html`. Open it locally, or view it through GitHub Pages. No build tools, external fonts, analytics or third-party scripts are required.

Product feature descriptions, development plans and release status are included on the page. Planned capabilities are labelled; there are no announced release dates. The Signer button opens its public repository, with a separate link to the Stable V1 downloads and audit guidance.

## Support and feedback

Please use GitHub Issues for bug reports, questions and feature requests when the relevant product repository is available. Never include private wallet material in issues.

## Publication

This repository contains the suite landing page only. Product code and downloads will live in their own repositories. The landing page is published through GitHub Pages from the main branch’s root directory.


## Wallaby Agent V2

[Wallaby Agent Development](https://github.com/bluesilent9/wallaby-agent/tree/Development) includes Services, Vault Builder, Synchronisation and Authorise. Its three per-user IPv6 services provide DDNS-GO administration, Dashboard browser access (38951) and node reporting (56443). Build 7 retains live settings and the shared authenticated SSH connection; direct Dashboard RPC remains public/read-only.

Vault Builder exports unsigned fixed vault PSBTs for Dashboard Build 8 to compose with ordinary payments before signing. Incoming signatures are locally reviewed and returned without broadcast; broadcasting needs a separate local approval. The Agent independently checks fixed vault intent as well as the complete final transaction.

Wallet synchronisation adds a sender-node-verified, signed initial public preview and direct encrypted wallet-file transfer over IPv6 SSH. Users compare identity fingerprints and preview codes independently of Dashboard. **Dashboard Build 8 needs the additional [signed-preview relay integration](https://github.com/bluesilent9/wallaby-agent/blob/Development/DASHBOARD_PREVIEW_UPDATE.md) before wallet-file synchronisation is enabled.** The Agent provides SSH/UFW/modem diagnostics and displays the selected direct-LAN or routed path. Private wallet files and login passwords never pass through Dashboard.

The [Ubuntu 26.04 LTS amd64 Build 7 DEB](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/wallaby-agent_2.0.0~dev7_amd64.deb), [checksums](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/SHA256SUMS.txt), source and validation notes are on Development. **Read the Agent repository's signing/private-key audit warning before compiling or using its signing functions.** This remains a Development build, with live cross-laptop SSH testing against the updated Dashboard still required. Stable is unchanged.

## Wallaby Popcorn platform hub

[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) brings together the [Android Mobile repository](https://github.com/bluesilent9/wallaby-popcorn/tree/Stable), [desktop Development repository](https://github.com/bluesilent9/wallaby-popcorn-desktop/tree/Development) and [server web Development repository](https://github.com/bluesilent9/wallaby-popcorn-web/tree/Development), platform availability and public release files. It reads recent release assets from each repository and has a direct GitHub fallback. No public APK or DEB release assets were available when this page was prepared. No application build is required to publish these static pages.

Wallaby Popcorn Server is the overall installation. Its installer requires a compatible Jellyfin backend, matching Wallaby Popcorn Web package and FFmpeg, following Jellyfin’s package split. The new web design is server-delivered for desktop/web TV, while mobile remains unchanged. Native Android TV has a separate UI. Server/web builds and live validation are pending; no networking change is included.


## Wallaby Dashboard

[Explore Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/) or browse its [Development source](https://github.com/bluesilent9/wallaby-dashboard/tree/Development). V1 Build 7 replaces historical-wallet ODS uploads with labelled Core watch-only groups and adds traced no-compensation C1 capital losses. It retains node-only tracing, balance details and fee/block estimates. [Agent V2 Development Build 5](https://github.com/bluesilent9/wallaby-agent/tree/Development) is the current companion; corrected wallet routing was introduced in Build 4. Dashboard V1 Build 7 continues to use public/read-only node RPC. The new Agent approval/exchange protocol and immutable Stage 2 receiver are not implemented in Dashboard; preconfigure watch wallets locally because direct remote creation/import is blocked. Both current Development DEBs are available. The Dashboard DEB starts and enables its system service. Historical Agent Build 3 artifacts remain available, but contain the wallet RPC routing defect.


Only existing projects are listed: Signer, Dashboard, Agent and Popcorn. Vault Builder is part of Agent. Dashboard no longer has Wallet Key Explorer or historical-wallet ODS uploads; it uses Core wallet evidence exclusively for blockchain history, while market/currency prices remain external.
