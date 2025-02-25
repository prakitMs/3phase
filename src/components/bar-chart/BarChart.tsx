"use client";

import { useEffect, useRef } from "react";
import Chart, { ChartConfiguration } from "chart.js/auto";

interface BarChartProps {
  information: Record<string, any>;
  color?: string;
  title?: string;
}

const DEFAULT_SETTING: ChartConfiguration = {
  type: "bar",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
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

const BarChart = ({
  information,
  color = "rgb(255, 0, 0)",
  title,
}: BarChartProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const { labels, data } = Object.keys(information)?.reduce<{
      labels: string[];
      data: number[];
    }>(
      (result, label) => {
        return {
          // => ["vu1N"] => ["vu1N","vu2N"]
          labels: [...result.labels, label],
          //  information.vu1N
          data: [...result.data, information[label]],
        };
      },
      { labels: [], data: [] }
    );

    const chartInstance = new Chart(ctx, {
      ...DEFAULT_SETTING,
      data: {
        ...DEFAULT_SETTING.data,
        labels,
        datasets: [
          {
            label: title,
            barPercentage: 0.5,
            barThickness: 15,
            maxBarThickness: 20,
            minBarLength: 5,
            data,
            backgroundColor: color,
          },
        ],
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} className=""></canvas>;
};

export default BarChart;
