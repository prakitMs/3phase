"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { EnergyCost } from "@/interface/dashboard";

interface ChartEnergyCostProps{
  energyCost: EnergyCost;
}

const ChartEnergyCost = ({energyCost} :ChartEnergyCostProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["L1", "L2", "L3","Total"], // Labels added
        datasets: [
          {
            label: "Energy Cost",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [energyCost.l1.energyKWh, energyCost.l2.energyKWh, energyCost.l3.energyKWh, energyCost.total.energyKWh],
            backgroundColor: "rgba(76, 232, 131, 0.8)", // Optional color
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

export default ChartEnergyCost;
