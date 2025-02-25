"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { PowerQuality } from "@/interface/dashboard";

interface ChartPowerQualityProps{
  powerQuality: PowerQuality;

} 
const ChartPowerQuality = ({powerQuality}:ChartPowerQualityProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["VUnb", "CUnb" ], // Labels added
        datasets: [
          {
            label: "Power Quality1",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [powerQuality.vunb, powerQuality.cunb],
            backgroundColor: "rgb(144, 133, 123)", // Optional color
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

export default ChartPowerQuality;
