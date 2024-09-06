"use client";
import LayoutD from "@/components/layout";
import ProposalDashboard from "@/components/proposalDashboard";
import React from "react";

export default function Home() {
  return (
    <LayoutD>
      <ProposalDashboard />
    </LayoutD>
  );
}

export const allProposals = {
  "Space 1": [
    {
      id: "1a",
      title: "Improve Network Security",
      author: "Alice",
      votes: 15,
      timeLeft: "2d left",
    },
    {
      id: "1b",
      title: "Implement New Consensus Algorithm",
      author: "Bob",
      votes: 8,
      timeLeft: "4d left",
    },
  ],
  "Space 2": [
    {
      id: "2a",
      title: "Optimize Smart Contract Execution",
      author: "Charlie",
      votes: 12,
      timeLeft: "1d left",
    },
    {
      id: "2b",
      title: "Introduce New VM Instructions",
      author: "David",
      votes: 7,
      timeLeft: "5d left",
    },
  ],
  "Space 3": [
    {
      id: "3a",
      title: "Redesign UI for Mobile Wallets",
      author: "Eva",
      votes: 20,
      timeLeft: "3d left",
    },
    {
      id: "3b",
      title: "Create New NFT Marketplace Theme",
      author: "Frank",
      votes: 14,
      timeLeft: "2d left",
    },
  ],
  "Space 4": [
    {
      id: "4a",
      title: "Launch Community Outreach Program",
      author: "Grace",
      votes: 18,
      timeLeft: "6d left",
    },
    {
      id: "4b",
      title: "Organize Virtual Blockchain Conference",
      author: "Henry",
      votes: 22,
      timeLeft: "8d left",
    },
  ],
};
