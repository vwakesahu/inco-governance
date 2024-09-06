import React from "react";
import { Clock, Radio, ThumbsUp, Users } from "lucide-react";
import { motion } from "framer-motion";

export const ProposalItem = ({ proposal, onClick }) => (
  <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.3 }}
    className="border rounded-lg shadow-sm hover:bg-gray-100 transition-all duration-300 overflow-hidden cursor-pointer h-[200px] flex flex-col"
    onClick={onClick}
  >
    <div className="p-4 flex-grow flex flex-col">
      <div className="flex mb-2 gap-4 items-start gap-2">
        <div
          className={`w-2 h-2 rounded-full mr-3 ${proposal.statusColor} pt-1 flex-shrink-0`}
        >
          <Radio className="text-green-500" />
        </div>
        <h3 className="text-lg font-medium text-gray-800 line-clamp-2 overflow-hidden">
          {proposal.title}
        </h3>
      </div>
      <p className="text-sm text-gray-600 mb-4 flex-grow overflow-hidden line-clamp-3">
        {proposal.description}
      </p>
      <div className="flex justify-between text-xs text-gray-500 mt-auto w-full">
        <div className="flex gap-3 items-center">
          {/* <div className="flex items-center gap-1">
            <Users size={12}/>
            {proposal.author}
          </div> */}

          <div className="flex items-center gap-1">
            <Clock size={12}/>
            {proposal.timeLeft}
          </div>
        </div>

        <span className="flex items-center">
          <ThumbsUp size={12} className="mr-1" />
          {proposal.votes}
        </span>
      </div>
    </div>
    <div className={`h-1 w-full ${proposal.statusColor}`}></div>
  </motion.div>
);
