"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { EnergyActive } from "@/interface/dashboard";

interface ChartEnergyActiveProps{
  energyActive:EnergyActive;
}

const ChartEnergyActive = ({energyActive}:ChartEnergyActiveProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["E_A_L1", "E_A_L2", "E_A_L3" ,"E_A_Total"], // Labels added
        datasets: [
          {
            label: "Energy Active",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [energyActive.eAL1,energyActive.eAL2,energyActive.eAL3,energyActive.eATotal],
            backgroundColor: "rgb(220, 332, 123)", // Optional color
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

export default ChartEnergyActive;
