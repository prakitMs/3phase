"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const ChartVo = () => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["V_U12", "V_U23", "V_U31" ], // Labels added
        datasets: [
          {
            label: "Voltage_U",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [0.068000793, 0.135599226, 0.123930447],
            backgroundColor: "rgb(123, 22, 45)", // Optional color
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

export default ChartVo;
