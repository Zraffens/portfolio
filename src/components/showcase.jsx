import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectShowcase = ({ title, subtitle, projectImage, themeColor }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Link className="block w-full max-w-4xl mx-auto p-6">
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Vignette effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none`}
        />

        {/* Outer border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />

        {/* Inner border with gap */}
        <div className="absolute inset-[3px] rounded-xl border border-white/20 bg-[#111]" />
        <motion.div
          className={`absolute inset-[5px] rounded-xl border border-white/30 bg-[#111]`}
          animate={{
            background: isHovered
              ? `radial-gradient(circle at top,  ${themeColor}cc, ${themeColor}33, transparent 100%  )` // 4d is 30% opacity in hex
              : "radial-gradient(circle at top, rgba(255, 255, 255, 0.6), transparent 70%)",
          }}
          transition={{ background: { duration: 0.3, ease: "easeInOut" } }}
        ></motion.div>

        {/* Content container */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
            <ChevronRight className="text-white/50" size={24} />
          </div>

          {/* Project preview */}
          <motion.div
            className="relative rounded-lg overflow-hidden shadow-inner bg-gray-800"
            animate={{ y: isHovered ? -5 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={projectImage}
              alt="Project Preview"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </div>

        {/* Shine effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />
      </motion.div>
    </Link>
  );
};

export default ProjectShowcase;
