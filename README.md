<p align="center"><img src="wallaby-suite.svg" width="112" alt="Wallaby Suite"></p>
<h1 align="center">Wallaby Suite</h1>
<p align="center">Tools for a more independent life.</p>

A family of independent tools for Bitcoin, connection and entertainment.

**[Explore the Wallaby Suite website](https://bluesilent9.github.io/wallaby-suite/)**

| Program | Status | Purpose |
| --- | --- | --- |
| **[Wallaby Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/)** | [V1 Build 13 Development DEB](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/dist/wallaby-dashboard_1.0.0~dev13_all.deb) available | Wallet insights, Australian CGT reporting, visual transactions and family workflows |
| **[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/)** | Mobile Stable source; desktop and server web Development; public installers pending | Jellyfin playback with built-in SSH tunnelling, cinema browsing and in-app desktop server management |
| **[Wallaby Agent](https://github.com/bluesilent9/wallaby-agent/tree/Development)** | V2 Development Build 14 available |  IPv6 services, protected local approvals, optical archive signing and BIP-322 message proofs |

## Landing page

The complete responsive website is the self-contained `index.html`. Open it locally, or view it through GitHub Pages. No build tools, external fonts, analytics or third-party scripts are required.


## Support and feedback

Please use GitHub Issues for bug reports, questions and feature requests when the relevant product repository is available. Never include private wallet material in issues.

## Publication

This repository contains the suite landing page only. Product code and downloads will live in their own repositories. The landing page is published through GitHub Pages from the main branch’s root directory.


## Wallaby Agent V2

Build 14 adds copyable prerequisite commands and preserves the real protected-worker connection error instead of mislabelling it as incompatible Dashboard data. Build 13 fixed Ubuntu 26.04 tunnel-only installation: Bitcoin Core, protected Qt desktop tools and optical writing tools are optional. DDNS-GO and Dashboard tunnels work without Bitcoin; the unavailable node switch explains its missing prerequisites and stays off.

Build 12 adds a local high-fee acknowledgement, exact Core wallet/action prompts and one full fingerprint check per distinct producing Agent. Disc Operations supports 1–99 separate discs, defaults to **one disc and the slowest supported drive/media speed**, and verifies every disc before completing the set. Each disc still holds repeated encrypted recovery copies. No Dashboard protocol update is needed.

[Wallaby Agent V2 Development Build 14](https://github.com/bluesilent9/wallaby-agent/tree/Development) provides Services, Synchronisation, Disc Operations, Sign Message and Authorise. Its three user-level IPv6 services remain DDNS-GO administration, Dashboard browser access and node reporting, with live settings and a shared authenticated SSH connection.

Disc Operations locally decrypts, verifies and loads a physical cosigner only into the protected temporary RAM node. New recovery burns stream independently checksummed encrypted copies across the medium without creating a full-capacity RAM image. Damaged copies are skipped during restoration. Sign Message uses node or disc-loaded accounts for BIP-322 single-key and multisignature proofs; no manual private-key export is required.

Authorise queues local requests and allows cancellation or incoming-policy synchronisation exclusions. Red sidebar dots show unresolved authorisations and synchronisation/history issues. Services remain available independently; Bitcoin pages require the connected node interface. Dashboard Build 13 already supports locally restored cosigner routing and per-input signature collection. Build 11 keeps the wallet-sync Denial list locally across reboots; re-enabling a wallet clears its only block. One-off declined requests stay in RAM. Dashboard Build 13 queries the Agent’s current signed status, explains disabled policies and suppresses redundant missing-wallet alerts or offers. There is no second Dashboard denial setting or restore operation.

The [Ubuntu 26.04 LTS amd64 Build 13 DEB](https://github.com/bluesilent9/wallaby-agent/blob/Development/dist/wallaby-agent_2.0.0~dev14_amd64.deb), checksums, source and validation are on Development. The protected worker’s desktop/Snap startup and actual M-Disc hardware need deployment validation. Read the Agent repository’s signing/private-key audit warning. Stable is unchanged.

## Wallaby Popcorn platform hub

[Wallaby Popcorn](https://bluesilent9.github.io/wallaby-suite/popcorn/) brings together the [Android Mobile repository](https://github.com/bluesilent9/wallaby-popcorn/tree/Stable), [desktop Development repository](https://github.com/bluesilent9/wallaby-popcorn-desktop/tree/Development) and [server web Development repository](https://github.com/bluesilent9/wallaby-popcorn-web/tree/Development), platform availability and public release files. It reads recent release assets from each repository and has a direct GitHub fallback. No public APK or DEB release assets were available when this page was prepared. No application build is required to publish these static pages.

Wallaby Popcorn Server is the overall installation. Its installer requires a compatible Jellyfin backend, matching Wallaby Popcorn Web package and FFmpeg, following Jellyfin’s package split. The new web design is server-delivered for desktop/web TV, while mobile remains unchanged. Native Android TV has a separate UI. Server/web builds and live validation are pending; no networking change is included.


## Wallaby Dashboard

Build 13 fixes stale Vault status, displays actual signature thresholds and clearer creation/funding stages, and adds transaction fee review and clearer signing retries. Existing broadcast behavior is unchanged. Agent Build 13 implements its local fee, prompt, identity and status follow-up.

[Explore Dashboard](https://bluesilent9.github.io/wallaby-suite/dashboard/) or browse its [Development source](https://github.com/bluesilent9/wallaby-dashboard/tree/Development). V1 Build 13 completes the Agent Build 9 signed initial wallet-preview relay and delivers complete missing-wallet lists and tracks received-but-history-incomplete outcomes. Changed facts or failed/denied operations require a deliberate new attempt. Public previews and requests survive restart; encrypted wallet files move directly between Agents after local authorisation. Users compare sender identity fingerprints and preview codes independently of Dashboard.

Unsigned vault composition, partial signatures and separate broadcast approvals are implemented. Vault cards show policy/balance/unlock status. Existing node-only histories, historical watch groups, C1 losses, CGT, balances and fees remain. The Dashboard DEB starts and enables its system service. See [validation](https://github.com/bluesilent9/wallaby-dashboard/blob/Development/VALIDATION.md): protocol interoperability is tested, while physical laptop-to-laptop SSH/firewall checks remain local deployment work.


The Suite includes Dashboard, Agent and Popcorn. Wallet Builder is in Dashboard; private wallet operations require local Agent approval. Dashboard no longer has Wallet Key Explorer or historical-wallet ODS uploads; it uses Core wallet evidence exclusively for blockchain history, while market/currency prices remain external.

Dashboard Build 13 works with Agent Build 14 for persistent sync choices and protected-RAM disc signing and removes older synchronization paths. It implements complete queue snapshots, signed vault/address-label metadata and recovery-required outcomes without retransferring received wallets or remotely restarting Core. Wallets has owner and Active/Extinct filters; extinct cards show activity years. Agent Build 9 supports locally approved retirement; Wallet Builder now proposes single-signature, multisig and mandatory-height vault policies for authenticated local Agent approvals.
