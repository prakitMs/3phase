import Chart1 from "@/components/chart1";
import ChartVo from "@/components/chartVo";
import ChartC from "@/components/chartC";
import ChartFr from "@/components/chartFr";
import ChartAP from "@/components/chartAP";
import ChartEA from "@/components/chartEA";
import ChartER from "@/components/chartER";
import ChartEAp from "@/components/chartEAp";
import ChartPF from "@/components/chartPF";
import ChartPQ from "@/components/chartPQ";
import ChartPQ2 from "@/components/chartPQ2";
import ChartEC from "@/components/chartEC";



export default function Dataloging() {
    return (
    <div className="grid h-48 grid-cols-3 place-content-between gap-10  ml-20 ">
      <Chart1 />
      <ChartVo />
      <ChartC />
      <ChartFr />
      <ChartAP />
      <ChartEA />
      <ChartER />
      <ChartEAp />
      <ChartPF />
      <ChartPQ />
      <ChartPQ2 />
      <ChartEC />

    </div>
      
    );
  }
  