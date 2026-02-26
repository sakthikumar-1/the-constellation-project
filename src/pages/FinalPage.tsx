import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import ThemeLine from "@/components/ThemeLine";
import photo5 from "@/assets/photo5.png";

const FinalPage = () => {
  const [wished, setWished] = useState(false);
  const [showAfter, setShowAfter] = useState(false);
  const [idleMessage, setIdleMessage] = useState(false);

  useEffect(() => {
    if (!wished) {
      const timer = setTimeout(() => setIdleMessage(true), 10000);
      return () => clearTimeout(timer);
    }
  }, [wished]);

  const handleWish = () => {
    setWished(true);
    setTimeout(() => setShowAfter(true), 4000);
  };

  const lines = [
    { text: "Happy Birthday, Dhanam.", style: "font-heading text-3xl md:text-4xl text-primary", delay: 0.3 },
    { text: "You once thought you were 1%.", style: "font-body text-lg text-foreground", delay: 1 },
    { text: "You're not a percentage.", style: "font-body text-lg text-foreground", delay: 1.7 },
    { text: "You're a constant.", style: "font-heading text-2xl text-primary", delay: 2.4 },
    { text: "Still here.", style: "font-body text-lg text-foreground", delay: 3.1 },
    { text: "So am I.", style: "font-body text-lg text-foreground italic", delay: 3.8 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card px-6 py-12">
      <FloatingParticles count={25} />

      {/* Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="relative z-10 mb-8"
      >
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-accent/30 shadow-lg">
          <img src={photo5} alt="Dhanam" className="w-full h-full object-cover" />
        </div>
        <div className="absolute inset-0 rounded-full" style={{ background: "hsl(275 30% 60% / 0.15)" }} />
      </motion.div>

      {/* Lines */}
      <div className="relative z-10 flex flex-col items-center gap-3 text-center">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: line.delay, duration: 0.7 }}
            className={line.style}
          >
            {line.text}
          </motion.p>
        ))}
      </div>

      {/* Wish button */}
      {!wished && (
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 5 }}
          onClick={handleWish}
          className="relative z-10 btn-gold text-xl px-10 py-4 mt-10 animate-pulse-btn"
        >
          Make a Wish ✨
        </motion.button>
      )}

      {/* Idle message */}
      <AnimatePresence>
        {idleMessage && !wished && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            className="relative z-10 font-body text-sm text-foreground mt-6"
          >
            You waited. So did I.
          </motion.p>
        )}
      </AnimatePresence>

      {/* Wish explosion */}
      <AnimatePresence>
        {wished && !showAfter && (
          <motion.div
            key="explosion"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-50 flex items-center justify-center"
            style={{ background: "hsl(228 50% 5%)" }}
          >
            <div className="relative">
              {Array.from({ length: 60 }).map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
                  animate={{
                    x: (Math.random() - 0.5) * 500,
                    y: (Math.random() - 0.5) * 500,
                    scale: [0, 1, 0.5],
                    opacity: [1, 1, 0],
                  }}
                  transition={{ duration: 2 + Math.random(), delay: Math.random() * 0.5 }}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    background: i % 3 === 0 ? "hsl(42 90% 63%)" : i % 3 === 1 ? "hsl(275 30% 75%)" : "white",
                  }}
                />
              ))}
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 }}
                className="font-heading text-5xl text-primary animate-glow-text"
              >
                DHANAM
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* After wish */}
      {showAfter && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="relative z-10 text-center mt-8"
        >
          <p className="font-heading text-xl text-primary">Wish sent.</p>
          <p className="font-body text-lg text-foreground mt-1">Still here.</p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 3 }}
          >
            <p className="font-body text-sm text-muted-foreground mt-6">This page will stay.</p>
            <p className="font-body text-sm text-muted-foreground">Like some friendships.</p>
            <p className="font-body text-sm text-primary mt-1">Like ours.</p>
          </motion.div>
        </motion.div>
      )}

      <ThemeLine />
    </div>
  );
};

export default FinalPage;
