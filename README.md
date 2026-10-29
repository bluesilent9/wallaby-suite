<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

A family of independent tools for Bitcoin, connection and entertainment.

**[Explore the Wallaby Suite website](https://bluesilent9.github.io/wallaby-suite/)**

| Program | Status | Purpose |
| --- | --- | --- |
| **[Wallaby Signer](https://github.com/bluesilent9/wallaby-signer)** | [Stable V1 available](https://github.com/bluesilent9/wallaby-signer/releases/tag/v1.0.0) | Offline Bitcoin message signing for supported Bitcoin Core descriptor wallets |
| **[Wallaby Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/)** | [V1 Build 10 Development DEB](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/dist/wallaby-dashboard_1.0.0~dev10_all.deb) available | Wallet insights, Australian CGT reporting, visual transactions and family workflows |
| **[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/)** | Mobile Stable source; desktop and server web Development; public installers pending | Jellyfin playback with built-in SSH tunnelling, cinema browsing and in-app desktop server management |
| **[Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development)** | V2 Development Build 8 available |  IPv6 services, public/read-only RPC, unsigned vault proposals and locally verified approvals |

## Landing page

The complete responsive website is the self-contained `index.html`. Open it locally, or view it through GitHub Pages. No build tools, external fonts, analytics or third-party scripts are required.

Product feature descriptions, development plans and release status are included on the page. Planned capabilities are labelled; there are no announced release dates. The Signer button opens its public repository, with a separate link to the Stable V1 downloads and audit guidance.

## Support and feedback

Please use GitHub Issues for bug reports, questions and feature requests when the relevant product repository is available. Never include private wallet material in issues.

## Publication

This repository contains the suite landing page only. Product code and downloads will live in their own repositories. The landing page is published through GitHub Pages from the main branch’s root directory.


## Wallaby Agent V2

[Wallaby Agent Development](https://github.com/bluesilent9/wallaby-agent/tree/Development) includes Services, Vault Builder, Synchronisation and Authorise. Its three per-user IPv6 services provide DDNS-GO administration, Dashboard browser access (38951) and node reporting (56443). Build 8 retains live settings and the shared authenticated SSH connection; direct Dashboard RPC remains public/read-only.

Vault Builder exports unsigned fixed vault PSBTs for Dashboard Build 8 to compose with ordinary payments before signing. Incoming signatures are locally reviewed and returned without broadcast; broadcasting needs a separate local approval. The Agent independently checks fixed vault intent as well as the complete final transaction.

Wallet synchronisation adds a sender-node-verified, signed initial public preview and direct encrypted wallet-file transfer over IPv6 SSH. Users compare identity fingerprints and preview codes independently of Dashboard. **Dashboard Build 10 now implements the [signed-preview relay](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/docs/AGENT_PROTOCOL.md), including frozen request bindings, persistent authoritative lists, signed metadata previews and local history recovery. Use Dashboard Build 10 with Agent Build 8.** The Agent provides SSH/UFW/modem diagnostics and displays the selected direct-LAN or routed path. Private wallet files and login passwords never pass through Dashboard.

The [Ubuntu 26.04 LTS amd64 Build 8 DEB](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/wallaby-agent_2.0.0~dev8_amd64.deb), [checksums](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/SHA256SUMS.txt), source and validation notes are on Development. **Read the Agent repository's signing/private-key audit warning before compiling or using its signing functions.** This remains a Development build, with live cross-laptop SSH testing against the updated Dashboard still required. Stable is unchanged.

## Wallaby Popcorn platform hub

[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) brings together the [Android Mobile repository](https://github.com/bluesilent9/wallaby-popcorn/tree/Stable), [desktop Development repository](https://github.com/bluesilent9/wallaby-popcorn-desktop/tree/Development) and [server web Development repository](https://github.com/bluesilent9/wallaby-popcorn-web/tree/Development), platform availability and public release files. It reads recent release assets from each repository and has a direct GitHub fallback. No public APK or DEB release assets were available when this page was prepared. No application build is required to publish these static pages.

Wallaby Popcorn Server is the overall installation. Its installer requires a compatible Jellyfin backend, matching Wallaby Popcorn Web package and FFmpeg, following Jellyfin’s package split. The new web design is server-delivered for desktop/web TV, while mobile remains unchanged. Native Android TV has a separate UI. Server/web builds and live validation are pending; no networking change is included.


## Wallaby Dashboard

[Explore Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/) or browse its [Development source](https://github.com/bluesilent9/wallaby-dashboard/tree/Development). V1 Build 10 completes the Agent Build 8 signed initial wallet-preview relay and delivers complete missing-wallet lists and tracks received-but-history-incomplete outcomes. Changed facts or failed/denied operations require a deliberate new attempt. Public previews and requests survive restart; encrypted wallet files move directly between Agents after local authorisation. Users compare sender identity fingerprints and preview codes independently of Dashboard.

Unsigned vault composition, partial signatures and separate broadcast approvals are implemented. Vault cards show policy/balance/unlock status. Existing node-only histories, historical watch groups, C1 losses, CGT, balances and fees remain. The Dashboard DEB starts and enables its system service. See [validation](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/VALIDATION.md): protocol interoperability is tested, while physical laptop-to-laptop SSH/firewall checks remain local deployment work.


Only existing projects are listed: Signer, Dashboard, Agent and Popcorn. Vault Builder is part of Agent. Dashboard no longer has Wallet Key Explorer or historical-wallet ODS uploads; it uses Core wallet evidence exclusively for blockchain history, while market/currency prices remain external.

Dashboard Build 10 requires Agent Build 8 or newer and removes older synchronization paths. It implements complete queue snapshots, signed vault/address-label metadata and recovery-required outcomes without retransferring received wallets or remotely restarting Core. Wallets has owner and Active/Extinct filters; extinct cards show activity years. Retirement is prepared for a future Agent capability; Wallet Builder is not implemented.
