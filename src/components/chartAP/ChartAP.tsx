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
        labels: ["AP_L1", "AP_L2", "AP_L3", "AP_Total" ], // Labels added
        datasets: [
          {
            label: "Active Power",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [-0.180687219, -0.127250522, -0.179460302,-0.488294184],
            backgroundColor: "rgb(255, 165, 0)", // Optional color
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
