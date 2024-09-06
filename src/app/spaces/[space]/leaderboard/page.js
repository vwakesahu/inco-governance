"use client";
import Header from "@/components/header";
import LayoutD from "@/components/layout";
import LeaderTable from "@/modules/leaderboard/leader-table";
import React from "react";

const Page = () => {
  return (
    <LayoutD linkset="space">
      <Header title="Leaderboard" />
      <div className="p-6 h-[90%]">
        <LeaderTable data={data} />
      </div>
    </LayoutD>
  );
};

export default Page;

export const data = [
  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },  {
    id: "1",
    name: "daciv.eth",
    address: "0xD03A...A7ff",
    proposals: 0,
    votes: 565,
    votesPercentage: 82.97,
  },
  {
    id: "2",
    name: "kongdata.eth",
    address: "0x972a...cEEd",
    proposals: 0,
    votes: 564,
    votesPercentage: 82.82,
  },
  {
    id: "3",
    name: "866.ethscriptions.eth",
    address: "0x344b...275a",
    proposals: 0,
    votes: 563,
    votesPercentage: 82.67,
  },
  {
    id: "4",
    name: "soseth.eth",
    address: "0x0516...b0F2",
    proposals: 0,
    votes: 563,
    votesPercentage: 82.67,
  },
  {
    id: "5",
    name: "3668.ethscriptions.eth",
    address: "0x70Dd...0086",
    proposals: 0,
    votes: 563,
    votesPercentage: 82.67,
  },
  {
    id: "6",
    name: "indigituseth.eth",
    address: "0x35E6...ec14",
    proposals: 0,
    votes: 562,
    votesPercentage: 82.53,
  },
  {
    id: "7",
    name: "sznews.eth",
    address: "0x9Ba6...3caE",
    proposals: 0,
    votes: 562,
    votesPercentage: 82.53,
  },
  {
    id: "8",
    name: "blockchian.eth",
    address: "0xbDa0...c7C3",
    proposals: 0,
    votes: 562,
    votesPercentage: 82.53,
  },
];
