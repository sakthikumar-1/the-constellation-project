import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const entries = [
  { title: "The first real conversation.", desc: "We didn't just talk. We understood." },
  { title: "The first pointless fight.", desc: "We argued. We didn't leave." },
  { title: "The first comfortable silence.", desc: "No words. Still connection." },
  { title: "The day nothing special happened.", desc: "But we still spoke. That's the point." },
];

const NoDatesJustImpact = () => (
  <div className="min-h-screen flex flex-col items-center justify-center px-6 py-12" style={{ background: "hsl(37 100% 97%)" }}>
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="font-heading text-3xl mb-10"
      style={{ color: "hsl(228 50% 10%)" }}
    >
      No Dates. Just Impact.
    </motion.h1>

    <div className="max-w-md w-full relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5" style={{ background: "hsl(42 90% 63% / 0.3)" }} />
      
      {entries.map((entry, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 + i * 0.3 }}
          className="pl-10 pb-8 relative"
        >
          <div className="absolute left-2.5 top-1 w-3 h-3 rounded-full" style={{ background: "hsl(42 90% 63%)" }} />
          <p className="font-heading text-lg" style={{ color: "hsl(228 50% 10%)" }}>{entry.title}</p>
          <p className="font-body text-sm mt-1" style={{ color: "hsl(228 30% 40%)" }}>{entry.desc}</p>
        </motion.div>
      ))}
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="text-center mt-4"
    >
      <p className="font-body text-sm" style={{ color: "hsl(228 30% 35%)" }}>
        Not every bond needs celebration.
      </p>
      <p className="font-body text-sm" style={{ color: "hsl(228 30% 35%)" }}>
        Some just need continuation.
      </p>
    </motion.div>

    <NextButton to="/final" />
    <ThemeLine />
  </div>
);

export default NoDatesJustImpact;
