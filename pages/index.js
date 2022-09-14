import HeroBanner from "../components/heroBanner"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Progress from "../components/progressBar"
import Herobannertoplayer from "../components/herobannertoplayer"
import Head from "next/head"
import Services from "../components/services"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hyperflex Core</title>
        <link rel="icon" href="/favicon.png"/>
      </Head>
     <Progress/>
     <Navbar/>
     <Sidebar/>
     <Herobannertoplayer/>
     <HeroBanner/>
    <Services />
      
    </div>
  )
}
