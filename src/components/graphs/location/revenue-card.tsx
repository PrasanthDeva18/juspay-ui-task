import React from "react";
import "./revenue-style.css";
import RevenueByLocation from "./revenue-location";
import { Progress } from "@mantine/core";

interface RevenueData {
  location: string;
  revenue: number;
}

const revenueData: RevenueData[] = [
  { location: "New York", revenue: 72 },
  { location: "San Francisco", revenue: 39 },
  { location: "Sydney", revenue: 25 },
  { location: "Singapore", revenue: 61 },
];

const RevenueCard: React.FC = () => {
  return (
    <div className="revenue-card">
      <RevenueByLocation />
      <div className="revenue-list">
        {revenueData.map((item) => (
          <>
            <div
              key={item.location}
              className="revenue-item"
              data-revenue={item.revenue}
            >
              <p className="location">{item.location}</p>

              <p className="revenue">{item.revenue}K</p>
            </div>
            <div>
              <Progress
                size="xs"
                value={(item.revenue / 72) * 100}
                color="rgba(168, 197, 218, 1)"
              />
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default RevenueCard;
