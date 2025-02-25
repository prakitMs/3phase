import { useGetDashboardPhase } from "@/api/dashboard";
import ChartVoltageSecond from "@/components/chart-voltage-second";
import ChartCurrent from "@/components/chart-current";
import ChartFrequency from "@/components/chart-frequency";
import ChartEnergyActive from "@/components/chart-energy-active";
import ChartActivePower from "@/components/chart-active-power";
import ChartEnergyReactive from "@/components/chart-energy-reactive";
import ChartEnergyApparent from "@/components/chart-energy-apparent";
import ChartPowerFactor from "@/components/chart-power-factor";
import ChartPowerQuality from "@/components/chart-power-quality";
import ChartPowerQualitySecond from "@/components/chart-power-quality-second";
import ChartEnergyCost from "@/components/chart-energy-cost";
import BarChart from "@/components/bar-chart";

export default async function Dataloging() {
  const data = await useGetDashboardPhase();
  return (
    <div className="grid h-48 grid-cols-3 place-content-between gap-10 ml-20 ">
      <BarChart
        information={data.chartVoltage}
        color="rgb(255, 0, 0)"
        title="Voltage"
      />
      <BarChart
        information={data.chartVoltageSecond}
        color="rgb(123, 22, 45)"
        title="voltage second"
      />
      <BarChart
        information={data.current}
        color="rgb(123, 22, 45)"
        title="Current"
      />
      <BarChart
        information={data.frequency}
        color="rgb(123, 22, 45)"
        title="frequency"
      />
      <BarChart
        information={data.activePower}
        color="rgb(123, 22, 45)"
        title="activePower"
      />
      <BarChart
        information={data.energyActive}
        color="rgb(123, 22, 45)"
        title="energyActive"
      />
      <BarChart
        information={data.energyReactive}
        color="rgb(123, 22, 45)"
        title="energyReactive"
      />
      <BarChart
        information={data.energyApparent}
        color="rgb(123, 22, 45)"
        title="energyApparent"
      />
      <BarChart
        information={data.powerFactor}
        color="rgb(123, 22, 45)"
        title="powerFactor"
      />
      <BarChart
        information={data.powerQuality}
        color="rgb(123, 22, 45)"
        title="powerQuality"
      />
      <BarChart
        information={data.energyCost}
        color="rgb(123, 22, 45)"
        title="energyCost"
      />
    </div>
  );
}
