import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Navbar from "../components/navbar";
import ProjectShowcase from "../components/showcase";
import farmbuddy from "../assets/farmbuddy.png"

const LandingPage = () => {
  const [text, setText] = useState("");
  const text1 = `hi I'm Abhinav`
  const text2 = `I like to build stuffs`
  const fullText = `hii I'm Abhinav\nI like to build stuffs`;

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-black text-white">
      <div className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-center relative z-10"
        >
          <pre className="font-extralight whitespace-pre-line">
            <span className="glow-strong text-7xl">
              {text.split("\n").slice(0, 1).join("\n")}
            </span>
            <br />
            <br />
            <span className="glow-weak text-3xl">
              {text.split("\n").slice(1).join("\n")}
            </span>
            <motion.span
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              className="inline-block w-2 h-8 bg-white ml-1 align-middle"
            />
          </pre>
        </motion.div>
        <motion.div
          className="absolute bottom-8 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} />
        </motion.div>
        <div className="absolute inset-0 bg-radial-gradient"></div>

        {/* Fading Gradient Overlay */}
        <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-transparent to-black"></div>
      </div>
      <div>
        {/* Content of the next section */}
        <Navbar />
      </div>
      <ProjectShowcase title="Farmbuddy" subtitle="farmbuddy aaaa" projectImage={farmbuddy} />
    </div>
  );
};

export default LandingPage;
