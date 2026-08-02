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
      </div>
    </section>
  );
};

export default Details;
