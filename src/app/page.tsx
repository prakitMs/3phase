import { useGetDashboardPhase } from "@/api/dashboard";
import LineChartEnergyCost from "@/components/line-chart-energy-cost";
import LineChartVoltageL1 from "@/components/line-chart-voltage-l1";
import LineChartVoltageL2 from "@/components/line-chart-voltage-l2";
import LineChartVoltageL3 from "@/components/line-chart-voltage-l3";

export default async function Setting() {
  const data = await useGetDashboardPhase();
  return (
     <div>
        <div className="grid h-[15vw] grid-cols-2 place-content-between gap-10  ml-20 ">
          <LineChartVoltageL1 voltage={data.voltage}/>
          <LineChartVoltageL2 voltage={data.voltage}/>
          <LineChartVoltageL3 voltage={data.voltage}/>
          <LineChartEnergyCost />
          <div className="rounded-lg bg-slate-200 text-2xl w-[20vw] h-[3vw]">
            <div className="mt-3 ml-5"> ค่าไฟปัจจุบันของคุณคือ 1200 บาท</div>
          </div>
        </div>
        
     </div>
   
 
    
  );
}
