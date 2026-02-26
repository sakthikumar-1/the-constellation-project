import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import ThemeLine from "@/components/ThemeLine";

const LockScreen = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = useCallback((e: React.FormEvent) => {
    e.preventDefault();
    if (password === "2702") {
      setUnlocked(true);
      setTimeout(() => navigate("/the-one-percent"), 1500);
    } else {
      setError(true);
      setTimeout(() => setError(false), 1000);
    }
  }, [password, navigate]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-background to-card animate-gradient-shift">
      <FloatingParticles count={30} />
      
      <AnimatePresence>
        {!unlocked ?
        <motion.div
          key="locked"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          className="relative z-10 flex flex-col items-center gap-5 px-6 text-center max-w-md">

            {/* Lock Icon */}
            <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-6xl animate-pulse-gold rounded-full p-4">

              🔒
            </motion.div>

            <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-heading text-2xl tracking-wide text-foreground">

              Some pages are not for everyone.
            </motion.p>

            <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-body text-lg text-muted-foreground">

              But this one is.
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-accent text-2xl text-primary animate-glow-text animate-float">The day you came to earth 


          </motion.p>

            <form onSubmit={handleSubmit} className="w-full flex flex-col items-center gap-3">
              <motion.input
              type="text"
              inputMode="numeric"
              maxLength={4}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter the key"
              className={`w-72 py-4 px-6 text-center text-lg rounded-full glass text-foreground placeholder:text-primary/40 outline-none transition-all duration-300 focus:border-primary focus:shadow-[0_0_25px_hsl(42_90%_63%/0.3)] focus:scale-[1.02] ${error ? "animate-shake border-destructive" : "border-2 border-accent/30"}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }} />

              
              {error &&
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-destructive text-sm font-body">

                  Nope. Try again.
                </motion.p>
            }
            </form>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ delay: 1.2 }}
            className="text-sm text-accent">

              Clue: DDMM
            </motion.p>

            <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.5 }}
            className="text-xs text-foreground mt-6">

              This is yours. No one else's.
            </motion.p>
          </motion.div> :

        <motion.div
          key="unlocked"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative z-10 flex flex-col items-center gap-4">

            <motion.div
            animate={{ scale: [1, 1.5, 1], rotate: [0, 360] }}
            transition={{ duration: 1 }}
            className="text-7xl">

              ✨
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      <ThemeLine />
    </div>);

};

export default LockScreen;