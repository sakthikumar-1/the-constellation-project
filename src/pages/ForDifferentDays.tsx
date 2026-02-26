import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const notes = [
  { title: "When you're happy", text: "Stay that way. The world needs that version of you. Not the strong version. Not the quiet version. The happy one. That's the real you." },
  { title: "When you're sad", text: "You don't have to explain it. Just feel it. It will pass. It always does. And when it does, I'll still be here. No explanation needed." },
  { title: "When you feel lonely", text: "Silence doesn't mean absence. Distance doesn't mean disconnect. You're not alone. You're just in a quiet moment. And quiet moments pass." },
  { title: "When you doubt yourself", text: "You've survived worse days. You've handled things alone. You've smiled when crying was easier. Doubt is a liar. Don't believe it." },
  { title: "When you feel small", text: "You are not small. You're just surrounded by the wrong scale. Step back. Breathe. You'll see how much space you actually take up. In a good way." },
  { title: "When you're overthinking", text: "Not everything needs solving. Some things just need time. Your mind creates problems your heart doesn't feel. Rest. Let time do its work." },
  { title: "When you feel tired", text: "Rest. You don't always have to be strong. Strength isn't about never stopping. It's about knowing when to pause. Pause now." },
  { title: "When you feel proud", text: "You earned it. Own it. Don't shrink. Don't downplay. Stand in it. You did that. Let it feel good." },
  { title: "When you feel lost", text: "You always find your way back. You always do. Look back at your life. Every time you were lost, you found the path. This time won't be different." },
  { title: "When you need me", text: "You don't have to ask twice. You don't have to explain why. You don't have to prove it's urgent. Just say the word. I'll be there." },
];

const ForDifferentDays = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 relative" style={{ background: "hsl(20 30% 93%)" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-3xl mb-2"
        style={{ color: "hsl(228 50% 10%)" }}
      >
        For Different Days
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm mb-8"
        style={{ color: "hsl(228 50% 10%)" }}
      >
        Medium length notes. Just enough.
      </motion.p>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-4xl w-full">
        {notes.map((note, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + i * 0.08 }}
            whileHover={{ scale: 1.03, boxShadow: "0 10px 30px rgba(0,0,0,0.1), 0 0 0 2px hsl(42 90% 63%)" }}
            onClick={() => setSelected(i)}
            className="bg-white rounded-2xl p-4 cursor-pointer shadow-sm transition-all"
          >
            <p className="font-heading text-sm" style={{ color: "hsl(228 50% 10%)" }}>{note.title}</p>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-6"
            style={{ background: "rgba(11,16,38,0.85)" }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-sm text-center"
              onClick={(e) => e.stopPropagation()}
            >
              <p className="font-heading text-lg mb-4" style={{ color: "hsl(228 50% 10%)" }}>{notes[selected].title}</p>
              <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(228 30% 35%)" }}>{notes[selected].text}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <NextButton to="/unaku-mattum" />
      <ThemeLine />
    </div>
  );
};

export default ForDifferentDays;
