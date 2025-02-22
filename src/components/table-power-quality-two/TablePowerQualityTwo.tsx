import { PowerQuality } from "@/interface/dashboard"

interface TablePowerQuality2Props{
  powerQuality2: PowerQuality;
}

const TablePowerQuality = ({powerQuality2}: TablePowerQuality2Props) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Power Quality</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">THDV1</td>
      <td className="border border-black w-10">{powerQuality2.thdv1}</td>
    </tr>
    <tr>
      <td className="border border-black  ">THDV2</td>
      <td className="border border-black  ">{powerQuality2.thdv2}</td>
    </tr>
    <tr>
      <td className="border border-black  ">THDV3</td>
      <td className="border border-black  ">{powerQuality2.thdv3}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablePowerQuality