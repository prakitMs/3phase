"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartPF = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["PF_L1", "PF_L2", "PF_L3","PF-T" ], // Labels added
        datasets: [
          {
            label: "Power Factor",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [-0.839330912, -0.836865902, -0.835362673,-0.837408185],
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

export default ChartPF;
