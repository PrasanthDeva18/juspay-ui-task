import React from "react";
import ReactECharts from "echarts-for-react";
import "./total-sales.css";

const TotalSalesCard: React.FC = () => {
  const option = {
    series: [
      {
        type: "pie",
        radius: ["60%", "90%"],
        avoidLabelOverlap: false,
        label: { show: false },
        emphasis: { label: { show: false } },
        padAngle: 5,
        data: [
          {
            value: 300.56,
            name: "Direct",
            itemStyle: {
              color: "#000000",
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          },
          {
            value: 135.18,
            name: "Affiliate",
            itemStyle: {
              color: "#a8d5ba",
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          },
          {
            value: 154.02,
            name: "Sponsored",
            itemStyle: {
              color: "#b3c6e7",
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          },
          {
            value: 48.96,
            name: "E-mail",
            itemStyle: {
              color: "#c2e0f0",
              borderColor: "#ffffff",
              borderWidth: 3,
            },
          },
        ],
      },
    ],
  };

  return (
    <div className="total-sales-card">
      <h2>Total Sales</h2>
      <div className="chart-container">
        <ReactECharts
          option={option}
          style={{ height: "200px", width: "100%" }}
        />
      </div>
      <div className="sales-legend">
        <div className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#000000" }}
          ></span>
          Direct <span className="sales-value">$300.56</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#a8d5ba" }}
          ></span>
          Affiliate <span className="sales-value">$135.18</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#b3c6e7" }}
          ></span>
          Sponsored <span className="sales-value">$154.02</span>
        </div>
        <div className="legend-item">
          <span
            className="legend-color"
            style={{ backgroundColor: "#c2e0f0" }}
          ></span>
          E-mail <span className="sales-value">$48.96</span>
        </div>
      </div>
    </div>
  );
};

export default TotalSalesCard;
