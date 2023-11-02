import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2">
      <MotionLink
        href="/"
        className="flex items-center justify-center w-16 h-16 font-bold border border-transparent border-solid rounded-full bg-dark text-light text-m dark:border-light"
        whileHover={{
          backgroundColor: [
            "#404258",
            "#474E68",
            "#50577A",
            "#6B728E",
            "#404258"
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        IP
      </MotionLink>

      
    </div>
  );
};

export default Logo;
