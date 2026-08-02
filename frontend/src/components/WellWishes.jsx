import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Reveal } from "./motion/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const WellWishes = () => {
  const [wishes, setWishes] = useState([]);
  const [form, setForm] = useState({ name: "", location: "", message: "" });
  const [loading, setLoading] = useState(false);

  const load = async () => {
    try {
      const { data } = await axios.get(`${API}/wishes`);
      setWishes(data);
    } catch (e) {
      console.error("Failed to load wishes", e);
    }
  };

  useEffect(() => {
    load();
  }, []);

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) {
      toast.error("Please add your name and a message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/wishes`, form);
      toast.success("Thank you — your wish has been shared!");
      setForm({ name: "", location: "", message: "" });
      load();
    } catch (e) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="wishes" className="relative bg-sand px-6 py-24 md:px-12 md:py-40">
      <div className="mx-auto max-w-[1600px]">
        <Reveal>
          <div className="mb-16 flex items-center gap-4">
            <span className="h-px w-12 bg-rose" />
            <span className="font-sans text-xs uppercase tracking-[0.35em] text-rose">
              Guest Book
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Form */}
          <div className="lg:col-span-5">
            <Reveal>
              <h2 className="font-serif text-4xl font-light leading-tight text-ink md:text-5xl">
                Leave a <span className="italic text-rose">well-wish</span> for the couple
              </h2>
              <form onSubmit={submit} className="mt-10 space-y-6" data-testid="wishes-form">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-clay">
                      Your name
                    </label>
                    <input
                      data-testid="wish-name-input"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full border-b border-ink/25 bg-transparent py-3 font-sans text-lg text-ink outline-none transition-colors focus:border-rose"
                      placeholder="Amy"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-clay">
                      From (optional)
                    </label>
                    <input
                      data-testid="wish-location-input"
                      value={form.location}
                      onChange={(e) => setForm({ ...form, location: e.target.value })}
                      className="w-full border-b border-ink/25 bg-transparent py-3 font-sans text-lg text-ink outline-none transition-colors focus:border-rose"
                      placeholder="Delhi"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-2 block font-sans text-[0.65rem] uppercase tracking-[0.25em] text-clay">
                    Your message
                  </label>
                  <textarea
                    data-testid="wish-message-input"
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    rows={4}
                    className="w-full resize-none border-b border-ink/25 bg-transparent py-3 font-sans text-lg text-ink outline-none transition-colors focus:border-rose"
                    placeholder="Wishing you a lifetime of love and laughter..."
                  />
                </div>
                <button
                  data-testid="wish-submit-btn"
                  type="submit"
                  disabled={loading}
                  className="rounded-full border border-ink bg-ink px-9 py-4 font-sans text-xs uppercase tracking-[0.25em] text-ivory transition-colors duration-500 hover:bg-rose hover:border-rose disabled:opacity-50"
                >
                  {loading ? "Sending..." : "Share your wish"}
                </button>
              </form>
            </Reveal>
          </div>

          {/* Wishes list */}
          <div className="lg:col-span-7">
            {wishes.length === 0 ? (
              <Reveal>
                <p className="font-serif text-2xl italic text-clay/70">
                  Be the first to leave a message for Amy &amp; Aman.
                </p>
              </Reveal>
            ) : (
              <div className="columns-1 gap-6 sm:columns-2" data-testid="wishes-list">
                {wishes.map((w, i) => (
                  <motion.div
                    key={w.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
                    className="mb-6 break-inside-avoid border border-ink/15 bg-ivory p-6"
                  >
                    <p className="font-serif text-xl italic leading-relaxed text-ink/90">
                      "{w.message}"
                    </p>
                    <p className="mt-4 font-sans text-[0.7rem] uppercase tracking-[0.2em] text-rose">
                      {w.name}
                      {w.location ? ` · ${w.location}` : ""}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WellWishes;
