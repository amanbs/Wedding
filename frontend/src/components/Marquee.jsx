const PHRASE = "JAIPUR, INDIA — DECEMBER 17 & 18, 2026 —";

export const Marquee = ({ outline = true }) => {
  const items = Array.from({ length: 6 });
  return (
    <div className="relative w-full overflow-hidden border-y border-ink/15 bg-ivory py-6">
      <div className="flex w-max animate-marquee whitespace-nowrap">
        {items.concat(items).map((_, i) => (
          <span
            key={i}
            className={`mx-6 font-serif text-5xl md:text-7xl ${
              outline
                ? "text-transparent [-webkit-text-stroke:1px_#7A6A63]"
                : "text-ink"
            }`}
          >
            {PHRASE}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
