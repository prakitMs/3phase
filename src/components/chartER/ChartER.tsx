"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartER = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["E_R_L1", "E_R_L2", "E_R_L3" ,"E_R_Total"], // Labels added
        datasets: [
          {
            label: "Energy Reactive",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [1727, 207, 342,2276],
            backgroundColor: "rgb(0, 133, 123)", // Optional color
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
    });

    return () => {
      chartInstance.destroy(); // Cleanup chart on component unmount
    };
  }, []);

  return <canvas ref={chartRef} className=""></canvas>;
};

export default ChartER;
