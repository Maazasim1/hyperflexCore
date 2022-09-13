import HeroBanner from "../components/heroBanner"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Progress from "../components/progressBar"
import Services from '../components/services'
import Herobannertoplayer from "../components/herobannertoplayer"
export default function Home() {
  return (
    <div className="bg-black">
     <Progress/>
     <Navbar/>
     <Sidebar/>
     <Herobannertoplayer/>
     <HeroBanner/>
     <Services/>
      
    </div>
  )
}
