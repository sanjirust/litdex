# How Points Work

Points are LitDEX's universal credit - they unlock NFTs, leaderboard prizes, and (eventually) future utility.

## Earning

Every meaningful interaction earns points:

| Action | Points | Daily cap |
| --- | --- | --- |
| Daily check-in | +10 | 1 / day |
| Token deploy | +5 | 100 pts/day (~20 deploys) |
| On-chain message (Messenger) | +2 | 20 pts/day (10 msgs) |
| `.lit` name register (1Y) | +10 | one-shot |
| `.lit` name register (2Y) | +20 | one-shot |
| `.lit` name register (5Y) | +35 | one-shot |
| `.lit` name register (10Y) | +60 | one-shot |
| `.lit` name register (Forever) | +100 | one-shot |
| Faucet claim | +10 | 1 / day |
| Math Slash game | up to +10 (score-based) | 5 games/day |
| Quest follow on X | +50 to +100 (per quest) | one-shot |
| Quest like + RT | +10 (per post) | one-shot |
| Telegram join | +50 (per channel) | one-shot |

## Spending

Points convert to:

- **Leveling up your Genesis Champions NFT** on Base — see [NFTs → Tiers](/nfts/tiers) for the exact cost per level (500 LD for the first level, +200 per level after that). This is done through **LD Points**, the current points system — see the note below.
- **zkLTC** (when game-side conversion is open) at a fixed rate.
- **Leaderboard prizes** - top 20 users get a weekly zkLTC bonus payout.

> **LD Points vs. the points described below.** This page's earning table describes the original "V7" points contract. V7 earning is switched off — it's frozen, not removed — and every V7 balance was already converted into **LD Points** at a 10:1 ratio. LD Points is what you actually spend to level up an NFT today, and it carries its own daily cap (25 LD/day, with multipliers for higher-tier NFT holders). The exact per-action LD earning rates aren't finalized in this doc yet; check the in-app Points dashboard for your current LD total and today's cap.

## Where points live

Points are tracked on the `PointsSystem` contract on LiteForge. The dashboard reads `getPoints(address)` which returns:

- `total` - lifetime points earned.
- `deployDaily` - points earned from deploys today.
- `msgDaily` - points earned from messages today (in pts, not msg count - bumps by 2 per msg).

The daily counters reset at **00:00 IST** every night.

## Daily resets

- All `*Daily` counters wipe at midnight IST.
- The reset is on-chain - the contract checks `block.timestamp / 86400` against the last reset day.
- The dashboard shows a **"Reset protocol active in HH:MM:SS"** countdown so you know exactly when caps clear.

## Why daily caps?

Caps prevent spam - a bot can't farm 10,000 points in an hour by spam-deploying tokens. They also keep the activity diversified - you earn the most by doing different things rather than maxing one path.

> Want maximum points? Hit every cap daily: check-in (+10), 20 deploys (+100), 10 messages (+20), 5 math-slash games (+10), one faucet (+10) = 150 pts/day floor. Add NFT daily yields and quest bursts on top.
