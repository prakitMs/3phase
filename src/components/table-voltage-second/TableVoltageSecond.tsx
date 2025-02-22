import { Voltage } from "@/interface/dashboard";

interface TableVoltageProps{
  voltageSecond: Voltage;
}

const TableVoltageSecond = ({voltageSecond}: TableVoltageProps) =>  {
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
      <td className='border border-black'>เฟส12</td>
      <td className='border border-black'>{voltageSecond.vU12}</td>
    </tr>
    <tr>
      <td className='border border-black'>เฟส23</td>
      <td className='border border-black'>{voltageSecond.vU23}</td>
    </tr>  
    <tr>
      <td className='border border-black'>เฟส31</td>
      <td className='border border-black'>{voltageSecond.vU31}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableVoltageSecond