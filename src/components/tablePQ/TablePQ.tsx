import React from 'react'

const TablPQ = () => {
  return (
    <table className="text-2xl h-[1vw]">
  <thead>
    <tr>
      <th className="border border-black bg-blue-300 ">Power Quality</th>
      <th className="border border-black bg-blue-300  "></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className="border border-black  ">VUnb</td>
      <td className="border border-black w-10">105.4054031</td>
    </tr>
    <tr>
      <td className="border border-black  ">CUnb</td>
      <td className="border border-black  ">331.25</td>
    </tr>
    <tr>
      <td className="border border-black  ">THDV1</td>
      <td className="border border-black  ">3.673346758</td>
    </tr>
    <tr>
      <td className="border border-black  ">THDV2</td>
      <td className="border border-black  ">3.673346758</td>
    </tr>
    <tr>
      <td className="border border-black  ">THDV3</td>
      <td className="border border-black  ">3.673346758</td>
    </tr>
  </tbody>
</table>
  )
}

export default TablPQ