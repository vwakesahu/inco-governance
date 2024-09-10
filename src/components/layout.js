import React from "react";
import { usePrivy } from "@privy-io/react-auth";
import Sidebar from "./sidebar";
import Loader from "./loader";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

const LayoutD = ({ children, linkset = "default" }) => {
  const { ready, login, authenticated } = usePrivy();

  const LoginUI = () => (
    <div className="h-full w-full flex items-center justify-center bg-gray-50">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Hey!, Welcome Back,</CardTitle>
          <CardDescription>Connect your wallet to get started</CardDescription>
        </CardHeader>
        <CardContent>
          <Button onClick={login} className="w-full bg-blue-500 hover:bg-blue-600">
            Connect Wallet
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <div className="flex h-screen">
      <Sidebar linkSet={linkset} />
      <main className="flex-grow">
        <div className="p-6 bg-gray-100 h-full">
          <div className="bg-white h-full rounded-lg shadow-sm overflow-hidden">
            {!ready ? (
              <div className="h-full w-full flex items-center justify-center">
                <Loader />
              </div>
            ) : authenticated ? (
              children
            ) : (
              <LoginUI />
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default LayoutD;
