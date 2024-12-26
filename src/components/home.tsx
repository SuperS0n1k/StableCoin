import React from "react";
import Header from "./navigation/Header";
import HeroSection from "./home/HeroSection";
import StatsPanel from "./home/StatsPanel";
import BackingInfographic from "./home/BackingInfographic";

interface HomePageProps {
  onWalletConnect?: () => void;
  onTokenPurchase?: () => void;
  isWalletConnected?: boolean;
  walletAddress?: string;
  stats?: {
    marketCap: string;
    volume: string;
    holders: string;
  };
}

const HomePage = ({
  onWalletConnect = () => console.log("Wallet connect clicked"),
  onTokenPurchase = () => console.log("Token purchase clicked"),
  isWalletConnected = false,
  walletAddress = "0x1234...5678",
  stats = {
    marketCap: "$1.2B",
    volume: "$245M",
    holders: "125K",
  },
}: HomePageProps) => {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header
        onWalletConnect={onWalletConnect}
        onTokenPurchase={onTokenPurchase}
        isWalletConnected={isWalletConnected}
        walletAddress={walletAddress}
      />

      <main className="pt-[72px]">
        {/* Hero Section */}
        <HeroSection onCtaClick={() => console.log("Get Started clicked")} />

        {/* Stats Panel */}
        <section className="py-16 px-4 md:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StatsPanel stats={stats} />
          </div>
        </section>

        {/* Backing Infographic */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <BackingInfographic />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">StableCoin</h3>
            <p className="text-slate-400">
              The next generation of digital currency
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Whitepaper
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Telegram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
