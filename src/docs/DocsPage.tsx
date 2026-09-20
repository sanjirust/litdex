import { useMemo, useState } from "react";
import { Menu, X } from "lucide-react";
import { marked } from "marked";
import { DEFAULT_DOC_SLUG, DOC_INDEX, DOC_SECTIONS } from "./manifest";

/**
 * Docs used to live only at the separate docs.litdex.test-hub.xyz (VitePress)
 * deployment. This renders the same markdown content in-app at /docs, styled
 * with LitDEX's own theme, so there's a single site instead of two.
 */
export default function DocsPage() {
  const [slug, setSlug] = useState(DEFAULT_DOC_SLUG);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const doc = DOC_INDEX[slug] ?? DOC_INDEX[DEFAULT_DOC_SLUG];

  const html = useMemo(() => {
    try {
      return marked.parse(doc.content, { async: false }) as string;
    } catch {
      return "<p>Could not render this page.</p>";
    }
  }, [doc.content]);

  const go = (next: string) => {
    setSlug(next);
    setMobileNavOpen(false);
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  const Nav = () => (
    <nav className="space-y-6">
      {DOC_SECTIONS.map((section) => (
        <div key={section.title}>
          <p className="px-3 font-mono text-[10px] font-bold uppercase tracking-widest text-brand-text-muted">
            {section.title}
          </p>
          <div className="mt-2 flex flex-col">
            {section.items.map((item) => (
              <button
                key={item.slug}
                onClick={() => go(item.slug)}
                className={`rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                  item.slug === doc.slug
                    ? "bg-brand-surface-2 font-semibold text-brand-text-primary"
                    : "text-brand-text-muted hover:bg-brand-surface-2 hover:text-brand-text-primary"
                }`}
              >
                {item.title}
              </button>
            ))}
          </div>
        </div>
      ))}
    </nav>
  );

  return (
    <div className="min-h-[calc(100vh-80px)] px-4 py-8 md:px-8 md:py-12">
      <div className="mx-auto flex w-full max-w-[1400px] gap-10">
        {/* Desktop sidebar */}
        <aside className="hidden w-64 shrink-0 lg:block">
          <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-10 pr-2">
            <Nav />
          </div>
        </aside>

        {/* Mobile nav toggle */}
        <button
          onClick={() => setMobileNavOpen(true)}
          className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full border border-brand-border bg-brand-surface px-4 py-3 text-sm font-semibold text-brand-text-primary shadow-lg lg:hidden"
        >
          <Menu size={16} /> Docs menu
        </button>
        {mobileNavOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div className="absolute inset-0 bg-black/70" onClick={() => setMobileNavOpen(false)} />
            <div className="relative ml-auto flex h-full w-80 max-w-[85vw] flex-col overflow-y-auto border-l border-brand-border bg-brand-bg p-5">
              <button
                onClick={() => setMobileNavOpen(false)}
                className="mb-4 ml-auto flex items-center gap-1 text-sm text-brand-text-muted"
              >
                <X size={16} /> Close
              </button>
              <Nav />
            </div>
          </div>
        )}

        {/* Content */}
        <main className="min-w-0 flex-1 rounded-[8px] border border-brand-border bg-brand-surface px-6 py-8 md:px-10 md:py-10">
          <div
            className="docs-markdown"
            // Content is authored in this repo (docs/*.md), not user-supplied.
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </main>
      </div>
    </div>
  );
}
