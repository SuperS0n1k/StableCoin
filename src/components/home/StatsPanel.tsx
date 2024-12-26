import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TrendingUp, Users, Wallet } from "lucide-react";

interface StatItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  change?: string;
}

const StatItem = ({ icon, label, value, change = "+5.2%" }: StatItemProps) => {
  return (
    <div className="flex flex-col items-center p-6 rounded-lg">
      <div className="mb-2 text-primary">{icon}</div>
      <motion.div
        className="text-3xl font-bold mb-1"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {value}
      </motion.div>
      <div className="text-sm text-muted-foreground mb-1">{label}</div>
      <div className="text-xs text-green-500">{change}</div>
    </div>
  );
};

interface StatsPanelProps {
  stats?: {
    marketCap: string;
    volume: string;
    holders: string;
  };
}

const defaultStats = {
  marketCap: "$1.2B",
  volume: "$245M",
  holders: "125K",
};

const StatsPanel = ({ stats = defaultStats }: StatsPanelProps) => {
  return (
    <Card className="w-full bg-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatItem
          icon={<Wallet className="w-6 h-6" />}
          label="Market Cap"
          value={stats.marketCap}
        />
        <StatItem
          icon={<TrendingUp className="w-6 h-6" />}
          label="24h Volume"
          value={stats.volume}
          change="+12.3%"
        />
        <StatItem
          icon={<Users className="w-6 h-6" />}
          label="Total Holders"
          value={stats.holders}
          change="+3.7%"
        />
      </div>
    </Card>
  );
};

export default StatsPanel;
