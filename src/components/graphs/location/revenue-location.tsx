import React from "react";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { MapChart } from "echarts/charts";
import { GeoComponent } from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";

echarts.use([MapChart, GeoComponent, CanvasRenderer]);

import worldGeoJson from "./custom.geo.json";

echarts.registerMap("world", worldGeoJson as any);

export default function RevenueByLocation() {
  const option = {
    title: {
      text: "Revenue by Location",
      left: "center",
      textStyle: { fontSize: 18, fontWeight: "bolder" },
    },
    tooltip: {
      trigger: "item",
      formatter: (params) => {
        return `${params.name}<br/>Revenue: ${params.value?.[2] || 0}`;
      },
    },
    geo: {
      map: "world",
      roam: true,
      itemStyle: {
        areaColor: "#d1e6fa",
        borderColor: "#fff",
      },
      emphasis: {
        itemStyle: { areaColor: "#a4c8f0" },
      },
    },
    series: [
      {
        name: "Revenue",
        type: "scatter",
        coordinateSystem: "geo",
        symbolSize: (val) => Math.max(val[2] / 5000, 12), // bubble size by revenue
        itemStyle: {
          color: "#000",
          borderColor: "#fff",
          borderWidth: 2,
          shadowBlur: 5,
          shadowColor: "rgba(0,0,0,0.3)",
        },
        data: [
          { name: "San Francisco", value: [-122.4194, 37.7749, 50000] },
          { name: "New York", value: [-74.006, 40.7128, 40000] },
          { name: "Australia", value: [133.7751, -25.2744, 30000] },
          { name: "Singapore", value: [103.8198, 1.3521, 20000] },
        ],
      },
    ],
  };

  return (
    <div style={{ height: "250px" }}>
      <ReactECharts option={option} style={{ height: "100%" }} zoom />
    </div>
  );
}
