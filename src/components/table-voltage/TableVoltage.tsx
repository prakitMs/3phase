import { Voltage } from "@/interface/dashboard";

interface TableVoltageProps{
  voltage: Voltage;
}

const TableVoltage = ({voltage}: TableVoltageProps) =>  {
  return (
    <table className="text-2xl h-[1vw]">
    <thead>
      <tr>
        <th className="border border-black bg-blue-300 ">Voltage </th>
        <th className="border border-black bg-blue-300  "></th>
      </tr>
    </thead>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส1</td>
      <td className='border border-black'>{voltage.vu1N}</td>
    </tr>
    <tr>
      <td className='border border-black'>เฟส2</td>
      <td className='border border-black'>{voltage.vu2N}</td>
    </tr>
    <tr>
      <td className='border border-black'>เฟส3</td>
      <td className='border border-black'>{voltage.vu3N}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableVoltage