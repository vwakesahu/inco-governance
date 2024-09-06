import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Home, FileText, Users, MessageSquare, Moon } from "lucide-react";

const Sidebar = () => (
  <div className="w-64 h-screen bg-gray-100 p-4 flex flex-col">
    <div className="flex items-center mb-8 px-2">
      <div className="w-28  rounded-md mr-2">
        <img src="/logo/inco.svg" className="w-full h-full" />
      </div>
      {/* <span className="text-xl font-semibold">Inco</span> */}
    </div>
    <nav className="flex-1">
      <SidebarItem icon={<Home size={20} />} label="Overview" />
      <SidebarItem icon={<FileText size={20} />} label="Proposals" />
      <SidebarItem icon={<Users size={20} />} label="Leaderboard" active />
      <SidebarItem icon={<MessageSquare size={20} />} label="Discussions" />
    </nav>
  </div>
);

const SidebarItem = ({ icon, label, active = false }) => (
  <div
    className={`flex items-center p-2 rounded-md mb-2 ${
      active
        ? "bg-[#3673F5]/10 text-[#3673F5]"
        : "text-gray-600 hover:bg-gray-200"
    }`}
  >
    {icon}
    <span className="ml-2">{label}</span>
  </div>
);

const LeaderboardTable = ({ users }) => (
  <Table className="relative">
    <TableHeader className="relative">
      <TableRow>
        <TableHead>User</TableHead>
        <TableHead className="text-right">Proposals</TableHead>
        <TableHead className="text-right">Votes</TableHead>
      </TableRow>
    </TableHeader>
    <TableBody>
      {users.map((user, index) => (
        <TableRow key={index}>
          <TableCell className="flex items-center space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage
                src={`https://api.dicebear.com/6.x/identicon/svg?seed=${user.name}`}
                alt={user.name}
              />
              <AvatarFallback>{user.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
            <div>
              <div className="font-medium">{user.name}</div>
              <div className="text-sm text-gray-500">{user.address}</div>
            </div>
          </TableCell>
          <TableCell className="text-right">
            <div>{user.proposals}</div>
            <div className="text-sm text-gray-500">
              {user.proposalsPercentage}%
            </div>
          </TableCell>
          <TableCell className="text-right">
            <div>{user.votes}</div>
            <div className="text-sm text-gray-500">{user.votesPercentage}%</div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

const TopBar = ({ address }) => (
  <div className="flex justify-between items-center p-4 border-b">
    <Input className="w-64" placeholder="Search for a proposal" />
    <div className="flex items-center">
      <Avatar className="h-8 w-8 mr-2">
        <AvatarFallback>{address.slice(0, 2)}</AvatarFallback>
      </Avatar>
      <span className="mr-4">{address}</span>
      <Button variant="ghost" size="icon">
        <Moon size={20} />
      </Button>
    </div>
  </div>
);

export default function Dashboard() {
  const users = [
    {
      name: "indigituseth.eth",
      address: "0x35E6...ec14",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "sznews.eth",
      address: "0x9Ba6...3caE",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "blockchian.eth",
      address: "0xbDa0...c7C3",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "reblt.eth",
      address: "0x7A3B...a145",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
    {
      name: "slmplex.eth",
      address: "0x0043...8760",
      proposals: 0,
      proposalsPercentage: 0,
      votes: 562,
      votesPercentage: 83.26,
    },
  ];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <TopBar address="0xc637...50FC" />
        <div className="overflow-y-auto relative">
          <h1 className="p-6 text-2xl font-semibold  sticky top-0 bg-background z-50 w-full">
            LEADERBOARD
          </h1>
          <div className="px-6">
            <LeaderboardTable users={users} />
          </div>
        </div>
      </div>
    </div>
  );
}
