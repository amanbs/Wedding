import { useState, useEffect } from "react";
import { COUPLE } from "../data/content";

const calc = () => {
  const diff = new Date(COUPLE.weddingDate).getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff / 3600000) % 24),
    minutes: Math.floor((diff / 60000) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

export const Countdown = ({ light = false }) => {
  const [t, setT] = useState(calc());

  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { v: t.days, l: "Days" },
    { v: t.hours, l: "Hrs" },
    { v: t.minutes, l: "Min" },
    { v: t.seconds, l: "Sec" },
  ];

  return (
    <div data-testid="countdown" className="flex items-end gap-6 md:gap-10">
      {units.map((u, i) => (
        <div key={u.l} className="flex items-end gap-6 md:gap-10">
          <div className="text-center">
            <div
              className={`font-serif text-4xl leading-none md:text-6xl ${
                light ? "text-ivory" : "text-ink"
              }`}
            >
              {String(u.v).padStart(2, "0")}
            </div>
            <div
              className={`mt-2 font-sans text-[0.6rem] uppercase tracking-[0.3em] ${
                light ? "text-ivory/60" : "text-clay"
              }`}
            >
              {u.l}
            </div>
          </div>
          {i < units.length - 1 && (
            <span
              className={`font-serif text-3xl md:text-5xl ${
                light ? "text-ivory/30" : "text-clay/40"
              }`}
            >
              :
            </span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Countdown;
