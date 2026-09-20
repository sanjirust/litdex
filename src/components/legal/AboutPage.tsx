import type { PageID } from "@/App";
type Props = { setPage: (p: PageID) => void };

const STATS: [string, string][] = [
  ["1,000", "Total Supply"],
  ["1,600+", "LitVM Community Members"],
  ["4", "Rarity Tiers"],
  ["Base", "Mainnet Chain"],
];

export default function AboutPage({ setPage }: Props) {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-5xl rounded-[8px] border border-brand-border bg-brand-surface p-6 shadow-2xl sm:p-8 md:p-14">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-control">
          LitDEX Network
        </p>
        <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase tracking-tight text-brand-text-primary md:text-6xl">
          About LitDEX
        </h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brand-control" />

        <div className="mt-8 max-w-4xl space-y-5 text-base leading-8 text-brand-text-muted md:text-lg">
          <p>
            LitDEX Genesis Champions is the first NFT collection to bridge the LitDEX ecosystem from
            testnet to mainnet. Built on top of LitVM, an active testnet DeFi platform that has hosted
            over 1,600 participants across swaps, liquidity provision, staking, and daily engagement,
            Genesis Champions carries that existing community, and the points they&apos;ve earned,
            directly onto Base.
          </p>
          <p>
            Every pass in the collection is a living, on-chain record rather than static art. It starts as
            Common and evolves in rarity and tier as its holder engages with the ecosystem: earning
            points on LitVM, spending them to level up, and eventually competing in on-chain gameplay
            to be promoted into rarer tiers.
          </p>
          <p>
            The collection totals 1,000 passes on Base Mainnet, with core mechanics governed entirely by
            verified, open-source smart contracts. Nothing about supply, minting, leveling, or revenue
            distribution relies on a centralized backend that could be changed without transparency.
          </p>
          <p>
            LitDEX&apos;s long-term goal is to keep building real utility for holders: partnerships,
            revenue-sharing from protocol activity, and an eventual $LITDEX token, all rewarding the
            holders who help grow the ecosystem from the ground up.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map(([value, label]) => (
            <div
              key={label}
              className="rounded-[8px] border border-brand-border bg-brand-surface-2 p-5 shadow-md"
            >
              <p className="font-sans text-3xl font-extrabold uppercase text-brand-control">{value}</p>
              <p className="mt-2 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
                {label}
              </p>
            </div>
          ))}
        </div>

        <button
          onClick={() => setPage("nfts")}
          className="mt-10 w-full sm:w-auto min-h-12 px-8 py-3 rounded-lg bg-brand-text-primary text-brand-bg font-mono font-bold text-sm cursor-pointer touch-manipulation select-none active:scale-[0.98]"
        >
          Back to mint
        </button>
      </div>
    </div>
  );
}
