import HeroBanner from "../components/heroBanner"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
export default function Home() {
  return (
    <div className="bg-black">
     <Navbar/>
     <Sidebar/>
     <HeroBanner/>
    </div>
  )
}
