import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Building2, Lock, Shield, ArrowRight } from "lucide-react";

interface BackingMechanism {
  icon: React.ReactNode;
  title: string;
  description: string;
  percentage: number;
}

interface BackingInfographicProps {
  mechanisms?: BackingMechanism[];
}

const defaultMechanisms: BackingMechanism[] = [
  {
    icon: <Building2 className="h-8 w-8" />,
    title: "Cash Reserves",
    description: "Held in regulated financial institutions",
    percentage: 40,
  },
  {
    icon: <Lock className="h-8 w-8" />,
    title: "Treasury Bonds",
    description: "Short-term government securities",
    percentage: 35,
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Secure Assets",
    description: "High-grade commercial paper",
    percentage: 25,
  },
];

const BackingInfographic = ({
  mechanisms = defaultMechanisms,
}: BackingInfographicProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Card className="p-8 bg-white w-full max-w-[1200px] mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-2">Backing Mechanism</h2>
        <p className="text-muted-foreground">
          Our stablecoin is fully backed by a diverse portfolio of secure assets
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8">
        {mechanisms.map((mechanism, index) => (
          <TooltipProvider key={mechanism.title}>
            <Tooltip>
              <TooltipTrigger>
                <div
                  className={`relative p-6 rounded-lg border transition-all duration-300 w-full md:w-[30%] 
                    ${hoveredIndex === index ? "scale-105 shadow-lg" : "scale-100"}
                    ${hoveredIndex !== null && hoveredIndex !== index ? "opacity-50" : "opacity-100"}
                  `}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <div className="flex flex-col items-center text-center gap-4">
                    <div className="p-4 rounded-full bg-primary/10 text-primary">
                      {mechanism.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{mechanism.title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {mechanism.description}
                    </p>
                    <div className="w-full bg-gray-100 rounded-full h-2 mt-4">
                      <div
                        className="bg-primary h-full rounded-full transition-all duration-500"
                        style={{
                          width: `${mechanism.percentage}%`,
                          transform:
                            hoveredIndex === index
                              ? "scaleX(1.05)"
                              : "scaleX(1)",
                        }}
                      />
                    </div>
                    <p className="text-lg font-semibold">
                      {mechanism.percentage}%
                    </p>
                  </div>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Click to learn more about {mechanism.title.toLowerCase()}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="flex items-center gap-2 text-primary hover:underline">
          View Detailed Breakdown
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>
    </Card>
  );
};

export default BackingInfographic;
