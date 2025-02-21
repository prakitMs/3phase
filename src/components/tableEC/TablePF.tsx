import React from 'react'

const TablEC = () => {
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
      <td className="border border-black  ">L1</td>
      <td className="border border-black w-10">0.003</td>
    </tr>
    <tr>
      <td className="border border-black  ">L2</td>
      <td className="border border-black  ">0</td>
    </tr>
    <tr>
      <td className="border border-black  ">L3</td>
      <td className="border border-black  ">0</td>
    </tr>
    <tr>
      <td className="border border-black  ">Total</td>
      <td className="border border-black  ">0.004</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablEC