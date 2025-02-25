"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { EnergyApparent } from "@/interface/dashboard";

interface ChartEnergyApparentProps{
  energyApparent:EnergyApparent;

}

const ChartEnergyApparent = ({energyApparent}:ChartEnergyApparentProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["E_Ap_L1", "E_Ap_L2", "E_Ap_L3" ,"E_Ap_Total"], // Labels added
        datasets: [
          {
            label: "Energy Apparent ",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [energyApparent.eApL1,energyApparent.eApL2,energyApparent.eApL3,energyApparent.eApT],
            backgroundColor: "rgb(220, 155, 123)", // Optional color
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

export default ChartEnergyApparent;
