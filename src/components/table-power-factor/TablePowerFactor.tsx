import { PowerFactor } from '@/interface/dashboard'

interface TablePowerfactorProps{
  powerFactor: PowerFactor;
}
const TablePowerFactor = ({powerFactor}: TablePowerfactorProps) => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Power Factor</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">PF_L1</td>
      <td className="border border-black w-10">{powerFactor.pfL1}</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_L2</td>
      <td className="border border-black  ">{powerFactor.pfL2}</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_L3</td>
      <td className="border border-black  ">{powerFactor.pfL3}</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_Total</td>
      <td className="border border-black  ">{powerFactor.pfT}</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablePowerFactor