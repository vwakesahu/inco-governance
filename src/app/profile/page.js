"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import LayoutD from "@/components/layout";
import { FiShare2, FiSettings } from "react-icons/fi";
import { CopyIcon, CheckIcon } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useWallets } from "@privy-io/react-auth";
import { truncateAddress } from "@/utils/truncateAddress";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ProfilePage = () => {
  const [activities, setActivities] = useState([]);
  const { wallets } = useWallets();
  const w0 = wallets[0];
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (w0?.address) {
      await navigator.clipboard.writeText(w0.address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    }
  };

  return (
    <LayoutD>
      <Header title="Profile" />
      <div className="relative w-full">
        {/* Gradient background */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-blue-100 via-blue-200 to-blue-300"></div>

        {/* Main content */}
        <div className="relative mx-auto px-4 pt-24 pb-8">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center relative w-full h-full">
              <div className="absolute -bottom-32">
                <img
                  src="nft.jpg"
                  alt="Profile"
                  className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
                />
              </div>
            </div>
            <div className="flex absolute top-4 right-4">
              <button className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 mr-2 shadow">
                <FiShare2 size={20} />
              </button>
              <button className="p-2 rounded-full bg-white text-gray-600 hover:bg-gray-100 shadow">
                <FiSettings size={20} />
              </button>
            </div>
          </div>

          <div className="rounded-lg shadow-sm pt-12 mt-20">
            {w0?.address && (
              <div className="pt-4">
                <h1 className="text-3xl font-bold">
                  {truncateAddress(w0?.address, 7, 4)}
                </h1>
                <p className="text-gray-600 flex items-center mt-1">
                  {truncateAddress(w0?.address, 7, 4)}
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button
                          onClick={handleCopy}
                          className="ml-2 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          {copied ? (
                            <CheckIcon size={15} className="text-green-500" />
                          ) : (
                            <CopyIcon size={15} />
                          )}
                        </button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{copied ? "Copied!" : "Copy address"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </p>
              </div>
            )}
            <h2 className="text-sm font-semibold mb-4 mt-10">ACTIVITY</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Space</TableHead>
                  <TableHead>Proposals</TableHead>
                  <TableHead>Votes</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {activities.length > 0 ? (
                  activities.map((activity, index) => (
                    <TableRow key={index}>
                      <TableCell>{activity.space}</TableCell>
                      <TableCell>{activity.proposals}</TableCell>
                      <TableCell>{activity.votes}</TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell
                      colSpan={3}
                      className="text-center text-gray-500"
                    >
                      <div className="flex items-center justify-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clipRule="evenodd"
                          />
                        </svg>
                        This user does not have any activities yet.
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </LayoutD>
  );
};

export default ProfilePage;
