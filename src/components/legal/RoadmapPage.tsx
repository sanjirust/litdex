import type { PageID } from "@/App";
import { TrainFront } from "lucide-react";

type Props = { setPage: (p: PageID) => void };

const MILESTONES = [
  {
    quarter: "Q3 2026",
    title: "Mint live",
    description:
      "Genesis Champions launches on Base Mainnet. Whitelist and public mint open, bringing the LitDEX community fully on-chain.",
    current: true,
  },
  {
    quarter: "Q4 2026",
    title: "Game live",
    description:
      "On-chain gameplay launches, unlocking the promotion path between rarities. Common, Rare, Epic, and Legend tiers become earnable through play.",
  },
  {
    quarter: "Q1 2027",
    title: "Holder utility activation",
    description:
      "Partnership opportunities, community giveaways, and protocol repair-revenue sharing begin for Rare, Epic, and Legend holders.",
  },
  {
    quarter: "Q2 2027",
    title: "TGE and airdrop",
    description:
      "$LITDEX token generation event. Airdrop allocations distributed to Epic and Legend holders as outlined in the whitepaper.",
  },
];

function StationMarker({ current, mobile = false }: { current?: boolean; mobile?: boolean }) {
  if (current) {
    return (
      <span
        className={`${
          mobile ? "relative mt-4" : "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        } z-20 flex size-9 items-center justify-center rounded-full border-2 border-brand-bg bg-brand-control text-brand-control-foreground shadow-[0_0_20px_rgba(153,153,153,0.5)]`}
        aria-label="Current milestone"
      >
        <TrainFront className="size-5" strokeWidth={2} aria-hidden="true" />
      </span>
    );
  }
  return (
    <span
      className={`${
        mobile ? "relative z-10 ml-0.5 mt-6" : "absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2"
      } block size-5 rounded-full border-[3px] border-brand-border bg-brand-surface`}
      aria-hidden="true"
    />
  );
}

function MilestoneCard({ milestone }: { milestone: (typeof MILESTONES)[number] }) {
  return (
    <article className="w-full rounded-[8px] border border-brand-border bg-brand-surface-2 p-5 shadow-lg">
      <div className="flex flex-wrap items-center gap-2">
        <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-control">
          {milestone.quarter}
        </span>
        {milestone.current && (
          <span className="rounded-full bg-brand-control px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-brand-control-foreground">
            Current
          </span>
        )}
      </div>
      <h2 className="mt-3 text-lg font-bold uppercase text-brand-text-primary">{milestone.title}</h2>
      <p className="mt-3 text-sm leading-6 text-brand-text-muted">{milestone.description}</p>
    </article>
  );
}

export default function RoadmapPage({ setPage }: Props) {
  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-10 md:px-8 md:py-16">
      <section className="mx-auto w-full max-w-[1400px] rounded-[8px] border border-brand-border bg-brand-surface p-6 shadow-2xl sm:p-8 md:p-12">
        <p className="font-mono text-[11px] font-bold uppercase tracking-widest text-brand-control">
          What comes next
        </p>
        <h1 className="mt-3 font-sans text-4xl font-extrabold uppercase tracking-tight text-brand-text-primary md:text-6xl">
          Roadmap
        </h1>
        <span className="mt-4 block h-1 w-16 rounded-full bg-brand-control" />

        {/* Mobile: vertical list */}
        <div className="relative mt-12 md:hidden">
          <div className="absolute bottom-4 left-[9px] top-4 w-[2px] bg-brand-border" aria-hidden="true" />
          <div className="space-y-8">
            {MILESTONES.map((milestone) => (
              <div key={milestone.quarter} className="relative grid grid-cols-[24px_minmax(0,1fr)] gap-4">
                <StationMarker current={milestone.current === true} mobile />
                <MilestoneCard milestone={milestone} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="relative mt-16 hidden min-h-[540px] grid-cols-4 md:grid">
          <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-brand-border" aria-hidden="true" />
          {MILESTONES.map((milestone, index) => {
            const above = index % 2 === 0;
            return (
              <div key={milestone.quarter} className="relative grid grid-rows-2 px-3">
                {above && (
                  <div className="flex items-end pb-14">
                    <MilestoneCard milestone={milestone} />
                  </div>
                )}
                <div
                  className={`absolute left-1/2 w-px -translate-x-1/2 bg-brand-border ${
                    above ? "bottom-1/2 h-10" : "top-1/2 h-10"
                  }`}
                />
                <StationMarker current={milestone.current === true} />
                {!above && (
                  <div className="row-start-2 flex items-start pt-14">
                    <MilestoneCard milestone={milestone} />
                  </div>
                )}
              </div>
            );
          })}
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
