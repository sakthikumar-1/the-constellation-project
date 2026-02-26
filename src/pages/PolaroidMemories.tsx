import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NextButton from "@/components/NextButton";
import ThemeLine from "@/components/ThemeLine";

import photo1 from "@/assets/photo1.png";
import photo2 from "@/assets/photo2.png";
import photo3 from "@/assets/photo3.png";
import photo4 from "@/assets/photo4.jpg";
import photo5 from "@/assets/photo5.png";

const photos = [
{ src: photo1, caption: "You find happiness in small things.", memory: "You don't need big stages.\nYou make moments feel enough.", rotate: -2 },
{ src: photo2, caption: "Warmth follows you.", memory: "You don't try to be light.\nBut people feel better around you.", rotate: 3 },
{ src: photo3, caption: "Grace without noise.", memory: "You never compete.\nYou just exist.\nAnd that is rare.", rotate: -1 },
{ src: photo4, caption: "Strength in silence.", memory: "You handle things quietly.\nBut you handle them fully.", rotate: 2 },
{ src: photo5, caption: "Calm in a crowd.", memory: "Even when surrounded,\nyou carry your own peace.", rotate: -3 }];


const PolaroidMemories = () => {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-6 relative overflow-hidden" style={{ background: "hsl(37 100% 97%)" }}>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-3xl md:text-4xl mb-2"
        style={{ color: "hsl(228 50% 10%)" }}>

        Moments That Still Matter
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 0.3 }}
        className="font-body text-sm mb-10"
        style={{ color: "hsl(228 50% 10%)" }}>

        Five photos. Infinite meaning.
      </motion.p>

      <div className="flex flex-wrap justify-center gap-6 max-w-5xl">
        {photos.map((photo, i) =>
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + i * 0.15 }}
          whileHover={{ scale: 1.05, rotate: 0, zIndex: 10, boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          onClick={() => setSelected(i)}
          className="cursor-pointer p-3 pb-10 rounded-sm shadow-lg transition-all"
          style={{
            background: "white",
            transform: `rotate(${photo.rotate}deg)`,
            width: 240
          }}>

            <img
            src={photo.src}
            alt={photo.caption}
            className="w-full h-56 rounded-sm object-contain"
            loading="lazy" />

            <p className="font-accent text-base mt-3 text-center" style={{ color: "hsl(228 30% 25%)" }}>
              {photo.caption}
            </p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected !== null &&
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-6"
          style={{ background: "rgba(11,16,38,0.85)" }}
          onClick={() => setSelected(null)}>

            <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-white rounded-xl p-6 max-w-sm text-center"
            onClick={(e) => e.stopPropagation()}>

              <img src={photos[selected].src} alt="" className="w-full h-64 object-cover rounded-lg mb-4" />
              <p className="font-heading text-lg mb-3" style={{ color: "hsl(228 50% 10%)" }}>{photos[selected].caption}</p>
              <p className="font-body text-sm whitespace-pre-line" style={{ color: "hsl(228 30% 35%)" }}>
                {photos[selected].memory}
              </p>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="font-body text-sm mt-10"
        style={{ color: "hsl(228 30% 35%)", opacity: 0.7 }}>

        Few photos. But they say enough.
      </motion.p>

      <NextButton to="/the-constant" />
      <ThemeLine />
    </div>);

};

export default PolaroidMemories;