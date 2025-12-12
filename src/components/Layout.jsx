import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
export default function Layout(){
  return(
    <div className="h-8 border-b">
      <Navbar />
      <div>
        <Outlet/>
      </div>
    </div>
  )
}