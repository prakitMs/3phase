"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Frequency } from "@/interface/dashboard";

interface ChartFrequencyProps{
  frequency: Frequency;
}

const ChartFrequency = ({frequency}:ChartFrequencyProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Frequency"], // Labels added
        datasets: [
          {
            label: "Frequency ",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [frequency.freq],
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

export default ChartFrequency;
