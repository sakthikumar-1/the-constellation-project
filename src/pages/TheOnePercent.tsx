import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const lines = [
  { text: "You once said something.", font: "font-heading", size: "text-2xl", color: "text-foreground", delay: 0.5 },
  { text: "You said I'm just 1%.", font: "font-heading", size: "text-2xl", color: "text-foreground", delay: 2.5, highlight: "1%", highlightColor: "text-accent" },
  { text: "I didn't argue.", font: "font-body", size: "text-lg", color: "text-foreground", delay: 4.5 },
  { text: "I just remembered.", font: "font-body", size: "text-lg", color: "text-foreground", delay: 6 },
  { text: "Because sometimes 1% is the part that stays.", font: "font-body", size: "text-lg", color: "text-foreground", delay: 7.5 },
];

const TheOnePercent = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-6">
      <FloatingParticles count={15} />
      <div className="relative z-10 flex flex-col items-center gap-6 text-center max-w-lg">
        {lines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: line.delay, duration: 0.8 }}
            className={`${line.font} ${line.size} ${line.color}`}
          >
            {line.highlight
              ? line.text.split(line.highlight).map((part, j, arr) => (
                  <span key={j}>
                    {part}
                    {j < arr.length - 1 && (
                      <span className={`${line.highlightColor} text-3xl animate-glow-text`}>{line.highlight}</span>
                    )}
                  </span>
                ))
              : line.text}
          </motion.p>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 9, duration: 0.8 }}
          className="mt-4"
        >
          <p className="font-heading text-xl text-primary">
            And the part that stays?
          </p>
          <p className="font-heading text-xl text-primary mt-1">
            That's not small. That's everything.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11 }}
        >
          <NextButton to="/polaroid-memories" label="Continue →" />
        </motion.div>
      </div>
      <ThemeLine />
    </div>
  );
};

export default TheOnePercent;
