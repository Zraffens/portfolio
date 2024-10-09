import React, { useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const ProjectShowcase = ({
  title,
  subtitle,
  projectImage,
  themeColor = "#0066cc",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        className="relative overflow-hidden rounded-2xl shadow-2xl"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background gradient */}
        <motion.div
          className="absolute inset-0"
          animate={{
            background: isHovered
              ? `linear-gradient(to bottom, ${themeColor}, ${themeColor})`
              : "linear-gradient(to bottom, #222, #111)",
          }}
          transition={{ duration: 0.3 }}
        />

        {/* Outer border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10" />

        {/* Inner border with gap */}
        <div className="absolute inset-[3px] rounded-xl border border-white/20 bg-[#111]">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent" />
        </div>

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

        {/* Bottom shadow */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};

export default ProjectShowcase;
