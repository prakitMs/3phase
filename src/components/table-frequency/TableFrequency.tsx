import { Frequency } from '@/interface/dashboard'

interface TableFrequencyProps{
  frequency: Frequency;
}
const TableFrequency = ({frequency}: TableFrequencyProps) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Frequency</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">frequency</td>
      <td className="border border-black  ">{frequency.freq}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableFrequency