import { SCHEDULE } from "../data/content";
import { asset } from "../lib/asset";
import { Reveal } from "./motion/Reveal";

export const Schedule = () => {
  return (
    <section id="schedule" className="relative bg-ivory px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              THE PROGRAMME
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {SCHEDULE.map((day, di) => (
            <div key={day.day} className={di === 1 ? "lg:mt-24" : ""}>
              <Reveal>
                <div className="group relative mb-10 aspect-[16/10] overflow-hidden">
                  <img
                    src={asset(day.image)}
                    alt={day.caption}
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/55 via-ink/10 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-6">
                    <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/70">
                      {day.day}
                    </p>
                    <h3 className="mt-1 font-serif text-4xl italic text-ivory md:text-5xl">
                      {day.date}
                    </h3>
                  </div>
                </div>
              </Reveal>

              <div className="mt-10 space-y-10">
                {day.events.map((e, ei) => (
                  <Reveal key={e.title} delay={ei * 0.08}>
                    <div className="flex gap-8">
                      <span className="w-24 shrink-0 pt-1 font-sans text-sm uppercase tracking-[0.15em] text-rose">
                        {e.time}
                      </span>
                      <div className="border-l border-ink/15 pl-8">
                        <h4 className="font-serif text-2xl text-ink md:text-3xl">{e.title}</h4>
                        <p className="mt-2 font-sans text-sm font-light text-ink/60">
                          {e.note}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;