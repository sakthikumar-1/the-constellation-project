import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalPage = () => {
  const navigate = useNavigate();
  const [wishMade, setWishMade] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);

  const handleWish = () => {
    setWishMade(true);
    setShowFlowers(true);
    
    // Flowers animation for 3 seconds, then show message
    setTimeout(() => {
      setShowFlowers(false);
      setShowFinalMessage(true);
    }, 3000);
  };

  // Generate flower positions
  const flowers = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    size: 20 + Math.random() * 30,
    rotation: Math.random() * 360,
    type: ['🌸', '🌼', '🌻', '🌺', '🌸', '🌷'][Math.floor(Math.random() * 6)]
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1026] to-[#1A1F35] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Theme line */}
      <div className="absolute bottom-4 right-4 text-white/30 text-sm font-light tracking-widest">
        The 1% That Stayed
      </div>

      {/* Flower Animation Overlay */}
      <AnimatePresence>
        {showFlowers && (
          <motion.div 
            className="absolute inset-0 pointer-events-none z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {flowers.map((flower) => (
              <motion.div
                key={flower.id}
                className="absolute text-4xl"
                style={{
                  left: flower.left,
                  top: '-10%',
                  fontSize: `${flower.size}px`,
                  rotate: `${flower.rotation}deg`
                }}
                initial={{ y: -100, opacity: 0, rotate: 0 }}
                animate={{ 
                  y: '120vh', 
                  opacity: [0, 1, 1, 0],
                  rotate: flower.rotation * 2
                }}
                transition={{
                  duration: 4,
                  delay: flower.delay,
                  ease: "easeOut"
                }}
              >
                {flower.type}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <motion.div 
        className="max-w-2xl w-full text-center space-y-8 z-0"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4 }
          }
        }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-playfair text-white"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Happy Birthday, Dhanam.
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 font-inter"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          You once thought you were 1%.
        </motion.p>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 font-inter"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          You're not a percentage.
        </motion.p>

        <motion.p 
          className="text-2xl md:text-3xl font-playfair text-[#F7C35C]"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          You're a constant.
        </motion.p>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 font-inter"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          Still here.
        </motion.p>

        <motion.p 
          className="text-xl md:text-2xl text-white/80 font-inter italic"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          So am I.
        </motion.p>

        {/* Final Message After Flowers */}
        <AnimatePresence>
          {showFinalMessage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <p className="text-2xl text-[#F7C35C] font-playfair">
                Wish sent.
              </p>
              <p className="text-xl text-white/60">
                Still here.
              </p>
              <p className="text-lg text-white/40 max-w-md mx-auto mt-8">
                This page will stay. Like some friendships. Like ours.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Wish Button - Hidden after click */}
        {!wishMade && (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <Button
              onClick={handleWish}
              className="bg-transparent border-2 border-[#F7C35C] text-[#F7C35C] hover:bg-[#F7C35C] hover:text-[#0B1026] rounded-full px-8 py-6 text-xl font-inter transition-all duration-300 transform hover:scale-105 mt-8"
            >
              Make a Wish <Sparkles className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>
        )}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-4 md:px-8">
        <Button
          variant="ghost"
          onClick={() => navigate('/timeline')}
          className="text-white/60 hover:text-white"
        >
          ← Back
        </Button>
        
        {wishMade && showFinalMessage && (
          <Button
            onClick={() => navigate('/')}
            className="text-white/60 hover:text-white"
          >
            Start Over
          </Button>
        )}
      </div>
    </div>
  );
};

export default FinalPage;
