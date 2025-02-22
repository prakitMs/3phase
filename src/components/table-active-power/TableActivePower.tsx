import { ActivePower } from "@/interface/dashboard"

interface TableActivePowerProps{
  activePower: ActivePower;
}

const TableActivePower = ({activePower}: TableActivePowerProps) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Active Power</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">AP_L1</td>
      <td className="border border-black w-10">{activePower.apL1}</td>
    </tr>
    <tr>
      <td className="border border-black  ">AP_L2</td>
      <td className="border border-black  ">{activePower.apL2}</td>
    </tr>
    <tr>
      <td className="border border-black  ">AP_L3</td>
      <td className="border border-black  ">{activePower.apL3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">AP_Total</td>
      <td className="border border-black  ">{activePower.apTotal}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableActivePower