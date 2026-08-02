import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { STORY, IMAGES } from "../data/content";
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
                      <h3 className="font-serif text-3xl italic text-ink md:text-5xl">
                        {c.title}
                      </h3>
                    </div>
                    <p className="mt-5 max-w-xl font-sans text-base font-light leading-relaxed text-ink/75 md:text-lg">
                      {c.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Editorial portrait */}
          <div className="md:col-span-5">
            <div className="relative h-[70vh] overflow-hidden md:sticky md:top-28">
              <motion.img
                style={{ y: imgY, scale: 1.15 }}
                src={IMAGES.storyCouple}
                alt="Amy and Aman"
                className="h-full w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ink/50 to-transparent p-6">
                <p className="font-serif text-xl italic text-ivory">
                  "Choosing you, always."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;
