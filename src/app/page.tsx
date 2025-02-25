import { useGetDashboardPhase } from "@/api/dashboard";
import LineChart from "@/components/line-chart";
import LineChartEnergyCost from "@/components/line-chart-energy-cost";

export default async function Setting() {
  const data = await useGetDashboardPhase();
  console.log(data);

  return (
    <div>
      <div className="grid h-[15vw] grid-cols-2 place-content-between gap-10  ml-20 ">
        <LineChart
          {...data.voltageL1}
          color="rgb(255, 0, 0)"
          title="VoltageL1"
        />
        <LineChart
          {...data.voltageL2}
          color="rgb(200,45,200)"
          title="VoltageL2"
        />
        <LineChart
          {...data.voltageL3}
          color="rgb(90,100,159)"
          title="VoltageL3"
        />

        <LineChartEnergyCost />
        <div className="rounded-lg bg-slate-200 text-2xl w-[20vw] h-[3vw]">
          <div className="mt-3 ml-5"> ค่าไฟปัจจุบันของคุณคือ 1200 บาท</div>
        </div>
      </div>
    </div>
  );
}
