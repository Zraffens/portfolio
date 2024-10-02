import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const LandingPage = () => {
  const [text, setText] = useState("");
  const fullText = `Hii I like building stuffs.\n enjoy`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);

    return () => clearInterval(timer);
  }, []);


  return (
    <div className="bg-black min-h-screen flex flex-col justify-center items-center text-white relative">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <pre className="font-mono text-lg md:text-xl lg:text-2xl whitespace-pre-line">
          {text}
          <motion.span
            animate={{ opacity: [0, 1] }}
            transition={{ repeat: Infinity, duration: 0.7 }}
            className="inline-block w-2 h-5 bg-white ml-1"
          />
        </pre>
      </motion.div>
      <motion.div
        className="absolute bottom-8"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </div>
  );
};

export default LandingPage;
