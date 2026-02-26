import { motion } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const cards = [
  { line1: "When things changed —", line2: "You didn't." },
  { line1: "When days were loud —", line2: "We stayed quiet." },
  { line1: "When time moved —", line2: "We didn't disappear." },
];

const TheConstant = () => (
  <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-background px-6">
    <FloatingParticles count={12} />
    <div className="relative z-10 flex flex-col items-center gap-8 text-center max-w-lg">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-4xl text-primary"
      >
        The Constant
      </motion.h1>

      {cards.map((card, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 + i * 0.3 }}
          whileHover={{ y: -4, boxShadow: "0 15px 40px rgba(198,164,212,0.15)" }}
          className="glass rounded-2xl p-8 w-full"
        >
          <p className="font-body text-lg text-foreground">{card.line1}</p>
          <p className="font-heading text-xl text-primary mt-2">{card.line2}</p>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-4"
      >
        <p className="font-heading text-xl text-accent">Dhanam, that's not 1%.</p>
        <p className="font-heading text-2xl text-primary mt-1">That's consistency.</p>
        <p className="font-body text-sm text-muted-foreground mt-3">And consistency doesn't need percentages.</p>
        <p className="font-body text-xs text-muted-foreground mt-1">And consistency is rare.</p>
      </motion.div>

      <NextButton to="/stars" />
    </div>
    <ThemeLine />
  </div>
);

export default TheConstant;
