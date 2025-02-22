import { PowerQuality } from "@/interface/dashboard"

interface TablePowerQualityProps{
  powerQuality: PowerQuality;
}

const TablePowerQuality = ({powerQuality}: TablePowerQualityProps) => {
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
      <td className="border border-black  ">VUnb</td>
      <td className="border border-black w-10">{powerQuality.cunb}</td>
    </tr>
    <tr>
      <td className="border border-black  ">CUnb</td>
      <td className="border border-black  ">{powerQuality.vunb}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablePowerQuality