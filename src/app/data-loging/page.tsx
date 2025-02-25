
import { useGetDashboardPhase } from "@/api/dashboard";
import ChartVoltage from "@/components/chart-voltage";
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
import LineChartVoltage from "@/components/line-chart-voltage-l1";



export default async function Dataloging() {
  const data = await useGetDashboardPhase();
    return (
    <div className="grid h-48 grid-cols-3 place-content-between gap-10  ml-20 ">
      <ChartVoltage voltage={data.voltage} />
      <ChartVoltageSecond voltageSecond={data.voltage} />
      <ChartCurrent current={data.current} />
      <ChartFrequency frequency={data.frequency}/>
      <ChartActivePower activePower={data.activePower} />
      <ChartEnergyActive energyActive={data.energyActive} />
      <ChartEnergyReactive energyReactive={data.energyReactive} />
      <ChartEnergyApparent energyApparent={data.energyApparent} />
      <ChartPowerFactor powerFactor={data.powerFactor} />
      <ChartPowerQuality powerQuality={data.powerQuality} />
      <ChartPowerQualitySecond powerQualitySecond={data.powerQuality} />
      <ChartEnergyCost energyCost={data.energyCost} />
      
    </div>
      
    );
  }
  