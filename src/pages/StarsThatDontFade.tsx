import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingParticles from "@/components/FloatingParticles";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const stars = [
  { id: 0, name: "The North Star", x: 20, y: 20, text: "Some points stay fixed.\nSo you can find your way.\nYou're that for me.", color: "hsl(42 90% 70%)" },
  { id: 1, name: "The Memory Star", x: 75, y: 15, text: "Not every moment needs a date.\nSome just stay.\nLike this one.", color: "hsl(42 80% 65%)" },
  { id: 2, name: "The Quiet Star", x: 15, y: 75, text: "The quiet ones shine longest.\nNo noise. Just light.\nLike you.", color: "hsl(275 40% 75%)" },
  { id: 3, name: "The Constant Star", x: 80, y: 70, text: "Others move. Others fade.\nYou don't.\nThat's rare.", color: "hsl(42 90% 63%)" },
  { id: 4, name: "The 1% Star", x: 48, y: 45, text: "They said you're 1%.\nBut look around.\nEvery star connects to you.\nWithout you, there is no constellation.\nThat's not percentage.\nThat's center.", color: "hsl(300 40% 70%)", special: true },
];

const StarsThatDontFade = () => {
  const [activeStar, setActiveStar] = useState<number | null>(null);
  const [viewed, setViewed] = useState<Set<number>>(new Set());

  const handleStarClick = (id: number) => {
    setActiveStar(id);
    setViewed(prev => new Set(prev).add(id));
  };

  const allViewed = viewed.size === stars.length;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6" style={{ background: "#030514" }}>
      <FloatingParticles count={40} colors={["gold", "purple"]} />

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-heading text-3xl md:text-4xl text-foreground text-center relative z-10 mb-2"
      >
        Stars That <span className="text-primary">Don't Fade</span>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5 }}
        className="font-body text-sm text-muted-foreground text-center relative z-10 mb-8"
      >
        Not all light is visible. But it's always there.
      </motion.p>

      {/* Constellation area */}
      <div className="relative w-full max-w-lg h-80 md:h-96 z-10">
        {/* Connection lines */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
          {stars.map((s1, i) =>
            stars.slice(i + 1).map((s2, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={s1.x} y1={s1.y} x2={s2.x} y2={s2.y}
                stroke="hsl(42 90% 63%)"
                strokeWidth="0.3"
                strokeDasharray="2 2"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeStar !== null ? 0.6 : 0.2 }}
                transition={{ delay: 1 + i * 0.1 }}
              />
            ))
          )}
        </svg>

        {/* Stars */}
        {stars.map((star) => (
          <motion.div
            key={star.id}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + star.id * 0.2 }}
            className="absolute cursor-pointer group"
            style={{ left: `${star.x}%`, top: `${star.y}%`, transform: "translate(-50%, -50%)" }}
            onClick={() => handleStarClick(star.id)}
            whileHover={{ scale: 1.3 }}
          >
            <div
              className="rounded-full animate-twinkle"
              style={{
                width: star.special ? 20 : 12,
                height: star.special ? 20 : 12,
                background: star.color,
                boxShadow: `0 0 15px ${star.color}, 0 0 30px ${star.color}`,
              }}
            />
            <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[0.6rem] font-body text-foreground opacity-0 group-hover:opacity-80 transition-opacity whitespace-nowrap">
              {star.name}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Star message */}
      <AnimatePresence>
        {activeStar !== null && (
          <motion.div
            key={activeStar}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="relative z-10 glass rounded-2xl p-6 max-w-sm text-center mt-4 cursor-pointer"
            onClick={() => setActiveStar(null)}
          >
            <p className="font-heading text-sm text-primary mb-2">{stars[activeStar].name}</p>
            <p className="font-body text-sm text-foreground whitespace-pre-line">{stars[activeStar].text}</p>
          </motion.div>
        )}
      </AnimatePresence>

      {allViewed && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="relative z-10 text-center mt-6"
        >
          <p className="font-body text-sm text-foreground">
            A constellation isn't stars. It's connections.
          </p>
          <p className="font-body text-sm text-primary mt-1">
            And you? You're every connection here.
          </p>
        </motion.div>
      )}

      <div className="relative z-10">
        <NextButton to="/how-we-grew" label="Next → See How We Grew" />
      </div>
      <ThemeLine />
    </div>
  );
};

export default StarsThatDontFade;
