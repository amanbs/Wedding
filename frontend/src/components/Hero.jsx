import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { COUPLE, IMAGES } from "../data/content";
import Countdown from "./Countdown";

const line = {
  hidden: { y: "115%" },
  show: (i) => ({
    y: 0,
    transition: { duration: 1.1, delay: 0.5 + i * 0.15, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);

  return (
    <section ref={ref} className="relative min-h-[100svh] w-full overflow-hidden bg-ivory">
      {/* Parallax arch image */}
      <motion.div
        style={{ y: imgY, scale }}
        className="absolute right-0 top-0 h-full w-full md:w-[46%]"
      >
        <div
          className="relative h-full w-full overflow-hidden"
          style={{ borderRadius: "0 0 0 0", clipPath: "none" }}
        >
          <div className="absolute inset-0 md:m-6 md:rounded-t-[50%] overflow-hidden">
            <img
              src={IMAGES.heroPalace}
              alt="Jaipur palace archway"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-ink/20" />
          </div>
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ y: textY }}
        className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1600px] flex-col justify-center px-6 pt-28 md:px-12"
      >
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mb-6 font-sans text-xs uppercase tracking-[0.4em] text-rose"
        >
          Together with their families
        </motion.p>

        <h1 className="font-serif font-light leading-[0.86] tracking-tight text-ink">
          <span className="reveal-mask">
            <motion.span custom={0} variants={line} initial="hidden" animate="show" className="block text-[19vw] md:text-[13vw]">
              {COUPLE.bride}
            </motion.span>
          </span>
          <span className="reveal-mask">
            <motion.span custom={1} variants={line} initial="hidden" animate="show" className="block text-[13vw] italic text-clay md:text-[8vw]">
              &amp;
            </motion.span>
          </span>
          <span className="reveal-mask">
            <motion.span custom={2} variants={line} initial="hidden" animate="show" className="block text-[19vw] md:text-[13vw]">
              {COUPLE.groom}
            </motion.span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3, duration: 1 }}
          className="mt-6 font-serif text-3xl italic text-rose md:text-4xl"
        >
          are getting married!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="mt-8 max-w-md border-t border-ink/15 pt-6"
        >
          <p className="font-sans text-sm uppercase tracking-[0.25em] text-ink/80">
            {COUPLE.location}
          </p>
          <p className="mt-1 font-serif text-2xl text-ink">{COUPLE.dates}</p>
        </motion.div>
      </motion.div>

      {/* Countdown pinned to bottom edge */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-0 left-0 z-10 w-full border-t border-ink/15 bg-ivory/70 backdrop-blur-sm"
      >
        <div className="mx-auto flex max-w-[1600px] flex-col items-start justify-between gap-4 px-6 py-6 md:flex-row md:items-center md:px-12">
          <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-clay">
            The countdown to forever
          </span>
          <Countdown />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
