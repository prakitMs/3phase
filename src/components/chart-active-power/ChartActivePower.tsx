"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { ActivePower } from "@/interface/dashboard";


interface ChartActivePowerProps{
  activePower:ActivePower;
}

const ChartActivePower = ({activePower}:ChartActivePowerProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["AP_L1", "AP_L2", "AP_L3","AP_Total" ], // Labels added
        datasets: [
          {
            label: "Activen Power",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [activePower.apL1, activePower.apL2, activePower.apL3,activePower.apTotal],
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

export default ChartActivePower;
