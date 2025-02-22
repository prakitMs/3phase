import { useGetDashboardPhase } from "@/api/dashboard";
import TableVoltage from "@/components/table-voltage";
import TableVoltageSecond from "@/components/table-voltage-second";
import TableCurrent from "@/components/table-current";
import TableFrequency from "@/components/table-frequency";
import TableEnergyReactive from "@/components/table-energy-reactive";
import TableEnergyActive from "@/components/table-energy-active";
import TableEnergyApparent from "@/components/table-energy-apparant";
import TableActivePower from "@/components/table-active-power";
import TablePowerFactor from "@/components/table-power-factor";
import TablePowerQuality from "@/components/table-power-quality";
import TablePowerQualityTwo from "@/components/table-power-quality-two";
import TableEnergyCost from "@/components/table-energy-cost";


export default async function DashboardPage() {
  const data = await useGetDashboardPhase();

  return (
    <div>
      <div className="text-red-950 text-5xl mb-5">
        ข้อมูลอัพเดตเมื่อเวลา {data.timestamp} bangkok
      </div>
      <div className="grid h-48 grid-cols-3 place-content-between gap-5  ml-20">
        <TableVoltage voltage={data.voltage}/>
        <TableVoltageSecond voltageSecond={data.voltage}/>
        <TableCurrent current={data.current} />
        <TableActivePower activePower={data.activePower}/>
        <TableEnergyActive energyActive={data.energyActive}/>
        <TableEnergyReactive energyReactive={data.energyReactive} />
        <TableEnergyApparent energyApparant={data.energyApparent}/>
        <TablePowerFactor powerFactor={data.powerFactor} />
        <TablePowerQuality powerQuality={data.powerQuality} />
        <TablePowerQualityTwo powerQuality2={data.powerQuality} />
        <TableFrequency frequency={data.frequency}/>
        <TableEnergyCost energyCost={data.energyCost} />
      </div>
    </div>
  );
}
