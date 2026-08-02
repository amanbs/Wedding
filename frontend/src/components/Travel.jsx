import { TRAVEL, NOTES } from "../data/content";
import { ExternalLink } from "lucide-react";
import { Reveal } from "./motion/Reveal";

export const Travel = () => {
  return (
    <section id="travel" className="relative bg-ivory px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-24">
          <div className="relative lg:col-span-5">
            <Reveal>
              <div className="mb-10 flex items-center gap-4">
                <span className="h-px w-12 bg-rose" />
                <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
                  Travel & Stay
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="lg:sticky lg:top-28">
                <a
                  href="https://www.cntraveller.in/sponsored/story/at-narain-niwas-palace-jaipur-slows-to-a-soulful-pace/"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="venue-article-link"
                  className="group relative block aspect-[3/4] overflow-hidden"
                >
                  <img
                    src="/jaipur/narain-tea.jpg"
                    alt="Bar Palladio veranda at Narain Niwas Palace, Jaipur"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-ink/10" />
                  <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6">
                    <div>
                      <p className="font-sans text-[0.65rem] uppercase tracking-[0.3em] text-ivory/70">
                        The Venue
                      </p>
                      <p className="font-serif text-3xl text-ivory">Narain Niwas Palace</p>
                    </div>
                    <span className="flex items-center gap-1.5 font-sans text-[0.6rem] uppercase tracking-[0.2em] text-ivory/80 transition-colors group-hover:text-ivory">
                      Read <ExternalLink size={13} />
                    </span>
                  </div>
                  {/* Vintage Jaipur State postage stamp — decorative */}
                  <img
                    src="/jaipur/jaipur-stamp.jpg"
                    alt="Vintage Jaipur State peacock postage stamp"
                    className="pointer-events-none absolute right-4 top-4 z-10 w-24 rotate-6 border-2 border-ivory shadow-[0_10px_30px_rgba(26,26,26,0.35)] transition-transform duration-700 group-hover:rotate-0 md:w-28"
                  />
                </a>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  <a
                    href="https://www.cntraveller.in/sponsored/story/at-narain-niwas-palace-jaipur-slows-to-a-soulful-pace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[4/3] overflow-hidden"
                  >
                    <img
                      src="/jaipur/narain-veranda.jpg"
                      alt="Ivy-clad veranda at Narain Niwas Palace"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </a>
                  <a
                    href="https://www.cntraveller.in/sponsored/story/at-narain-niwas-palace-jaipur-slows-to-a-soulful-pace/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block aspect-[4/3] overflow-hidden"
                  >
                    <img
                      src="/jaipur/narain-facade.jpg"
                      alt="The facade of Narain Niwas Palace"
                      className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.05]"
                    />
                  </a>
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
                    <div className="mt-4 max-w-xl space-y-3">
                      {t.paras.map((p, pi) => (
                        <p
                          key={pi}
                          className="font-sans text-base font-light leading-relaxed text-ink/70"
                        >
                          {p}
                        </p>
                      ))}
                    </div>
                    {t.links && (
                      <ul className="mt-5 max-w-xl space-y-3">
                        {t.links.map((l) => (
                          <li key={l.url}>
                            <a
                              href={l.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-start gap-2 font-sans text-sm text-rose transition-colors hover:text-ink"
                            >
                              <span className="underline decoration-rose/40 underline-offset-4 group-hover:decoration-ink">
                                {l.label}
                              </span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.1}>
              <div className="mt-12">
                <p className="mb-6 font-sans text-xs uppercase tracking-[0.3em] text-clay">
                  Notes for guests
                </p>
                <ul className="space-y-6">
                  {NOTES.map((n, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="shrink-0 font-serif text-xl italic text-rose">{`0${i + 1}`}</span>
                      <div>
                        {n.title && (
                          <p className="font-sans text-sm font-medium uppercase tracking-[0.15em] text-ink">
                            {n.title}
                          </p>
                        )}
                        <p className={`font-sans text-base font-light text-ink/75 ${n.title ? "mt-1" : ""}`}>
                          {n.text}
                        </p>
                      </div>
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
