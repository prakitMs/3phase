export const PAGE_ROUTE ={ 
    dashboard: "/",
    datalogging: "data-loging",
    alerts: "/alerts",
    setting: "setting",
    
};
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await fetch("http://35.186.147.241:1880/smartG/3Phase");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: (error as Error).message });
  }
}
