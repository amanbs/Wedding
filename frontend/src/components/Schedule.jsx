import { SCHEDULE } from "../data/content";
import { Reveal } from "./motion/Reveal";

export const Schedule = () => {
  return (
    <section id="schedule" className="relative bg-ivory px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              The Schedule
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
          {SCHEDULE.map((day, di) => (
            <div key={day.day} className={di === 1 ? "lg:mt-24" : ""}>
              <Reveal>
                <div className="mb-10 border-b border-ink/15 pb-6">
                  <p className="font-sans text-xs uppercase tracking-[0.3em] text-clay">
                    {day.day}
                  </p>
                  <h3 className="mt-2 font-serif text-4xl italic text-ink md:text-5xl">
                    {day.date}
                  </h3>
                </div>
              </Reveal>

              <div className="space-y-10">
                {day.events.map((e, ei) => (
                  <Reveal key={e.title} delay={ei * 0.08}>
                    <div className="flex gap-8">
                      <span className="w-20 shrink-0 pt-1 font-sans text-sm uppercase tracking-[0.15em] text-rose">
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
