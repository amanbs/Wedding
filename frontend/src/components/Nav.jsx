import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { COUPLE } from "../data/content";

const LINKS = [
  { label: "Story", id: "story" },
  { label: "Details", id: "details" },
  { label: "The Programme", id: "schedule" },
  { label: "Moments", id: "gallery" },
  { label: "Travel", id: "travel" },
  { label: "Wishes", id: "wishes" },
];

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 z-[9990] w-full transition-colors duration-500 ${
        scrolled ? "bg-ivory/85 backdrop-blur-md border-b border-ink/10" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-12">
        <button
          data-testid="nav-logo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-serif text-2xl tracking-tight text-ink"
        >
          A <span className="italic text-rose">&amp;</span> A
        </button>

        <nav className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <button
              key={l.id}
              data-testid={`nav-${l.id}`}
              onClick={() => scrollTo(l.id)}
              className="group relative font-sans text-xs uppercase tracking-[0.2em] text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-rose transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <a
            data-testid="nav-rsvp-btn"
            href={COUPLE.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-ink bg-ink px-6 py-2.5 font-sans text-xs uppercase tracking-[0.2em] text-ivory transition-colors hover:bg-rose hover:border-rose"
          >
            RSVP
          </a>
        </nav>

        <button
          data-testid="nav-menu-toggle"
          className="md:hidden font-sans text-xs uppercase tracking-[0.2em] text-ink"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="overflow-hidden bg-ivory md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  data-testid={`nav-mobile-${l.id}`}
                  onClick={() => {
                    scrollTo(l.id);
                    setOpen(false);
                  }}
                  className="py-2 text-left font-serif text-xl text-ink"
                >
                  {l.label}
                </button>
              ))}
              <a
                href={COUPLE.rsvpUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full bg-ink px-6 py-3 text-center font-sans text-xs uppercase tracking-[0.2em] text-ivory"
              >
                RSVP
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Nav;
