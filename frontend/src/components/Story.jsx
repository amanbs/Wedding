import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STORY } from "../data/content";
import { Reveal } from "./motion/Reveal";

export const Story = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="story" ref={ref} className="relative bg-ivory px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              Our Story
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-12">
          {/* Chapters */}
          <div className="md:col-span-7">
            <div className="relative border-l border-ink/15 pl-8 md:pl-12">
              {STORY.map((c, i) => (
                <Reveal key={c.n} delay={i * 0.1}>
                  <div className="mb-16 last:mb-0">
                    <div className="flex items-baseline gap-6">
                      <span className="font-serif text-5xl text-clay/50 md:text-7xl">{c.n}</span>
                      <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-rose">
                        {c.label}
                      </span>
                    </div>
                    <h3 className="mt-4 font-serif text-3xl italic text-ink md:text-5xl">
                      {c.title}
                    </h3>
                    <div className="mt-5 max-w-xl space-y-4">
                      {c.paras.map((p, pi) => (
                        <p
                          key={pi}
                          className="font-sans text-base font-light leading-relaxed text-ink/75 md:text-lg"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Editorial portraits */}
          <div className="md:col-span-5">
            <div className="space-y-6 md:sticky md:top-28">
              <div className="relative aspect-[3/2] overflow-hidden">
                <motion.img
                  style={{ y: imgY, scale: 1.08 }}
                  src="/story-couple.jpg"
                  alt="Amy and Aman — the proposal"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ink/50 to-transparent p-6">
                  <p className="font-serif text-xl italic text-ivory">
                    "Together is a beautiful place to be."
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6">
                <Reveal>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src="/story-couple-2.jpg"
                      alt="Amy and Aman sharing a moment"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img
                      src="/story-couple-3.jpg"
                      alt="Amy and Aman in the gardens"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
