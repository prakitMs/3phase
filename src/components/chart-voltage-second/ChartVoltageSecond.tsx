"use client";
import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { Voltage } from "@/interface/dashboard";

interface ChartVoltageSecondProps{
  voltageSecond:Voltage;
}

const ChartVoltageSecond = ({voltageSecond}:ChartVoltageSecondProps) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!chartRef.current) return;

    const ctx = chartRef.current.getContext("2d");
    if (!ctx) return;

    const chartInstance = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["V_U12", "V_U23", "V_U31" ], // Labels added
        datasets: [
          {
            label: "Voltage Second",
            barPercentage: 0.5,
            barThickness: 15,
             maxBarThickness: 20,
             minBarLength: 5,
            data: [voltageSecond.vU12, voltageSecond.vU23, voltageSecond.vU31],
            backgroundColor: "rgb(123, 22, 45)", // Optional color
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

export default ChartVoltageSecond;
