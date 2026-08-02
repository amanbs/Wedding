import { TRAVEL, NOTES, IMAGES } from "../data/content";
import { Reveal } from "./motion/Reveal";

export const Travel = () => {
  return (
    <section id="travel" className="relative bg-ivory px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-12 bg-rose" />
                <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
                  Travel & Stay
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative h-[52vh] overflow-hidden lg:sticky lg:top-28">
                <img
                  src={IMAGES.venueHaveli}
                  alt="Narain Niwas heritage haveli"
                  className="h-full w-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-ink/60 to-transparent p-6">
                  <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/70">
                    The Venue
                  </p>
                  <p className="font-serif text-3xl text-ivory">Narain Niwas</p>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <div className="space-y-10">
              {TRAVEL.map((t, i) => (
                <Reveal key={t.title} delay={i * 0.08}>
                  <div className="border-b border-ink/15 pb-10">
                    <h3 className="font-serif text-3xl text-ink md:text-4xl">{t.title}</h3>
                    <p className="mt-4 max-w-xl font-sans text-base font-light leading-relaxed text-ink/70">
                      {t.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-clay">
                  Notes for guests
                </p>
                <ul className="space-y-4">
                  {NOTES.map((n, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="font-serif text-xl italic text-rose">{`0${i + 1}`}</span>
                      <span className="font-sans text-base font-light text-ink/75">{n}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Travel;
