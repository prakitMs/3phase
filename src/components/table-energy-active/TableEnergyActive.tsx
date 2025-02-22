import { EnergyActive } from "@/interface/dashboard"

interface TableEnergyActiveProps{
  energyActive: EnergyActive;
}
const TableEnAc = ({energyActive}: TableEnergyActiveProps) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Energy Active</th>
      <th className="border border-black bg-blue-300 "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">E_A_L1</td>
      <td className="border border-black w-10">{energyActive.eAL1}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_A_L2</td>
      <td className="border border-black  ">{energyActive.eAL2}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_A_L3</td>
      <td className="border border-black  ">{energyActive.eAL3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_A_Total</td>
      <td className="border border-black  ">{energyActive.eATotal}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableEnAc