import type { PageID } from "@/App";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

type Props = { setPage: (p: PageID) => void };

const FAQS: [string, string][] = [
  ["What is LitDEX Genesis Champions?", "A collection of 1,000 dynamic, evolving NFT passes on Base Mainnet. Each pass starts as Common and can be leveled up, and eventually promoted through Rare, Epic, and Legend, based on on-chain activity."],
  ["What blockchain is this on?", "Base Mainnet. All contracts are deployed on Base and verified on Basescan and Sourcify."],
  ["How do I mint a pass?", "Connect your wallet at litdex.test-hub.xyz/nfts. If you're whitelist-eligible, you'll see your discounted mint options first. Otherwise, mint in the public sale for $2 USDC once it opens, limited to 2 per wallet."],
  ["Who is eligible for the whitelist?", "Holders of the original LitVM testnet NFTs: LitShard (Common), LitCore (Rare), and LitGod (Epic). Each testnet NFT held grants one discounted mint: 20% off for LitShard, 30% off for LitCore, and 50% off for LitGod. Discounts apply per NFT held."],
  ["What's the difference between whitelist and public mint?", "Whitelist mint opens first and is exclusively for eligible LitVM holders at a discount. Public mint opens 48 hours later at the full $2 USDC price and is open to everyone, limited to 2 mints per wallet."],
  ["What are the rarities and tiers?", "Four rarities: Common (Tiers 1-9), Rare (Tiers 1-5), Epic (Tiers 1-3), and Legend (a single max tier). Every pass starts as Common Tier 1."],
  ["How does leveling up work?", "Leveling up spends LD Points, LitDEX's current points system. You earn LD Points through activity on the LitVM testnet and claim them onto Base. The cost starts at 500 LD for Tier 1→2 and increases by 200 LD each level after that (700, 900, 1100...1900 up to Tier 9)."],
  ["How does promotion between rarities work?", "Promotion — moving from Common to Rare, Rare to Epic, or Epic to Legend — requires reaching your rarity's max tier and winning on-chain gameplay challenges. Gameplay hasn't shipped yet, so promotion is currently disabled on-chain; Common Tier 9 is the ceiling for now."],
  ["What happens if I lose a game challenge?", "Your pass becomes damaged and must be repaired before it can be leveled up or used in further challenges. Repair costs a flat USDC fee plus points, the same at every rarity and tier."],
  ["What do I get for holding a higher-tier pass?", "Rare and above receive priority access to partnerships and community giveaways. Epic and above receive a future $LITDEX airdrop allocation plus a 10% weekly share of protocol repair revenue; Legend holders receive a larger airdrop share and split a 20% weekly share among a maximum of 50 holders."],
  ["Is the smart contract safe and verified?", "Yes. Both core contracts, LitdexNFT and BasePoints, are open-source and independently verified on Basescan and Sourcify, so anyone can audit the exact rules governing the collection."],
  ["What is the total supply?", "1,000 passes total. 900 enter through the Common tier — 800 for the community and 100 minted to the team. The remaining 100 team passes were minted directly at Rare, Epic, and Legend for collaborations and promotional purposes."],
  ["Where can I see or trade my pass after minting?", "On OpenSea, under the LitDEX collection. Every pass's tier, rarity, and full history are visible on-chain."],
  ["Where can I read more details?", "The full whitepaper is linked in the site footer, covering the complete supply model, contract addresses, and mechanics."],
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-[8px] border border-brand-border bg-brand-surface-2 px-5 shadow-sm transition-shadow md:px-6">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-base font-bold text-brand-text-primary md:text-lg"
      >
        <span className="min-w-0 pr-4">{question}</span>
        <ChevronDown
          className={`size-5 shrink-0 text-brand-text-muted transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="max-w-3xl pb-5 text-sm leading-7 text-brand-text-muted md:text-base">{answer}</p>
      )}
    </div>
  );
}

export default function FaqPage({ setPage }: Props) {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto w-full max-w-5xl rounded-[8px] border border-brand-border bg-brand-surface p-6 shadow-2xl sm:p-8 md:p-14">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-control">
          Help center
        </p>
        <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase tracking-tight text-brand-text-primary md:text-6xl">
          FAQ
        </h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brand-control" />

        <div className="mt-10 space-y-3">
          {FAQS.map(([question, answer]) => (
            <FaqItem key={question} question={question} answer={answer} />
          ))}
        </div>

        <button
          onClick={() => setPage("nfts")}
          className="mt-10 w-full sm:w-auto min-h-12 px-8 py-3 rounded-lg bg-brand-text-primary text-brand-bg font-mono font-bold text-sm cursor-pointer touch-manipulation select-none active:scale-[0.98]"
        >
          Back to mint
        </button>
      </section>
    </div>
  );
}
