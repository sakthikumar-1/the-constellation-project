import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const FriendshipCalculator = () => {
  const [stage, setStage] = useState(0); // 0=initial, 1=animating, 2=result

  const handleCalculate = () => {
    setStage(1);
    setTimeout(() => setStage(2), 3000);
  };

  const percentages = ["1%", "50%", "75%", "100%", "PERMANENT"];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card px-6">
      <FloatingParticles count={15} />

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-3xl text-foreground relative z-10 mb-8"
      >
        Friendship Calculator
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="glass rounded-3xl p-10 max-w-md w-full text-center relative z-10"
      >
        <p className="font-body text-sm text-muted-foreground mb-2">Total people in life</p>
        <p className="font-heading text-3xl text-foreground animate-pulse-btn">100%</p>

        <div className="h-px bg-accent/20 my-6" />

        <p className="font-body text-sm text-muted-foreground mb-2">What you thought</p>

        <AnimatePresence mode="wait">
          {stage === 0 && (
            <motion.p key="initial" className="font-heading text-2xl text-accent">1%</motion.p>
          )}
          {stage === 1 && (
            <motion.div key="anim" className="h-10 flex items-center justify-center">
              {percentages.map((p, i) => (
                <motion.p
                  key={p}
                  initial={{ opacity: 0, scale: 0.5, rotateX: 90 }}
                  animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1, 0.5], rotateX: [90, 0, 0, -90] }}
                  transition={{ delay: i * 0.6, duration: 0.6 }}
                  className="font-heading text-3xl text-primary absolute"
                >
                  {p}
                </motion.p>
              ))}
            </motion.div>
          )}
          {stage === 2 && (
            <motion.div key="result" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}>
              <p className="font-heading text-4xl text-primary animate-glow-text">PERMANENT</p>
            </motion.div>
          )}
        </AnimatePresence>

        {stage === 0 && (
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleCalculate}
            className="btn-gold mt-8"
          >
            Calculate
          </motion.button>
        )}

        {stage === 2 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <p className="font-body text-sm text-foreground mt-6">1% × consistency = permanent.</p>
            <p className="font-body text-sm text-accent mt-3">You were never 1%.</p>
            <p className="font-body text-sm text-accent">You were just waiting to be understood.</p>
            <p className="font-body text-xs text-muted-foreground mt-3">Some values don't shrink. They settle.</p>
          </motion.div>
        )}
      </motion.div>

      {stage === 2 && <NextButton to="/no-dates" />}
      <ThemeLine />
    </div>
  );
};

export default FriendshipCalculator;
