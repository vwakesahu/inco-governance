import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Cpu, Palette, Megaphone } from "lucide-react";
import { ChannelCard } from "@/modules/home/channel-card";
import { ProposalItem } from "@/modules/home/proposal-item";
import Header from "./header";
import { allProposals } from "@/app/page";

const ProposalDashboard = ({
  title = "Proposals",
  emptyStateMessage = "No proposals available.",
}) => {
  const channels = [
    { name: "Space 1", icon: Zap, color: "border-l-blue-500" },
    { name: "Space 2", icon: Cpu, color: "border-l-green-500" },
    { name: "Space 3", icon: Palette, color: "border-l-purple-500" },
    { name: "Space 4", icon: Megaphone, color: "border-l-yellow-500" },
  ];

  const [selectedProposal, setSelectedProposal] = useState(null);
  const [selectedChannel, setSelectedChannel] = useState(channels[0].name);
  const [currentProposals, setCurrentProposals] = useState(
    allProposals[channels[0].name]
  );

  const handleChannelSelect = useCallback((channelName) => {
    console.log("first");
    setSelectedChannel(channelName);
    setCurrentProposals(allProposals[channelName]);
  }, []);

  return (
    <>
      <Header title={title} />
      <div className="flex-grow px-4 sm:px-6 lg:px-8 py-8 h-full">
        <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 h-full">
          <motion.div
            className="md:w-1/4 space-y-4 h-full"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            {channels.map((channel, index) => (
              <ChannelCard
                key={index}
                name={channel.name}
                icon={channel.icon}
                color={channel.color}
                isSelected={channel.name === selectedChannel}
                onClick={() => handleChannelSelect(channel.name)}
              />
            ))}
          </motion.div>

          <motion.div
            className="flex-grow w-full overflow-y-auto pb-32"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <h2 className="text-xl font-semibold mb-4 text-gray-800 sticky top-0 bg-background pb-4 border-b">
              Recent Proposals in {selectedChannel}
            </h2>
            <AnimatePresence mode="wait">
              {currentProposals.length > 0 ? (
                <motion.div
                  key={selectedChannel}
                  className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  {currentProposals.map((proposal, index) => (
                    <ProposalItem
                      key={proposal.id}
                      proposal={proposal}
                      onClick={() => setSelectedProposal(proposal)}
                    />
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="empty"
                  className="p-8 text-center text-gray-500 bg-white rounded-lg shadow-sm"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  {emptyStateMessage}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedProposal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProposal(null)}
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-semibold mb-4">
                {selectedProposal.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {selectedProposal.description || "No description available."}
              </p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>{selectedProposal.author}</span>
                <span>{selectedProposal.votes} votes</span>
                <span>{selectedProposal.timeLeft}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ProposalDashboard;
