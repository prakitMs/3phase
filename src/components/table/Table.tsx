import React from 'react'

const Table = () => {
  return (
    <table className="border border-separate border-black text-2xl h-[15vw]">
  <thead>
    <tr>
      <th className='h-[2vw]  bg-blue-300 '>Voltage</th>
      <th className=' bg-blue-300 '></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส1</td>
      <td className='border border-black'>228.3906708</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส2</td>
      <td className='border border-black'>228.3906708</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส3</td>
      <td className='border border-black'>228.3906708</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส12</td>
      <td className='border border-black'>0.068000793</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส23</td>
      <td className='border border-black'>0.068000793</td>
    </tr>
  </tbody>
  <tbody>
    <tr>
      <td className='border border-black'>เฟส31</td>
      <td className='border border-black'>0.068000793</td>
    </tr>
  </tbody>
</table>
  )
}

export default Table