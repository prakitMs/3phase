"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartEAr = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["PF_L1", "PF_L2", "PF_L3" ,"PF_Total"], // Labels added
        datasets: [
          {
            label: "Energy Apparent ",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [3653,489,642,4784],
            backgroundColor: "rgb(220, 155, 123)", // Optional color
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

export default ChartEAr;
