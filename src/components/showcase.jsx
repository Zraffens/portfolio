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
        style={{
          "--theme-color": themeColor,
        }}
      >
        {/* Vignette effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/80 pointer-events-none`}
        />

        {/* Outer border */}
        <div className="absolute inset-0 rounded-2xl border border-white/10">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/90 to-transparent" />
        </div>
        <div className="absolute inset-[16px] rounded-2xl bg-black" />

        {/* Inner border with gap */}
        <motion.div
          className="absolute inset-[8px] rounded-xl border"
          initial={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
          animate={{
            borderColor: isHovered
              ? "rgba(255, 255, 255, 0.5)"
              : "rgba(255, 255, 255, 0.2)",
          }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute top-0 left-0 right-0 h-[1px]"
            initial={{
              background:
                "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent)",
            }}
            animate={{
              background: isHovered
                ? "linear-gradient(to right, transparent, rgba(255, 255, 255, 1), transparent)"
                : "linear-gradient(to right, transparent, rgba(255, 255, 255, 0.6), transparent)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Default gradient */}
        <div
          className="absolute inset-[1px] rounded-xl bg-[#111]"
          style={{
            background:
              "radial-gradient(circle at top, rgba(255, 255, 255, 0.1), transparent 40%)",
          }}
        />

        {/* Hovered gradient with animated opacity */}
        <motion.div
          className="absolute inset-[8px] rounded-xl bg-[#111]"
          style={{
            background: `radial-gradient(circle at top, ${themeColor}80, ${themeColor}66, transparent 90%)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />

        {/* Content container */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">{title}</h2>
              <p className="text-sm text-gray-400">{subtitle}</p>
            </div>
            <motion.div
              animate={{ x: isHovered ? 10 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronRight className="text-white/50" size={36} />
            </motion.div>
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
