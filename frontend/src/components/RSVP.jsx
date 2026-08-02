import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { COUPLE } from "../data/content";
import { MaskLine } from "./motion/Reveal";

export const RSVP = () => {
  return (
    <section id="rsvp" className="relative overflow-hidden bg-palace px-6 py-28 md:px-12 md:py-44">
      <div className="mx-auto max-w-[1600px] text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-8 font-sans text-xs uppercase tracking-[0.4em] text-champagne"
        >
          Kindly Respond
        </motion.p>

        <h2 className="font-serif font-light leading-[0.95] text-ivory">
          <MaskLine className="text-5xl md:text-8xl">We can't wait</MaskLine>
          <MaskLine delay={0.12} className="text-5xl italic text-champagne md:text-8xl">
            to celebrate
          </MaskLine>
          <MaskLine delay={0.24} className="text-5xl md:text-8xl">with you.</MaskLine>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mx-auto mt-10 max-w-xl font-sans text-base font-light leading-relaxed text-ivory/70"
        >
          Please share your details, meal preference, and whether you're bringing a plus one or
          kids. Your response goes directly to our private RSVP responses.
        </motion.p>

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
