<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

[Explore Wallaby Suite](https://bluesilent9.github.io/wallaby-suite/)

| Program | Status | Purpose |
| --- | --- | --- |
| [Wallaby Wallet](https://bluesilent9.github.io/wallaby-suite/wallet/) | Server V1 Build 1 Development; Android companion planned | Family Bitcoin wallet management, multisig vaults, transactions, balances and tax working papers |
| [Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development) | Development | Independently verified local Bitcoin operations, signing and archive handling |
| [Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) | See platform hub | Your own media library, cinema browsing and SSH-connected playback |

## Wallaby Wallet

Wallaby Wallet Server is the Bitcoin-focused successor to Wallaby Dashboard. Its code and Development installer now live in [wallaby-wallet-server](https://github.com/bluesilent9/wallaby-wallet-server). The interface uses Wallaby Wallet branding. Product versions restart at V1 Build 1, with existing profiles and pending operations preserved by the package migration. Stable has no released Wallet Server version yet.

This first stage includes the server side of paired mobile QR verification over SSH, on mobile loopback port 56444, separate from Agent port 56443. The Android app and Agent QR screens are separate upcoming implementation stages; no mobile app or mobile spending feature is being released here. Local Agent review and approval remain mandatory.

The old [Dashboard repository](https://github.com/bluesilent9/wallaby-dashboard) is retained for history. Existing /dashboard/ website links lead to /wallet/. A future general server-management Dashboard is outside Wallaby Wallet’s Bitcoin-only scope.

## Publication

This repository contains static Suite/product landing pages. GitHub Pages publishes the main branch root. Product source, licences, installers and validation belong to their respective repositories. No external fonts, analytics or third-party scripts are required for the Wallet landing page.

Use the relevant product’s GitHub Issues for feedback. Never include private wallet material in issues.
