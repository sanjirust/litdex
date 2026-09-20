# Mint & Claim

Everything below happens at **[litdex.test-hub.xyz/nfts](https://litdex.test-hub.xyz/nfts)** — the standalone nft.test-hub.xyz site no longer mints, it just links here.

## Mint

1. Connect your wallet from the LitDEX header (no separate connect step inside the NFT section).
2. If you're not on Base Mainnet, tap **Switch to Base**.
3. **Whitelist stage** (if eligible): you'll see your available discounted mints — 20% off per LitShard held, 30% off per LitCore, 50% off per LitGod. Pick quantities and mint in one transaction.
4. **Public stage** (opens after whitelist): mint at $2 USDC, limit 2 per wallet.
5. On success you'll see a themed confirmation with your token ID and a direct link to trade it on OpenSea.

### Mint failures

| Cause | What it means |
| --- | --- |
| "play more games first" | Trying to promote a pass — see [Promotion](/nfts/#promotion-not-live-yet), it's disabled until gameplay ships. |
| Wallet on wrong network | Use the **Switch to Base** prompt before minting. |
| Limit reached | Public mint is capped at 2 per wallet. |
| User rejected | You declined the wallet popup. |

## Claim (LD Points → Base)

Leveling up a Champion costs **LD Points**, spent on Base. Those points are earned on the LitVM testnet and have to be claimed across to Base first:

1. Open the **My Points** tab.
2. Enter an amount (or **Max**) and hit **Claim**.
3. Your LD balance on LitVM burns first, then a themed success card confirms the points landed on Base — usually within about 30 seconds.
4. Claimed points now count toward leveling up your Champions.

You can't claim more than your current LD balance — if a claim briefly overlaps with a previous one, the amount is checked against your balance at claim time and rejected if it no longer covers it.

> The old points system (referred to internally as "V7") is frozen. Every V7 balance was already converted into LD Points at a 10:1 ratio, so LD Points is the only balance that matters going forward.

## Level up

1. Open the **Levels** tab and pick a Champion.
2. The cost to reach the next tier is shown up front (see the schedule in [Tiers & Rewards](/nfts/tiers)).
3. Confirm — the transaction spends LD Points you've already claimed onto Base and your Champion's tier updates immediately once it confirms.

## Repair

If a pass is ever marked damaged (from a lost gameplay challenge, once gameplay ships), it needs repairing before it can level up again or enter another challenge. Repair costs a flat USDC fee plus points, the same across every rarity and tier.
