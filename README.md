<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

[Explore Wallaby Suite](https://bluesilent9.github.io/wallaby-suite/)

| Program | Status | Purpose |
| --- | --- | --- |
| [Wallaby Wallet](https://bluesilent9.github.io/wallaby-suite/wallet/) | Server V1 Build 10 Development; Android companion planned | Family Bitcoin wallet management, multisig vaults, transactions, balances and tax working papers |
| [Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development) | Development | Independently verified local Bitcoin operations, signing and archive handling |
| [Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) | See platform hub | Your own media library, cinema browsing and SSH-connected playback |

## Wallaby Wallet

<img src="wallet/logo.svg" width="96" alt="Wallaby Wallet — Wallaby and Bitcoin">

Wallaby Wallet Server is the Bitcoin-focused successor to Wallaby Dashboard. Its code and Development installer now live in [wallaby-wallet-server](https://github.com/bluesilent9/wallaby-wallet-server). The interface uses Wallaby Wallet branding. Product versions restarted at V1 Build 1, with existing profiles and pending operations preserved by the package migration. Stable has no released Wallet Server version yet.

Server Build 2 includes OPAQUE account passwords, role-bound encrypted peer relaying and BTC-only mobile balance reads, using mobile loopback port 56444 separately from Agent port 56443. Existing profiles and builder progress are retained. The Android app and Agent QR screens are separate upcoming implementation stages; no mobile app or mobile spending feature is being released here. Local Agent review and approval remain mandatory.

The former Dashboard repository is retired. Current Bitcoin software and downloads are maintained in [Wallaby Wallet Server](https://github.com/bluesilent9/wallaby-wallet-server). Existing /dashboard/ website links lead to /wallet/. A future general server-management Dashboard is outside Wallaby Wallet’s Bitcoin-only scope.

## Publication

This repository contains static Suite/product landing pages. GitHub Pages publishes the main branch root. Product source, licences, installers and validation belong to their respective repositories. No external fonts, analytics or third-party scripts are required for the Wallet landing page.

Use the relevant product’s GitHub Issues for feedback. Never include private wallet material in issues.
