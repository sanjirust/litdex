/**
 * In-app documentation: pulls the same markdown files that used to only
 * live on the separate docs.litdex.test-hub.xyz (VitePress) deployment,
 * so /docs on the main site is the single source going forward.
 *
 * Vite's `?raw` suffix imports each file's contents as a plain string at
 * build time — no runtime fetch, no separate deploy.
 */

// Introduction
import indexMd from "../../docs/index.md?raw";
import gettingStartedIndex from "../../docs/getting-started/index.md?raw";
import gettingStartedWallet from "../../docs/getting-started/wallet.md?raw";
import gettingStartedFaucet from "../../docs/getting-started/faucet.md?raw";
import gettingStartedLitName from "../../docs/getting-started/lit-name.md?raw";

// Trading
import swapIndex from "../../docs/swap/index.md?raw";
import swapBridge from "../../docs/swap/bridge.md?raw";

// Liquidity
import poolIndex from "../../docs/pool/index.md?raw";
import poolAdd from "../../docs/pool/add.md?raw";
import poolRemove from "../../docs/pool/remove.md?raw";

// Deploy
import deployIndex from "../../docs/deploy/index.md?raw";
import deployToken from "../../docs/deploy/token.md?raw";
import deployNft from "../../docs/deploy/nft.md?raw";
import deployStaking from "../../docs/deploy/staking.md?raw";
import deployVesting from "../../docs/deploy/vesting.md?raw";

// Hub
import hubIndex from "../../docs/hub/index.md?raw";
import hubPrivate from "../../docs/hub/private.md?raw";
import hubGlobal from "../../docs/hub/global.md?raw";
import hubMarket from "../../docs/hub/market.md?raw";
import hubLitDomain from "../../docs/hub/lit-domain.md?raw";
import hubProfile from "../../docs/hub/profile.md?raw";

// Points System
import pointsIndex from "../../docs/points/index.md?raw";
import pointsCheckIn from "../../docs/points/check-in.md?raw";
import pointsCaps from "../../docs/points/caps.md?raw";
import pointsLeaderboard from "../../docs/points/leaderboard.md?raw";

// NFTs
import nftsIndex from "../../docs/nfts/index.md?raw";
import nftsTiers from "../../docs/nfts/tiers.md?raw";
import nftsMintClaim from "../../docs/nfts/mint-claim.md?raw";

// Messenger
import messengerIndex from "../../docs/messenger/index.md?raw";
import messengerOnChain from "../../docs/messenger/on-chain.md?raw";

// Socials
import socialsIndex from "../../docs/socials/index.md?raw";

// Games
import gamesIndex from "../../docs/games/index.md?raw";
import gamesMathSlash from "../../docs/games/math-slash.md?raw";
import gamesCasino from "../../docs/games/casino.md?raw";
import gamesProvablyFair from "../../docs/games/provably-fair.md?raw";

// Faucet
import faucetIndex from "../../docs/faucet/index.md?raw";

// Reference
import faq from "../../docs/faq.md?raw";
import troubleshooting from "../../docs/troubleshooting.md?raw";
import referenceContracts from "../../docs/reference/contracts.md?raw";

export type DocEntry = { slug: string; title: string; content: string };
export type DocSection = { title: string; items: DocEntry[] };

export const DOC_SECTIONS: DocSection[] = [
  {
    title: "Introduction",
    items: [
      { slug: "", title: "What is LitDEX", content: indexMd },
      { slug: "getting-started", title: "Getting Started", content: gettingStartedIndex },
      { slug: "getting-started/wallet", title: "Connect a Wallet", content: gettingStartedWallet },
      { slug: "getting-started/faucet", title: "Claim Faucet", content: gettingStartedFaucet },
      { slug: "getting-started/lit-name", title: "Register a .lit Name", content: gettingStartedLitName },
    ],
  },
  {
    title: "Trading",
    items: [
      { slug: "swap", title: "Swap", content: swapIndex },
      { slug: "swap/bridge", title: "Cross-Chain Bridge", content: swapBridge },
    ],
  },
  {
    title: "Liquidity",
    items: [
      { slug: "pool", title: "Pool Overview", content: poolIndex },
      { slug: "pool/add", title: "Add Liquidity", content: poolAdd },
      { slug: "pool/remove", title: "Remove Liquidity", content: poolRemove },
    ],
  },
  {
    title: "Deploy",
    items: [
      { slug: "deploy", title: "Deploy Overview", content: deployIndex },
      { slug: "deploy/token", title: "Deploy a Token", content: deployToken },
      { slug: "deploy/nft", title: "Deploy an NFT Collection", content: deployNft },
      { slug: "deploy/staking", title: "Deploy Staking", content: deployStaking },
      { slug: "deploy/vesting", title: "Deploy Vesting", content: deployVesting },
    ],
  },
  {
    title: "Hub",
    items: [
      { slug: "hub", title: "Hub Overview", content: hubIndex },
      { slug: "hub/private", title: "Private Chat", content: hubPrivate },
      { slug: "hub/global", title: "Global Feed", content: hubGlobal },
      { slug: "hub/market", title: ".lit Market", content: hubMarket },
      { slug: "hub/lit-domain", title: ".lit Domain Registration", content: hubLitDomain },
      { slug: "hub/profile", title: "Profile", content: hubProfile },
    ],
  },
  {
    title: "Points System",
    items: [
      { slug: "points", title: "How Points Work", content: pointsIndex },
      { slug: "points/check-in", title: "Daily Check-in", content: pointsCheckIn },
      { slug: "points/caps", title: "Daily Caps", content: pointsCaps },
      { slug: "points/leaderboard", title: "Leaderboard", content: pointsLeaderboard },
    ],
  },
  {
    title: "NFTs — Genesis Champions",
    items: [
      { slug: "nfts", title: "NFT Overview", content: nftsIndex },
      { slug: "nfts/tiers", title: "Tiers & Rewards", content: nftsTiers },
      { slug: "nfts/mint-claim", title: "Mint & Claim", content: nftsMintClaim },
    ],
  },
  {
    title: "Messenger",
    items: [
      { slug: "messenger", title: "Messenger Overview", content: messengerIndex },
      { slug: "messenger/on-chain", title: "On-chain Public + Direct", content: messengerOnChain },
    ],
  },
  {
    title: "Socials & Quests",
    items: [{ slug: "socials", title: "Socials Overview", content: socialsIndex }],
  },
  {
    title: "Games",
    items: [
      { slug: "games", title: "Games Overview", content: gamesIndex },
      { slug: "games/math-slash", title: "Math Slash", content: gamesMathSlash },
      { slug: "games/casino", title: "Casino Games", content: gamesCasino },
      { slug: "games/provably-fair", title: "Provably Fair", content: gamesProvablyFair },
    ],
  },
  {
    title: "Faucet",
    items: [{ slug: "faucet", title: "Faucet Overview", content: faucetIndex }],
  },
  {
    title: "Reference",
    items: [
      { slug: "faq", title: "FAQ", content: faq },
      { slug: "troubleshooting", title: "Troubleshooting", content: troubleshooting },
      { slug: "reference/contracts", title: "Contracts", content: referenceContracts },
    ],
  },
];

export const DOC_INDEX: Record<string, DocEntry> = Object.fromEntries(
  DOC_SECTIONS.flatMap((s) => s.items).map((d) => [d.slug, d]),
);

export const DEFAULT_DOC_SLUG = "";
