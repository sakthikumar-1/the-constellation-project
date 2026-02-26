import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const stages = [
  { emoji: "🌱", label: "Foundation", delay: 0 },
  { emoji: "🌿", label: "Strength", delay: 2 },
  { emoji: "🌳", label: "Reach", delay: 4 },
  { emoji: "🌲", label: "Grow", delay: 6 },
  { emoji: "🌸", label: "Full Bloom", delay: 8 },
];

const words = ["Trust", "Silence", "Laughs", "Fights", "Understanding", "Respect", "Patience", "Loyalty", "Support", "Presence"];

const HowWeGrew = () => {
  const [currentStage, setCurrentStage] = useState(0);

  useEffect(() => {
    const timers = stages.map((_, i) =>
      setTimeout(() => setCurrentStage(i), (i * 2 + 0.5) * 1000)
    );
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card px-6 py-12">
      <FloatingParticles count={15} />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl md:text-4xl text-primary relative z-10 mb-10"
      >
        How We Grew
      </motion.h1>

      <div className="relative z-10 flex flex-col items-center gap-2">
        {stages.map((stage, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={currentStage >= i ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, type: "spring" }}
            className="flex items-center gap-3"
          >
            <span className={`text-3xl md:text-4xl ${i === stages.length - 1 ? "text-5xl md:text-6xl" : ""}`}>{stage.emoji}</span>
            <span className="font-accent text-lg text-primary">{stage.label}</span>
          </motion.div>
        ))}
      </div>

      {currentStage >= 4 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 flex flex-wrap justify-center gap-3 mt-8 max-w-md"
        >
          {words.map((word, i) => (
            <motion.span
              key={word}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="font-accent text-base text-primary/80 animate-float px-2"
              style={{ animationDelay: `${i * 0.3}s` }}
            >
              🌸 {word}
            </motion.span>
          ))}
        </motion.div>
      )}

      {currentStage >= 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
          className="relative z-10 text-center mt-8"
        >
          <p className="font-heading text-xl text-foreground">
            Roots don't show. But they <span className="text-primary">hold everything</span>.
          </p>
          <p className="font-body text-sm text-muted-foreground mt-3">We grew without forcing it.</p>
          <p className="font-body text-sm text-muted-foreground">That's the best kind of growth.</p>
          <NextButton to="/for-different-days" />
        </motion.div>
      )}

      <ThemeLine />
    </div>
  );
};

export default HowWeGrew;
