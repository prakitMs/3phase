"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Voltage } from "@/interface/dashboard";

interface LineChartVoltageL1Props{
  voltage:Voltage;
}
const LineChartVoltageL1 = ({voltage}: LineChartVoltageL1Props) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["1","2","3","4","5","6","7","8","9","10","11","12"], // Labels added
        datasets: [
          {
            label: "VoltageL1",
            tension: 0.2,

            data: [voltage.vu1N,voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N],
            borderColor:"rgb(255, 0, 0)",
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

export default LineChartVoltageL1;
