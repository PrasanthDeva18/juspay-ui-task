import ReactECharts from "echarts-for-react";
import "./projection.css";

const ChartCard = () => {
  const option = {
    title: {
      text: "Projections vs Actuals",
      left: "0",
      top: "0",
      textStyle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "#0f172a",
      },
    },
    tooltip: { trigger: "axis" },
    grid: {
      top: 50,
      left: "5%",
      right: "5%",
      bottom: "5%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      axisLine: { lineStyle: { color: "#e5e7eb" } },
      axisLabel: { color: "#6b7280" },
    },
    yAxis: {
      type: "value",
      axisLine: { show: false },
      axisTick: { show: false },
      splitLine: { lineStyle: { color: "#e5e7eb" } },
      axisLabel: { color: "#6b7280" },
    },
    series: [
      {
        name: "Actuals",
        type: "bar",
        stack: "total",
        data: [18, 22, 20, 25, 15, 23],
        barWidth: "40%",
        itemStyle: {
          color: "rgba(168, 197, 218, 1)",
        },
      },
      {
        name: "Projections",
        type: "bar",
        stack: "total",
        data: [5, 3, 4, 5, 6, 4],
        itemStyle: { color: "#CFDFEB", borderRadius: [8, 8, 0, 0] },
      },
    ],
  };

  return (
    <div className="chart-card">
      <ReactECharts
        option={option}
        style={{ height: "220px", width: "100%" }}
      />
    </div>
  );
};

export default ChartCard;
