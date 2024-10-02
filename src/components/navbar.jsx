import React, { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState("Work");

  return (
    <div className="w-full py-8 bg-gradient from-black to-transparent">
      <div className="max-w-[165px] mx-auto bg-[#f2f2f20d] rounded-full p-1 flex justify-between relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent opacity-5"></div>
        {["Work", "Info"].map((tab) => (
          <motion.button
            key={tab}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 relative ${
              activeTab === tab ? "text-white" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(tab)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {activeTab === tab && (
              <motion.div
                className="absolute inset-0 bg-[#212121] lighting rounded-full"
                layoutId="tabHighlight"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 20 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
            {/* {activeTab === tab && ( MAKE IT WORK LATER
              <motion.div
                className="absolute bottom-0 w-18 h-0.5 bg-white"
                layoutId="tabUnderline"
                initial={false}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
                style={{ translateX: "-50%" }}
              />
            )} */} 
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
