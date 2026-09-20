# Contracts

## Genesis Champions (Base Mainnet)

The live NFT collection. Both contracts are UUPS proxies, independently verified on Basescan and Sourcify.

| Contract | Address |
| --- | --- |
| `LitdexNFT` (main collection) | `0xaCA7EFFcd0c4689D131C8d18C09ea1994F2A5d4d` |
| `BasePoints` (points/claim on Base) | `0xDa73c4c7fcA2E688A77b04137d56740085c2B8E7` |
| Payment token (native USDC on Base) | `0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913` |

| Field | Value |
| --- | --- |
| Chain | Base Mainnet |
| Chain ID | 8453 |
| Standard | ERC-721 |

### LD Points (LitVM)

| Contract | Address |
| --- | --- |
| `LDPoints` (UUPS proxy) | `0x26974eF1090b0cd9719B755aEc3d75a5DdD34e01` |

LD Points is the current, active points system on LitVM. It replaces the earlier "V7" points contract below, which is now frozen — every V7 balance was already converted into LD Points at a 10:1 ratio.

## LiteForge testnet (legacy)

All contracts below are on the LiteForge chain (4441), verified on the [explorer](https://liteforge.explorer.caldera.xyz). `PointsSystem` (V7) is frozen — see LD Points above for the current system.

## Core

| Contract | Address |
| --- | --- |
| `PointsSystem` | `0x526B0629C81d3314929dB8166372F792F3da3419` |
| `DailyCheckin` | `0xDdE6F0ee964A9fdF71CDB2cBDF1e5E44263d3825` |
| `LitDeXNFT` | `0xf1a2614DD63B111D04e79aDe9D89B9949c710cdF` |
| `LitDeXDeployer` | (see app - auto-routed) |

## Hub

| Contract | Address |
| --- | --- |
| `Messenger` | `0x9624FBBD6931b9D75961994E13604c1DC2c56225` |
| `Marketplace` | `0x191678312D1d95eF2A05DfCEEa5401b6c654385E` |
| `Posts` | (see Hub backend) |
| `Registry` | (see Hub backend) |

## Routers

| Router | Address | Use |
| --- | --- | --- |
| LiteSwap V2 (LitDEX) | (see app) | Native AMM |
| OmniFun | (see app) | Partner AMM |

## Read endpoints (cheat sheet)

```javascript
// Points balance
PointsSystem.getPoints(wallet) → (total, deployDaily, msgDaily)

// NFT inventory
LitDeXNFT.getUserNFTs(wallet) → [{ nftType, lastClaimDay }]

// Pending NFT yield
LitDeXNFT.getPendingRewards(wallet) → (zkltc, usdc, ldex)

// Daily check-in
DailyCheckin.hasCheckedInToday(wallet) → bool
DailyCheckin.streakOf(wallet) → uint
```

## API endpoints

| Path | Returns |
| --- | --- |
| `https://api.test-hub.xyz/points/:wallet` | `{ total, daily }` |
| `https://api.test-hub.xyz/faucet/enabled` | `{ enabled }` |
| `https://api.test-hub.xyz/faucet/eligibility/:wallet` | `{ eligible, nft, domain }` |
| `https://api.test-hub.xyz/msg/count/:wallet` | `{ msgsToday }` |
| `https://hub.test-hub.xyz/hub/names/owned/:wallet` | `{ names: [...] }` |
| `https://game.test-hub.xyz/simple/leaderboard` | weekly leaderboard rows |
| `https://game.test-hub.xyz/simple/pending/:wallet` | `{ gamesPending, totalScore, pointsAvailable }` |

## Network

| Field | Value |
| --- | --- |
| Chain | LiteForge |
| Chain ID | 4441 (`0x115D`) |
| RPC | `https://liteforge.rpc.caldera.xyz/http` |
| Explorer | `https://liteforge.explorer.caldera.xyz` |
| Native | zkLTC |

## Source

The frontend's `src/lib/litdex-core-logic.ts` is a single-file export of all addresses, ABIs, and helpers. Read it for the canonical reference.

> All contracts are testnet. Mainnet addresses will be published when LitDEX migrates from LiteForge testnet to its production chain.
