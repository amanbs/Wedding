import { COUPLE } from "../data/content";

export const Footer = () => {
  return (
    <footer className="relative bg-ink px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-[1600px]">
        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-6xl font-light text-ivory md:text-8xl">
            Amy <span className="italic text-champagne">&amp;</span> Aman
          </span>
          <p className="mt-6 font-sans text-xs uppercase tracking-[0.35em] text-ivory/50">
            {COUPLE.location} · {COUPLE.dates}
          </p>
          <a
            data-testid="footer-rsvp-btn"
            href={COUPLE.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 rounded-full border border-ivory/30 px-8 py-3 font-sans text-xs uppercase tracking-[0.25em] text-ivory transition-colors hover:bg-ivory hover:text-ink"
          >
            RSVP
          </a>
        </div>
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ivory/15 pt-8 md:flex-row">
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40">
            With love, from Jaipur
          </p>
          <p className="font-sans text-[0.65rem] uppercase tracking-[0.2em] text-ivory/40">
            Planned by Nisha · Catering by Ajeez
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
