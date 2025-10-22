import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gray-950 particle-bg"
    >
      <div className="text-center">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="inline-block mb-8"
        >
          <Code2 className="w-16 h-16 text-cyan-400" />
        </motion.div>

        <div className="flex gap-3 justify-center">
          <motion.div
            className="w-3 h-3 bg-cyan-400 rounded-full loader-dot"
          />
          <motion.div
            className="w-3 h-3 bg-fuchsia-500 rounded-full loader-dot"
          />
          <motion.div
            className="w-3 h-3 bg-emerald-400 rounded-full loader-dot"
          />
        </div>
      </div>
    </motion.div>
  );
}
