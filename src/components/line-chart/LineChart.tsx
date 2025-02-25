"use client";

import { Chart, ChartConfiguration } from "chart.js";
import { useEffect, useRef } from "react";

interface LineChartProps {
  voltage: number[];
  labels: string[];
  color?: string;
  title: string;
}

const DEFAULT_OPTION: ChartConfiguration = {
  type: "line",
  data: {
    labels: [],
    datasets: [
      {
        label: "VoltageL1",
        tension: 0.2,
        data: [],
        borderColor: "rgb(255, 0, 0)",
        backgroundColor: "rgb(255, 0, 0)",
      },
    ],
  },
  options: {
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
  },
};

const LineChart = ({ voltage, labels, color, title }: LineChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      ...DEFAULT_OPTION,
      data: {
        labels,
        datasets: [
          {
            label: title,
            tension: 0.2,
            data: voltage,
            borderColor: color,
            backgroundColor: color,
          },
        ],
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef}></canvas>;
};

export default LineChart;
