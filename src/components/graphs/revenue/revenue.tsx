import React from "react";
import ReactECharts from "echarts-for-react";
import "./revenue.css";

const RevenueChartCard: React.FC = () => {
  const option = {
    grid: {
      top: 50,
      left: 40,
      right: 20,
      bottom: 40,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: { color: "#666" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#eee" } },
      axisLabel: {
        formatter: "{value}M",
        color: "#666",
      },
    },
    innerWidth: "600px",
    series: [
      {
        name: "Previous Week",
        type: "line",
        data: [7, 17, 12, 10, 15, 23],
        smooth: true,
        symbol: "none",
        lineStyle: { width: 3, color: "#7db1d9" },
        areaStyle: {
          color: "rgba(125, 177, 217, 0.1)",
        },
      },
      {
        name: "Current Week",
        type: "line",
        data: [12, 9, 11, 15, null, null],
        smooth: true,
        symbol: "none",
        lineStyle: { width: 3, color: "#000" },
      },
      {
        name: "Current Week",
        type: "line",
        data: [null, null, null, 15, 20, 19], // dotted part only
        smooth: true,
        symbol: "none",
        lineStyle: { width: 3, type: "dotted", color: "#000" },
      },

      //   {
      //     name: "Current Week Projected",
      //     type: "line",
      //     data: [null, null, null, 15, 20, 19],
      //     smooth: true,
      //     symbol: "none",
      //     lineStyle: { width: 3, type: "dotted", color: "#000" },
      //   },
    ],
    tooltip: {
      trigger: "axis",
      formatter: (params: any) => {
        let result = `${params[0].axisValue}<br/>`;
        params.forEach((item: any) => {
          if (item.value !== null) {
            result += `${item.marker} ${item.seriesName}: ${item.value}M<br/>`;
          }
        });
        return result;
      },
    },
  };

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="title">Revenue</h3>
        <div className="legend">
          <span className="legend-item">
            <span className="dot black" /> Current Week <strong>$58,211</strong>
          </span>
          <span className="legend-item">
            <span className="dot blue" /> Previous Week <strong>$68,768</strong>
          </span>
        </div>
      </div>
      <ReactECharts
        option={option}
        style={{ height: "300px", width: "550px" }}
      />
    </div>
  );
};

export default RevenueChartCard;
