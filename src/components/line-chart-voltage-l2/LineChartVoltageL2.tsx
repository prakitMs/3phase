"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Voltage } from "@/interface/dashboard";

interface LineChartVoltageL2Props{
  voltage:Voltage;
}
const LineChartVoltageL2 = ({voltage}: LineChartVoltageL2Props) => {
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
            label: "VoltageL2",
            tension: 0.2,

            data: [voltage.vu1N,voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N, voltage.vu3N, voltage.vu1N, voltage.vu2N],
            borderColor:"rgb(200,45,200)",
            backgroundColor: "rgb(200,45, 200)", // Optional color
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

export default LineChartVoltageL2;
