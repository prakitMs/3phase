import { EnergyCost } from "@/interface/dashboard"

interface TableEnergyCost {
  energyCost: EnergyCost;
}
const TableEnergyCost = ({energyCost}:TableEnergyCost) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Energy Cost</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">L1</td>
      <td className="border border-black w-10">{energyCost.l1.energyKWh}kWh</td>
    </tr>
    <tr>
      <td className="border border-black  ">L2</td>
      <td className="border border-black  ">{energyCost.l2.energyKWh}kWh</td>
    </tr>
    <tr>
      <td className="border border-black  ">L3</td>
      <td className="border border-black  ">{energyCost.l3.energyKWh}kWh</td>
    </tr>
    <tr>
      <td className="border border-black  ">Total</td>
      <td className="border border-black  ">{energyCost.total.energyKWh}kWh</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableEnergyCost