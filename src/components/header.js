import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { LogOut } from "lucide-react";
import { usePrivy } from "@privy-io/react-auth";

const Header = ({ title }) => {
  const { logout } = usePrivy();
  return (
    <motion.div
      className=" bg-white border-b"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className=" px-4 sm:px-6 lg:px-8  py-4 flex items-center justify-between">
        <h1 className="text-3xl font-semibold text-gray-900">{title}</h1>
        <Button className="bg-blue-500 hover:bg-blue-600" onClick={logout}>
          <LogOut className="h-5 w-5 mr-2" />
          Logout
        </Button>
      </div>
    </motion.div>
  );
};

export default Header;
