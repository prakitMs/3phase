import { EnergyReactive } from "@/interface/dashboard"

interface TableEnergyReactiveProps{
  energyReactive: EnergyReactive;
}
const TableEnergyReactive = ({energyReactive}: TableEnergyReactiveProps) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Energy Reactive</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">E_R_L1</td>
      <td className="border border-black w-10">{energyReactive.eRL1}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_R_L2</td>
      <td className="border border-black  ">{energyReactive.eRL2}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_R_L3</td>
      <td className="border border-black  ">{energyReactive.eRL3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_R_Total</td>
      <td className="border border-black  ">{energyReactive.eRTotal}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableEnergyReactive