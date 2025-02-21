import Table from "@/components/table";
import Table2 from "@/components/table2";
import Table3 from "@/components/table3";
import Table4 from "@/components/table4";
import Table5 from "@/components/table5";
import TableEA from "@/components/tableEA";
import TablePF from "@/components/tablePF";
import TablePQ from "@/components/tablePQ";
import TableEC from "@/components/tableEC";


export default function DashboardPage() {
  return (

<div>
  <div className="text-red-950 text-5xl mb-5"> 
    ข้อมูลอัพเดตเมื่อเวลา 2025-02-19 15:58:36 bangkok
  </div>
  <div className="grid h-48 grid-cols-3 place-content-between gap-5  ml-20">
  <Table/>
  <Table2/>
  <Table3/>
  <Table4/>
  <Table5/>
  <TableEA/>
  <TablePF/>
  <TablePQ/>
  <TableEC/>
  </div>
</div>

    
  );
}
