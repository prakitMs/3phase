import { SIDE_MENU } from "@/constant/menu"
import Link from "next/link"

//rafce
const SideNav = () => {
  return (
    <div className="bg-slate-600 h-screen w-[20vw] text-white p-3">
        <p className="font-semibold text-[20px] text-center border">Power Meter</p>
        {SIDE_MENU.map((menu,idx)=>(
          <Link href={menu.link} key={idx} className="block capitalize">{menu.label}</Link>
        ))
        }
    </div>
  )
}

export default SideNav