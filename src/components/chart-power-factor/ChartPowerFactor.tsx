"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { PowerFactor } from "@/interface/dashboard";

interface ChartPowerFactorPropsP{
  powerFactor:PowerFactor;
}

const ChartPowerFactor = ({powerFactor}:ChartPowerFactorPropsP) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["PF_L1", "PF_L2", "PF_L3","PF-T" ], // Labels added
        datasets: [
          {
            label: "Power Factor",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness:20,
             minBarLength: 5,
            data: [powerFactor.pfL1, powerFactor.pfL2, powerFactor.pfL3, powerFactor.pfT],
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

export default ChartPowerFactor;
