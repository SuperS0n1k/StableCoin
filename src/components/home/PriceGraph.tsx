import React from "react";
import { Card } from "@/components/ui/card";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface PriceGraphProps {
  data?: {
    timestamp: string;
    price: number;
    usdPrice: number;
  }[];
  width?: number;
  height?: number;
}

const defaultData = [
  { timestamp: "00:00", price: 1.001, usdPrice: 1.0 },
  { timestamp: "04:00", price: 0.999, usdPrice: 1.0 },
  { timestamp: "08:00", price: 1.002, usdPrice: 1.0 },
  { timestamp: "12:00", price: 0.998, usdPrice: 1.0 },
  { timestamp: "16:00", price: 1.001, usdPrice: 1.0 },
  { timestamp: "20:00", price: 1.0, usdPrice: 1.0 },
  { timestamp: "24:00", price: 0.999, usdPrice: 1.0 },
];

const PriceGraph = ({
  data = defaultData,
  width = 800,
  height = 400,
}: PriceGraphProps) => {
  return (
    <Card className="p-6 bg-white w-full h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold">Price Stability</h3>
        <p className="text-sm text-muted-foreground">
          Real-time price comparison with USD
        </p>
      </div>

      <div className="w-full h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="timestamp" stroke="#888888" fontSize={12} />
            <YAxis
              domain={[0.995, 1.005]}
              stroke="#888888"
              fontSize={12}
              tickFormatter={(value) => `$${value.toFixed(3)}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e2e8f0",
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#0ea5e9"
              strokeWidth={2}
              dot={false}
              name="Stablecoin"
            />
            <Line
              type="monotone"
              dataKey="usdPrice"
              stroke="#94a3b8"
              strokeWidth={2}
              dot={false}
              name="USD"
              strokeDasharray="5 5"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 flex gap-4 justify-end">
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#0ea5e9]"></div>
          <span className="text-sm text-muted-foreground">Stablecoin</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-0.5 bg-[#94a3b8] border-dashed"></div>
          <span className="text-sm text-muted-foreground">USD</span>
        </div>
      </div>
    </Card>
  );
};

export default PriceGraph;
