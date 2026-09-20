import type { PageID } from "@/App";
type Props = { setPage: (p: PageID) => void };

const TOC = [
  "Project Overview",
  "Smart Contracts",
  "Supply Model",
  "Tier Structure",
  "Minting",
  "Progression System",
  "Repair Mechanic",
  "Holder Utility",
  "Provenance",
  "Transparency",
  "Roadmap",
];

function Section({ n, title, children }: { n: number; title: string; children: React.ReactNode }) {
  return (
    <section id={`s${n}`} className="scroll-mt-24 border-t border-brand-border pt-8 mt-8 first:mt-0 first:border-0 first:pt-0">
      <h2 className="text-xl font-bold text-brand-text-primary md:text-2xl">
        <span className="text-brand-control">{n}.</span> {title}
      </h2>
      <div className="mt-4 space-y-4 text-sm leading-7 text-brand-text-muted md:text-base">{children}</div>
    </section>
  );
}

function Table({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <thead>
          <tr>
            {head.map((h) => (
              <th
                key={h}
                className="border border-brand-border bg-brand-surface-2 px-4 py-2 text-left font-mono text-[11px] font-bold uppercase tracking-widest text-brand-text-primary"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j} className="border border-brand-border px-4 py-2 text-brand-text-muted">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function WhitepaperPage({ setPage }: Props) {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:px-8 md:py-16">
      <div className="mx-auto w-full max-w-4xl rounded-[8px] border border-brand-border bg-brand-surface p-6 shadow-2xl sm:p-8 md:p-14">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-control">
          LitDEX Genesis Champions
        </p>
        <h1 className="mt-4 font-sans text-4xl font-extrabold uppercase tracking-tight text-brand-text-primary md:text-6xl">
          Whitepaper
        </h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brand-control" />
        <p className="mt-6 max-w-2xl text-sm text-brand-text-muted md:text-base">
          An evolving on-chain membership pass collection on Base Mainnet. 2026.
        </p>

        <div className="mt-8 rounded-[8px] border border-brand-border bg-brand-surface-2 p-6">
          <p className="text-sm leading-7 text-brand-text-muted md:text-base">
            LitDEX Genesis Champions is a collection of 1,000 on-chain membership passes deployed on
            Base Mainnet. Unlike static NFT art, each pass is a live on-chain record whose rarity and tier
            evolve with the holder&apos;s activity. The collection extends the existing LitDEX and LitVM
            ecosystem, an active testnet DeFi platform with over 1,600 historical participants, giving
            early community members a direct, discounted path onto the mainnet collection. This document
            describes the collection&apos;s smart contracts, supply model, minting process, progression
            mechanics, and the utility granted to holders at each tier.
          </p>
        </div>

        {/* Table of contents */}
        <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
          {TOC.map((title, i) => (
            <a
              key={title}
              href={`#s${i + 1}`}
              className="rounded-lg px-3 py-2 text-sm text-brand-text-muted transition-colors hover:bg-brand-surface-2 hover:text-brand-text-primary"
            >
              <span className="font-mono text-brand-control">{i + 1}.</span> {title}
            </a>
          ))}
        </div>

        <div className="mt-10">
          <Section n={1} title="Project Overview">
            <p>
              LitDEX Genesis Champions is a dynamic, evolving membership pass collection built on Base
              Mainnet. Each pass begins at the lowest rarity and tier, and progresses upward as its holder
              engages with the LitDEX ecosystem, earning points on the LitVM testnet and spending them to
              level up, and eventually competing in on-chain gameplay to be promoted into rarer tiers.
            </p>
            <p>
              The collection is built on top of an already active community. LitDEX and its LitVM testnet
              have accumulated over 1,600 historical participants across activities such as swaps,
              liquidity provision, staking, and daily check-ins. Genesis Champions is designed as the
              bridge that carries that existing community, and its earned points, onto Base Mainnet.
            </p>
          </Section>

          <Section n={2} title="Smart Contracts">
            <p>
              The collection is governed by two core smart contracts deployed on Base Mainnet, both
              upgradeable via the UUPS proxy pattern and independently verified on Basescan and Sourcify.
              Verified source code allows anyone to audit the exact logic governing minting, leveling,
              promotion, and revenue distribution.
            </p>
            <Table
              head={["Contract", "Address"]}
              rows={[
                ["LitdexNFT (main collection, UUPS proxy)", "0xaCA7EFFcd0c4689D131C8d18C09ea1994F2A5d4d"],
                ["BasePoints (points and claim contract, UUPS proxy)", "0xDa73c4c7fcA2E688A77b04137d56740085c2B8E7"],
                ["Payment token (native USDC on Base)", "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913"],
              ]}
            />
            <p>
              The standard used is ERC-721. Payments across the collection, minting, and repair, are
              settled in native USDC on Base.
            </p>
          </Section>

          <Section n={3} title="Supply Model">
            <p>
              The total collection size is fixed at 1,000 passes. Every pass begins as Common and can be
              promoted upward through Rare, Epic, and ultimately Legend, via gameplay once the promotion
              mechanism launches. Each rarity has its own supply cap, forming an independent tier within
              the overall promotion funnel.
            </p>
            <Table
              head={["Rarity", "Cap", "Team Allocation", "Community Available"]}
              rows={[
                ["Common", "900", "100 (Tier 9)", "800 (entry point)"],
                ["Rare", "460", "60 (Tier 5)", "Via promotion"],
                ["Epic", "190", "30 (Tier 3)", "Via promotion"],
                ["Legend", "50", "10 (MAX)", "Via promotion"],
              ]}
            />
            <p>
              Of the 1,000 total passes, 900 enter the collection through the Common tier: 800 are
              available to the community, and 100 were minted directly to the project team at Common Tier
              9. The remaining 100 team passes were minted directly into the higher rarities, 60 at Rare
              Tier 5, 30 at Epic Tier 3, and 10 at Legend, reserved for collaborations and promotional
              purposes. This full allocation is transparent and verifiable on-chain.
            </p>
          </Section>

          <Section n={4} title="Tier Structure">
            <p>
              Within each rarity, passes progress through a fixed number of tiers before becoming
              eligible for promotion to the next rarity.
            </p>
            <Table
              head={["Rarity", "Tiers"]}
              rows={[
                ["Common", "Tier 1 through Tier 9"],
                ["Rare", "Tier 1 through Tier 5"],
                ["Epic", "Tier 1 through Tier 3"],
                ["Legend", "Single MAX tier, no sub-tiers"],
              ]}
            />
          </Section>

          <Section n={5} title="Minting">
            <p>Minting takes place in two phases, both priced in USDC.</p>
            <h3 className="text-base font-bold text-brand-text-primary">5.1 Whitelist Mint</h3>
            <p>
              The whitelist phase is reserved for holders of the original LitVM testnet NFTs: LitShard,
              LitCore, and LitGod. Each testnet NFT held grants one discounted mint on Base Mainnet:
            </p>
            <ul className="list-disc space-y-1 pl-5">
              <li>LitShard (Common) holders receive 20% off</li>
              <li>LitCore (Rare) holders receive 30% off</li>
              <li>LitGod (Epic) holders receive 50% off</li>
            </ul>
            <p>
              Discounts apply per NFT held. A wallet holding three LitShard NFTs, for example, is entitled
              to three separate 20%-off mints. The base public mint price is $2 USDC.
            </p>
            <h3 className="text-base font-bold text-brand-text-primary">5.2 Public Mint</h3>
            <p>
              The public mint is open to everyone at $2 USDC per pass, limited to two mints per wallet. It
              opens 48 hours after the whitelist mint begins, and remains open until the Common supply cap
              is fully minted.
            </p>
          </Section>

          <Section n={6} title="Progression System">
            <p>
              Passes level up by spending LD Points. Points are earned through activity on the LitVM
              testnet, including swaps, liquidity provision, staking, and daily check-ins, and are claimed
              onto Base Mainnet through a secure signed-voucher bridge between the two chains.
            </p>
            <p>
              <strong>Leveling cost.</strong> Tier 1→2 costs 500 LD Points; each subsequent level costs 200
              LD Points more than the last, up to a rarity&apos;s maximum tier (500, 700, 900, 1100, 1300,
              1500, 1700, 1900 for Common Tiers 2 through 9).
            </p>
            <p>
              <strong>Promotion.</strong> Advancing from one rarity to the next, Common to Rare, Rare to
              Epic, and Epic to Legend, requires a pass to reach its rarity&apos;s maximum tier and then
              succeed in on-chain gameplay challenges. Gameplay has not shipped yet, and promotion is
              disabled on-chain until it does — Common Tier 9 is the current ceiling. Promotion is
              intentionally not available through points alone, so that rarity is earned through active
              participation rather than purchased outright.
            </p>
          </Section>

          <Section n={7} title="Repair Mechanic">
            <p>
              A pass that loses a gameplay challenge becomes damaged, and must be repaired before it can
              be used in further challenges or leveled up. Repair carries a flat cost in USDC plus points,
              identical across every rarity and tier.
            </p>
          </Section>

          <Section n={8} title="Holder Utility">
            <p>
              <strong>Rare and above:</strong> priority access to partnership opportunities and community
              giveaways.
            </p>
            <p>
              <strong>Epic and above:</strong> all Rare benefits, plus an allocation in the future $LITDEX
              token airdrop, plus a 10% weekly share of protocol repair-fee revenue, split among all Epic
              holders.
            </p>
            <p>
              <strong>Legend:</strong> all Epic benefits, plus a larger airdrop allocation, plus a 20%
              weekly share of protocol repair-fee revenue, split among a maximum of 50 Legend holders,
              making it one of the scarcest and most rewarded tiers in the collection.
            </p>
          </Section>

          <Section n={9} title="Provenance">
            <p>
              Every pass carries a unique on-chain identifier and a fully traceable history. Anyone can
              verify a pass&apos;s complete lifecycle, its original mint date, every level-up, every rarity
              change, and every transfer, directly on-chain, with no dependence on off-chain or
              centralized records.
            </p>
          </Section>

          <Section n={10} title="Transparency">
            <p>
              Both core contracts, LitdexNFT and BasePoints, are open source and independently verified on
              Basescan and Sourcify. This allows any holder, or prospective holder, to audit the exact
              rules governing supply, minting, leveling, promotion, and revenue distribution before
              committing capital.
            </p>
          </Section>

          <Section n={11} title="Roadmap">
            <p>
              The immediate priority following mainnet launch is the release of on-chain gameplay, which
              will unlock the promotion path between rarities. Beyond that, LitDEX will continue deepening
              the integration between the LitVM testnet and Base Mainnet, and expand long-term utility for
              holders as the ecosystem grows.
            </p>
            <p>
              Genesis Champions is the first step in bringing the LitDEX community fully on-chain on Base.
              Further updates on gameplay, partnerships, and the $LITDEX token will be shared through
              official LitDEX channels.
            </p>
          </Section>
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <button
            onClick={() => setPage("roadmap")}
            className="min-h-12 px-8 py-3 rounded-lg bg-brand-text-primary text-brand-bg font-mono font-bold text-sm cursor-pointer touch-manipulation select-none active:scale-[0.98]"
          >
            View roadmap
          </button>
          <button
            onClick={() => setPage("nfts")}
            className="min-h-12 px-8 py-3 rounded-lg border border-brand-border text-brand-text-primary font-mono font-bold text-sm cursor-pointer touch-manipulation select-none active:scale-[0.98]"
          >
            Back to mint
          </button>
        </div>
      </div>
    </div>
  );
}
