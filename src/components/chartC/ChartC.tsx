"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartC = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["A_L1", "A_L2", "A_L3" ], // Labels added
        datasets: [
          {
            label: "Current",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [0.947633982, 0.666002035, 0.940928459],
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

export default ChartC;
