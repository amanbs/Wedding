import { DETAILS } from "../data/content";
import { Reveal } from "./motion/Reveal";

export const Details = () => {
  return (
    <section id="details" className="relative bg-sand px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              The Details
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="mb-16 max-w-3xl font-serif text-4xl font-light leading-tight text-ink md:text-6xl">
            Two days of celebration in the heart of the <span className="italic text-rose">Pink City</span>.
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 border-t border-l border-ink/15 sm:grid-cols-2 lg:grid-cols-3">
          {DETAILS.map((d, i) => (
            <Reveal key={d.label} delay={i * 0.06}>
              <div className="group h-full border-b border-r border-ink/15 p-8 transition-colors duration-500 hover:bg-ivory md:p-12">
                <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-clay">
                  {d.label}
                </span>
                <p className="mt-4 font-serif text-3xl text-ink transition-colors duration-500 group-hover:text-rose md:text-4xl">
                  {d.value}
                </p>
                <p className="mt-3 font-sans text-sm font-light text-ink/60">{d.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-16 max-w-3xl border-t border-ink/15 pt-10">
            <p className="font-serif text-2xl font-light italic leading-relaxed text-ink/80 md:text-3xl">
              A formal invitation, including the full programme and schedule for the celebrations, will follow soon.
            </p>
            <p className="mt-6 font-sans text-base font-light leading-relaxed text-ink/60 md:text-lg">
              In the meantime, we'll keep updating this space with useful information, travel tips, and everything you need to know as we get closer to the big day.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Details;
