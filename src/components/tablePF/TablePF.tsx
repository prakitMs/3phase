import React from 'react'

const TablPF = () => {
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
      <td className="border border-black w-10">-0.839330912</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_L2</td>
      <td className="border border-black  ">-0.839330912</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_L3</td>
      <td className="border border-black  ">-0.839330912</td>
    </tr>
    <tr>
      <td className="border border-black  ">PF_Total</td>
      <td className="border border-black  ">-0.839330912</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablPF