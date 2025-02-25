"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


const LineChartEnergyCost = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12"], // Labels added
        datasets: [
          {
            label: "Energy Cost",
            tension: 0.2,

            data: [100,200,220,400,550,570,700,850,860,1000,1100,1200],
            borderColor:"rgb(113, 255, 51)",
            backgroundColor: "rgb(113, 255, 51)", // Optional color
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

export default LineChartEnergyCost;
