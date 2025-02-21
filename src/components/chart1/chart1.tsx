"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const Chart1 = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["VU1-N", "VU2-N", "VU3-N" ], // Labels added
        datasets: [
          {
            label: "Voltage",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [228.3906708, 228.3246765, 228.3808746],
            backgroundColor: "rgb(255, 0, 0)", // Optional color
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

export default Chart1;
