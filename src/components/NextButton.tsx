import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const NextButton = ({ to, label = "Next →" }: { to: string; label?: string }) => {
  const navigate = useNavigate();
  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={() => navigate(to)}
      className="btn-gold animate-pulse-btn mt-8"
    >
      {label}
    </motion.button>
  );
};

export default NextButton;
