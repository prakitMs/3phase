"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Voltage } from "@/interface/dashboard";

interface ChartVoltageProps{
  voltage:Voltage;
}
const ChartVoltage = ({voltage}: ChartVoltageProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["VU1-N", "VU2-N", "VU3-N" ], // Labels added
        datasets: [
          {
            label: "Voltage",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [voltage.vu1N, voltage.vu2N, voltage.vu3N],
            backgroundColor: "rgb(255, 0, 0)", // Optional color
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

export default ChartVoltage;
