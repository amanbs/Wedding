import { motion } from "framer-motion";
import { asset } from "../lib/asset";
import { ArrowUpRight } from "lucide-react";
import { COUPLE } from "../data/content";

export const RSVP = () => {
  return (
    <section id="rsvp" className="relative overflow-hidden bg-palace px-6 py-28 md:px-12 md:py-44">
      <div className="relative z-10 mx-auto max-w-[1600px] text-center">
        {/* Vintage Jaipur State postage stamp — decorative */}
        <motion.img
          src={asset("/jaipur/jaipur-stamp.jpg")}
          alt="Vintage Jaipur State peacock postage stamp"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none mx-auto mb-10 w-56 border-2 border-ivory shadow-[0_10px_30px_rgba(0,0,0,0.4)] md:w-72"
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14"
        >
          <p className="font-serif text-3xl italic text-champagne md:text-4xl">
            Our story continues…
          </p>
          <p className="mt-2 font-sans text-sm font-light tracking-wide text-ivory/75 md:text-base">
            and we hope you'll be there for this chapter
          </p>
          <p className="mt-5 font-sans text-xs uppercase tracking-[0.3em] text-ivory/60">
            Please RSVP by August 24th, 2026
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.45 }}
          className="mt-12"
        >
          <a
            data-testid="rsvp-open-form-btn"
            href={COUPLE.rsvpUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 rounded-full border border-champagne bg-champagne px-10 py-5 font-sans text-sm uppercase tracking-[0.25em] text-palace transition-colors duration-500 hover:bg-transparent hover:text-champagne"
          >
            Open the RSVP form
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RSVP;