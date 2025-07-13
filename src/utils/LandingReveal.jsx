import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LandingReveal = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isCompleting, setIsCompleting] = useState(false);

  useEffect(() => {
    const duration = 3000; // 3 seconds total
    const interval = 16; // ~60fps
    const increment = 100 / (duration / interval);

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setIsCompleting(true);
          setTimeout(onComplete, 800); // Smooth exit delay
          return 100;
        }
        return Math.min(prev + increment, 100);
      });
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed inset-0 z-50 flex items-center justify-center"
      >
        {/* Minimal background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-grey-800 via-gray-900 to-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {/* Subtle animated grid pattern */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
              backgroundSize: "24px 24px",
            }}
            animate={{
              backgroundPosition: ["0px 0px", "24px 24px", "0px 0px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          {/* Progress counter with smooth number animation */}
          <motion.div
            className="relative mb-12"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <motion.div
              className="text-6xl md:text-[104px] font-light text-white tracking-wider mb-4"
              animate={{
                textShadow: [
                  "0 0 0px rgba(255,255,255,0)",
                  "0 0 20px rgba(255,255,255,0.2)",
                  "0 0 10px rgba(255,255,255,0.1)",
                ],
                scale: [0.98, 1.02, 1],
              }}
              transition={{
                duration: 3,
                ease: "easeOut",
              }}
            >
              {Math.floor(progress).toString().padStart(2, "0")}
            </motion.div>

            {/* Progress bar with smooth fill animation */}
            <div className="w-64 h-px bg-gray-800 mx-auto relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-gradient-to-r from-white to-gray-300"
                initial={{ width: "0%" }}
                animate={{
                  width: `${progress}%`,
                  boxShadow:
                    progress > 50 ? "0 0 8px rgba(255,255,255,0.3)" : "none",
                }}
                transition={{
                  duration: 0.1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LandingReveal;
