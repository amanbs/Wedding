import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music, Pause } from "lucide-react";

// Floating background music toggle.
const TRACK = "/audio/background.mp3";

export const MusicToggle = () => {
  const audioRef = useRef(null);
  const startedRef = useRef(false);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const a = new Audio(TRACK);
    a.loop = true;
    a.volume = 0.4;
    audioRef.current = a;

    // Start on the guest's first interaction (browsers block autoplay before that)
    const startOnGesture = () => {
      if (startedRef.current) return;
      a.play()
        .then(() => {
          startedRef.current = true;
          setPlaying(true);
          cleanup();
        })
        .catch(() => {});
    };
    const events = ["pointerdown", "keydown", "touchstart", "wheel"];
    const cleanup = () =>
      events.forEach((e) => window.removeEventListener(e, startOnGesture));
    events.forEach((e) => window.addEventListener(e, startOnGesture, { once: false, passive: true }));

    return () => {
      cleanup();
      a.pause();
    };
  }, []);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    startedRef.current = true;
    if (playing) {
      a.pause();
      setPlaying(false);
    } else {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    }
  };

  return (
    <button
      data-testid="music-toggle-btn"
      onClick={toggle}
      aria-label={playing ? "Pause music" : "Play music"}
      className="fixed bottom-6 right-6 z-[9999] flex h-14 w-14 items-center justify-center rounded-full border border-ink/20 bg-ivory/80 backdrop-blur-md text-ink transition-colors hover:bg-ink hover:text-ivory"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={playing ? "on" : "off"}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.6, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {playing ? <Pause size={18} /> : <Music size={18} />}
        </motion.span>
      </AnimatePresence>
      {playing && (
        <motion.span
          className="absolute inset-0 rounded-full border border-rose"
          animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeOut" }}
        />
      )}
    </button>
  );
};

export default MusicToggle;
