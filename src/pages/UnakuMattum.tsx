import { useState } from "react";
import { motion } from "framer-motion";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

const tabs = [
  {
    label: "Things I Never Told You",
    items: [
      "I notice when you're quiet. Even when you smile.",
      "I remember small details you forget.",
      "I defend you in rooms you're not in.",
      "I compare other friendships to ours. They don't match.",
    ],
  },
  {
    label: "Why You're Different",
    items: [
      "You don't perform for attention.",
      "You value depth over noise.",
      "You stay real when others change.",
      "You stay steady when things shift.",
    ],
  },
  {
    label: "What I Respect",
    items: [
      "How you handle things alone.",
      "How you don't complain easily.",
      "How you care quietly.",
      "How you think about your family first.",
    ],
  },
  {
    label: "My Quiet Truth",
    text: "If you ever really need me, I'll be there. Not loudly. Not dramatically. Just there. No conditions. No explanations needed. That's not romance. That's choice. And I choose you. As my friend. Always.",
  },
];

const UnakuMattum = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 relative" style={{ background: "hsl(37 50% 88%)" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-3xl mb-1"
        style={{ color: "hsl(228 50% 10%)" }}
      >
        Unaku Mattum
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm italic mb-8"
        style={{ color: "hsl(228 50% 10%)" }}
      >
        The quiet truths.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-2 mb-8 max-w-2xl">
        {tabs.map((tab, i) => (
          <button
            key={i}
            onClick={() => setActiveTab(i)}
            className="font-body text-xs md:text-sm px-4 py-2 rounded-full transition-all"
            style={{
              color: activeTab === i ? "hsl(228 50% 10%)" : "hsl(228 30% 45%)",
              background: activeTab === i ? "white" : "transparent",
              boxShadow: activeTab === i ? "0 2px 10px rgba(0,0,0,0.08)" : "none",
              borderBottom: activeTab === i ? "2px solid hsl(42 90% 63%)" : "2px solid transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full"
      >
        {"items" in tabs[activeTab] ? (
          <div className="space-y-4">
            {(tabs[activeTab] as { items: string[] }).items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-xl p-4 shadow-sm"
              >
                <p className="font-body text-sm" style={{ color: "hsl(228 30% 25%)" }}>• {item}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="font-body text-sm leading-relaxed" style={{ color: "hsl(228 30% 25%)" }}>
              {(tabs[activeTab] as { text: string }).text}
            </p>
          </div>
        )}
      </motion.div>

      <NextButton to="/friendship-calculator" />
      <ThemeLine />
    </div>
  );
};

export default UnakuMattum;
