import React from 'react'

const TableEA = () => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Energy Apparent</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">E_AP_L1</td>
      <td className="border border-black w-10">1727.00</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_AP_L2</td>
      <td className="border border-black  ">1727.00</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_AP_L3</td>
      <td className="border border-black  ">1727.00</td>
    </tr>
    <tr>
      <td className="border border-black  ">E_AP_Total</td>
      <td className="border border-black  ">1727.00</td>
    </tr>
  </tbody>
</table>
  )
}

export default TableEA