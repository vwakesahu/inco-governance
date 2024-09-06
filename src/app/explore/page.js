"use client";

import React from "react";
import Header from "@/components/header";
import LayoutD from "@/components/layout";
import { ProjectCard } from "@/modules/explore/project-cards";

const Page = () => {
  return (
    <LayoutD>
      <Header title="Explore" />
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </LayoutD>
  );
};

export default Page;

export const projects = [
  {
    id: 1,
    name: "Aave",
    icon: "/aave-icon.svg",
    proposals: 681,
    votes: "3.1m",
    verified: true,
  },
  {
    id: 2,
    name: "ENS",
    icon: "/ens-icon.svg",
    proposals: 64,
    votes: "123k",
    verified: true,
  },
  {
    id: 3,
    name: "ApeCoin DAO",
    icon: "/apecoin-icon.svg",
    description: "ApeCoin DAO Voting: APE Improvement Proposals...",
    proposals: 298,
    votes: "135k",
    verified: true,
  },
  {
    id: 4,
    name: "Balancer",
    icon: "/balancer-icon.svg",
    proposals: 835,
    votes: "123k",
    verified: true,
  },
  {
    id: 5,
    name: "Lido",
    icon: "/lido-icon.svg",
    proposals: 320,
    votes: "76k",
    verified: true,
  },
  {
    id: 6,
    name: "Starknet",
    icon: "/starknet-icon.svg",
    description: "Starknet is a permissionless,...",
    proposals: 6,
    votes: "496",
    verified: true,
  },
  {
    id: 7,
    name: "SafeDAO",
    icon: "/safedao-icon.svg",
    description: "Unlock Ownership.",
    proposals: 43,
    votes: "22k",
    verified: true,
  },
  {
    id: 8,
    name: "Heroes of Mavia",
    icon: "/mavia-icon.svg",
    description: "Heroes of Mavia is a Web3 mobile strategy game...",
    proposals: 4,
    votes: "1.4k",
    verified: true,
  },
];
