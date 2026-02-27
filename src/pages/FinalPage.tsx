import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalPage = () => {
  const navigate = useNavigate();
  const [wishMade, setWishMade] = useState(false);
  const [showFlowers, setShowFlowers] = useState(false);
  const [showPhoto, setShowPhoto] = useState(false);
  const [showFinalMessage, setShowFinalMessage] = useState(false);
  const [glowIntensity, setGlowIntensity] = useState(0.5);

  // Photo glow animation effect
  useEffect(() => {
    if (showPhoto) {
      const interval = setInterval(() => {
        setGlowIntensity(prev => 0.3 + Math.random() * 0.7);
      }, 800);
      return () => clearInterval(interval);
    }
  }, [showPhoto]);

  const handleWish = () => {
    setWishMade(true);
    setShowFlowers(true);
    
    // Flowers animation for 2.5 seconds
    setTimeout(() => {
      setShowFlowers(false);
      setShowPhoto(true);
      
      // Photo shows for 3 seconds with glow
      setTimeout(() => {
        setShowPhoto(false);
        setShowFinalMessage(true);
      }, 3000);
    }, 2500);
  };

  // Generate flower positions
  const flowers = Array.from({ length: 40 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    size: 20 + Math.random() * 40,
    rotation: Math.random() * 360,
    type: ['🌸', '🌼', '🌻', '🌺', '🌸', '🌷', '🌹', '🌿'][Math.floor(Math.random() * 8)]
  }));

  // Generate floating particles for photo background
  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    delay: Math.random() * 2,
    size: 4 + Math.random() * 8
  }));

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0B1026] to-[#1A1F35] flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Theme line */}
      <div className="absolute bottom-4 right-4 text-white/30 text-sm font-light tracking-widest z-20">
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
                className="absolute"
                style={{
                  left: flower.left,
                  top: '-10%',
                  fontSize: `${flower.size}px`,
                  rotate: `${flower.rotation}deg`
                }}
                initial={{ y: -100, opacity: 0, rotate: 0 }}
                animate={{ 
                  y: '120vh', 
                  opacity: [0, 1, 1, 0.8, 0],
                  rotate: flower.rotation * 3,
                  scale: [1, 1.2, 1, 0.8]
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  delay: flower.delay,
                  ease: "easeOut",
                  times: [0, 0.2, 0.6, 0.8, 1]
                }}
              >
                {flower.type}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Photo Animation with Glow */}
      <AnimatePresence>
        {showPhoto && (
          <motion.div 
            className="absolute inset-0 flex items-center justify-center z-15"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            {/* Floating particles around photo */}
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                className="absolute rounded-full bg-[#F7C35C]"
                style={{
                  left: particle.left,
                  top: particle.top,
                  width: particle.size,
                  height: particle.size,
                  filter: 'blur(2px)'
                }}
                animate={{
                  y: [0, -30, 0],
                  x: [0, 15, -15, 0],
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1]
                }}
                transition={{
                  duration: 4 + Math.random() * 3,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}

            {/* Photo with glow effect */}
            <motion.div
              className="relative"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {/* Glow rings */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: `0 0 ${50 * glowIntensity}px ${20 * glowIntensity}px rgba(247, 195, 92, ${glowIntensity * 0.8})`,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  transform: 'scale(1.2)'
                }}
              />
              
              {/* Multiple glow layers */}
              <motion.div 
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: `0 0 ${80 * glowIntensity}px ${30 * glowIntensity}px rgba(198, 164, 212, ${glowIntensity * 0.6})`,
                }}
                style={{
                  width: '100%',
                  height: '100%',
                  transform: 'scale(1.4)'
                }}
              />

              {/* The photo */}
              <motion.img 
                src="/photo5.png"
                alt="Dhanam"
                className="relative rounded-2xl shadow-2xl z-10"
                style={{
                  maxWidth: 'min(400px, 80vw)',
                  maxHeight: 'min(500px, 70vh)',
                  objectFit: 'cover',
                  border: '4px solid rgba(247, 195, 92, 0.5)'
                }}
                animate={{
                  rotateY: [0, 5, -5, 0],
                  rotateX: [0, 3, -3, 0]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence>
        {!showPhoto && !showFlowers && (
          <motion.div 
            className="max-w-2xl w-full text-center space-y-8 z-0"
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
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

            {/* Final Message After Photo */}
            <AnimatePresence>
              {showFinalMessage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="space-y-4"
                >
                  <motion.p 
                    className="text-3xl text-[#F7C35C] font-playfair"
                    animate={{ 
                      textShadow: ['0 0 10px gold', '0 0 20px gold', '0 0 10px gold']
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    Wish sent.
                  </motion.p>
                  <p className="text-xl text-white/60">
                    Still here.
                  </p>
                  <motion.p 
                    className="text-lg text-white/40 max-w-md mx-auto mt-8"
                    animate={{ opacity: [0.4, 0.8, 0.4] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    This page will stay. Like some friendships. Like ours.
                  </motion.p>
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
        )}
      </AnimatePresence>

      {/* Navigation Buttons */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-between px-4 md:px-8 z-20">
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
