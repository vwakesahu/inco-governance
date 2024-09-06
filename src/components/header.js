import React from "react";
import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <motion.div
      className=" bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="max-w-7xl px-4 sm:px-6 lg:px-8  py-4">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
      </div>
    </motion.div>
  );
};

export default Header;
