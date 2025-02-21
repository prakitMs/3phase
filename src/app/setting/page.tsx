"use client"
import { useState,useEffect } from "react";

interface Data{
  VU1_N: number;
  VU2_N: number;
  VU3N: number;
  V_U12: number;
  V_U23: number;
  V_U31: number;
}

interface Current {
  A_L1: number;
  A_L2: number;
  A_L3: number;
}

interface Frequency {
  Freq: number;
}

interface ActivePower {
  AP_L1: number;
  AP_L2: number;
  AP_L3: number;
  AP_Total: number;
}

interface Energy {
  E_A_L1: number;
  E_A_L2: number;
  E_A_L3: number;
  E_A_Total: number;
}

interface PowerFactor {
  PF_L1: number;
  PF_L2: number;
  PF_L3: number;
  PF_T: number;
}

interface PowerQuality {
  VUnb: number;
  CUnb: number;
  THDV1: number;
  THDV2: number;
  THDV3: number;
}

interface EnergyCost {
  L1: { Energy_kWh: number };
  L2: { Energy_kWh: number };
  L3: { Energy_kWh: number };
  Total: { Energy_kWh: number };
}

export default function Setting() {
  const [data, setData] = useState<Data[]> ([]);
  console.log(data);
    useEffect(()=>{ 
        
      const fetchData = async () =>{
        try{
            const response = await fetch("http://35.186.147.241:1880/smartG/3Phase");
            const jsonData = await response.json();
            setData(jsonData);
        }catch(error){
          console.error("error fetching data:", error);
        }
      }

      fetchData();

    },[])
  return (
    <main>
      <ul>
        {data.map((item) => (
          <li key={item.Voltage}></li>
        ) ) }
      </ul>

    </main>
    );
  }
  