"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartPQ2 = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: [ "THDV1","THDV2","THDV3" ], // Labels added
        datasets: [
          {
            label: "Power Quality2",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [ 3.673346758,3.671309233,3.704665661],
            backgroundColor: "rgb(177, 173, 13)", // Optional color
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

export default ChartPQ2;
