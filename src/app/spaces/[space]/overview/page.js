"use client";
import React from "react";
import Header from "@/components/header";
import LayoutD from "@/components/layout";
import { Button } from "@/components/ui/button";
import {
  PenIcon,
  TwitterIcon,
  GithubIcon,
  X,
  XIcon,
  Github,
  Radio,
} from "lucide-react";
import { BsPatchCheckFill } from "react-icons/bs";

export default function Page({ params }) {
  const spaceData = {
    name: "Aave",
    avatar: "/path-to-aave-avatar.png",
    proposals: 681,
    votes: "3.1m",
    followers: "149k",
    currentProposals: [
      {
        title: "[TEMP CHECK] BUIDL GSM",
        id: "#53f26",
        author: "aavelabs.eth",
        votes: 67,
        timeLeft: "2d left",
      },
      {
        title: "[ARFC] Orbit Program Renewal - Q3 2024",
        id: "#ea325",
        author: "XG17",
        votes: 82,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
      {
        title:
          "[TEMP CHECK] Superlend Profit Share Proposal, Deploying a Friendly Fork of Aave V3 on Etherlink (...",
        id: "#82c9a",
        author: "XG17",
        votes: 86,
        timeLeft: "2d left",
      },
    ],
  };

  return (
    <LayoutD linkset="space">
      <Header title="Overview" />
      <div className="w-full mx-auto px-4 py-8 h-full">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-4">
            <img
              src={"/nft.jpg"}
              // src={spaceData.avatar}
              alt={spaceData.name}
              className="w-16 h-16 rounded-lg"
            />
            <div>
              <h1 className="text-3xl font-bold flex items-center">
                {spaceData.name}
                <span className="ml-2 text-yellow-400">
                  <BsPatchCheckFill className="text-xl" />
                </span>
              </h1>
              <p className="text-gray-600 font-semibold">
                <span className="font-bold text-black">
                  {spaceData.proposals}
                </span>{" "}
                proposals ·{" "}
                <span className="font-bold text-black">{spaceData.votes}</span>{" "}
                votes ·{" "}
                <span className="font-bold text-black">
                  {spaceData.followers}
                </span>{" "}
                followers
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button className="bg-blue-500 hover:bg-blue-600">
              <PenIcon className="w-4 h-4" />
            </Button>
            <Button variant="outline">Following</Button>
          </div>
        </div>

        <div className="relative h-full">
          <h2 className="text-xl font-semibold mt-12 sticky top-0 bg-background border-b pb-2">
            PROPOSALS
          </h2>
          <ul className="space-y-4 h-full overflow-y-auto pt-4 pb-10">
            {spaceData.currentProposals.map((proposal) => (
              <li key={proposal.id} className="border-b pb-4 cursor-pointer">
                <div className="flex gap-2 items-center space-x-2 mb-1">
                  <div className=" rounded-full">
                    <Radio size={16} className="text-blue-600" />
                  </div>
                  <h3 className="font-medium">{proposal.title}</h3>
                </div>
                <p className="text-sm text-gray-600 ml-8">
                  {proposal.id} by {proposal.author} · {proposal.votes} votes ·{" "}
                  {proposal.timeLeft}
                </p>
              </li>
            ))}
          </ul>
          {/* <Button variant="link" className="mt-4">
            See more
          </Button> */}
        </div>
      </div>
    </LayoutD>
  );
}
