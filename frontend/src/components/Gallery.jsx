import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { Reveal } from "./motion/Reveal";

const PHOTOS = [
  { src: "/moments/m2.jpg", span: "md:col-span-7", h: "h-[46vh] md:h-[62vh]" },
  { src: "/moments/m4.jpg", span: "md:col-span-5", h: "h-[46vh] md:h-[62vh]" },
  { src: "/moments/m1.jpg", span: "md:col-span-5", h: "h-[44vh]" },
  { src: "/moments/m6.jpg", span: "md:col-span-7", h: "h-[44vh]" },
  { src: "/moments/m3.jpg", span: "md:col-span-12", h: "h-[44vh] md:h-[60vh]" },
];

export const Gallery = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="gallery" className="relative bg-sand px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              Moments
            </span>
          </div>
        </Reveal>

        <div className="grid auto-rows-[minmax(0,auto)] grid-cols-1 gap-4 md:grid-cols-12">
          {PHOTOS.map((p, i) => (
            <Reveal key={i} delay={(i % 3) * 0.08} className={p.span}>
              <button
                data-testid={`gallery-item-${i}`}
                onClick={() => setActive(p.src)}
                className={`group relative w-full overflow-hidden ${p.h}`}
              >
                <img
                  src={p.src}
                  alt={`Wedding moment ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.06]"
                />
                <div className="absolute inset-0 bg-ink/0 transition-colors duration-500 group-hover:bg-ink/15" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            data-testid="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[9995] flex items-center justify-center bg-ink/90 p-6 backdrop-blur-sm"
          >
            <button
              data-testid="gallery-lightbox-close"
              className="absolute right-6 top-6 text-ivory/80 transition-colors hover:text-ivory"
              onClick={() => setActive(null)}
            >
              <X size={28} />
            </button>
            <motion.img
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              src={active}
              alt="Selected moment"
              className="max-h-[85vh] max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
