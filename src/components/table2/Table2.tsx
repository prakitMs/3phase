import { Current } from "@/interface/dashboard";

interface TableCurrentProps {
  current: Current;
}

const Table2 = ({ current }: TableCurrentProps) => {
  return (
    <table className="text-2xl h-[1vw]">
      <thead>
        <tr>
          <th className="border border-black  bg-blue-300  ">Current</th>
          <th className="border border-black  bg-blue-300 "></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border border-black  ">A_L1</td>
          <td className="border border-black  ">{current.aL1}</td>
        </tr>
        <tr>
          <td className="border border-black  ">A_L2</td>
          <td className="border border-black  ">{current.aL2}</td>
        </tr>
        <tr>
          <td className="border border-black  ">A_L3</td>
          <td className="border border-black  ">{current.aL3}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Table2;
