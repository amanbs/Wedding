import { DETAILS } from "../data/content";
import { Reveal } from "./motion/Reveal";

const ACCENTS = [
  { src: "/jaipur/jaipur-arch.jpg", label: "Sunlit archways" },
  { src: "/jaipur/jaipur-glass.jpg", label: "Stained-glass light" },
  { src: "/jaipur/jaipur-monkey.jpg", label: "Pink City walls" },
];

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

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-20">
          {/* Feature door image */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="group relative aspect-[3/4] overflow-hidden lg:sticky lg:top-28">
                <img
                  src="/jaipur/jaipur-door.jpg"
                  alt="Ornate green and gold palace door, Jaipur"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                />
              </div>
            </Reveal>
          </div>

          {/* Copy + detail rows */}
          <div className="lg:col-span-7">
            <div className="border-t border-ink/15">
              {DETAILS.map((d, i) => (
                <Reveal key={d.label} delay={i * 0.06}>
                  <div className="group grid grid-cols-1 gap-2 border-b border-ink/15 py-7 transition-colors duration-500 hover:bg-ivory sm:grid-cols-12 sm:items-baseline sm:gap-6 sm:px-4">
                    <span className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-clay sm:col-span-3 sm:pt-2">
                      {d.label}
                    </span>
                    <div className="sm:col-span-9">
                      <p className="font-serif text-3xl text-ink transition-colors duration-500 group-hover:text-rose md:text-4xl">
                        {d.value}
                      </p>
                      <p className="mt-2 font-sans text-sm font-light text-ink/60">{d.sub}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <p className="font-serif text-2xl font-light italic leading-relaxed text-ink/80 md:text-3xl">
                  A formal invitation, including the full programme and schedule for the
                  celebrations, will follow soon.
                </p>
                <p className="mt-6 max-w-xl font-sans text-base font-light leading-relaxed text-ink/60 md:text-lg">
                  In the meantime, we'll keep updating this space with useful information, travel
                  tips, and everything you need to know as we get closer to the day.
                </p>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Flavour of Jaipur — accent triptych */}
        <div className="mt-20 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {ACCENTS.map((a, i) => (
            <Reveal key={a.src} delay={i * 0.08}>
              <div className="group relative aspect-[4/5] overflow-hidden">
                <img
                  src={a.src}
                  alt={a.label}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Details;
