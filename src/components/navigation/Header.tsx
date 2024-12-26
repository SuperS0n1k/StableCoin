import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Wallet, CreditCard } from "lucide-react";

interface HeaderProps {
  onWalletConnect?: () => void;
  onTokenPurchase?: () => void;
  isWalletConnected?: boolean;
  walletAddress?: string;
}

const Header = ({
  onWalletConnect = () => {},
  onTokenPurchase = () => {},
  isWalletConnected = false,
  walletAddress = "0x1234...5678",
}: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[72px] bg-white/80 backdrop-blur-sm border-b z-50">
      <div className="container mx-auto h-full px-4">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-xl font-bold">StableCoin</h1>
          </div>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-primary">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              About
            </a>
            <a href="#" className="text-sm font-medium hover:text-primary">
              Documentation
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            {/* Wallet Connect Button/Status */}
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant={isWalletConnected ? "outline" : "default"}
                  className="flex items-center gap-2"
                >
                  <Wallet className="h-4 w-4" />
                  {isWalletConnected ? walletAddress : "Connect Wallet"}
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Connect Your Wallet</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Button onClick={onWalletConnect} className="w-full">
                    MetaMask
                  </Button>
                  <Button onClick={onWalletConnect} className="w-full">
                    WalletConnect
                  </Button>
                  <Button onClick={onWalletConnect} className="w-full">
                    Coinbase Wallet
                  </Button>
                </div>
              </DialogContent>
            </Dialog>

            {/* Buy Token Button */}
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="default" className="flex items-center gap-2">
                  <CreditCard className="h-4 w-4" />
                  Buy Token
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Purchase Tokens</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="text-center p-4">
                    <p>Token purchase functionality will be implemented here</p>
                    <Button onClick={onTokenPurchase} className="mt-4">
                      Confirm Purchase
                    </Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
