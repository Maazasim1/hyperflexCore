import HeroBanner from "../components/heroBanner"
import Navbar from "../components/navbar"
import Sidebar from "../components/sidebar"
import Progress from "../components/progressBar"
import Herobannertoplayer from "../components/herobannertoplayer"
import Head from "next/head"
import Services from "../components/services"
import Portfolio from "../components/portfolio"
import Clients from "../components/clients"
import Footer from "../components/footer"
import Executives from "../components/executives"
export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Hyperflex Core</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="This is the website for Hyperflex Core we are a software development company and provide it consultancy and business solutions like automation,websites,webapps,next js applications,react applications,machine learning models,cross platform apps and data science services" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Progress />
      <Navbar />
      <Sidebar />
      <Herobannertoplayer />
      <HeroBanner />
      <Services />
      <Portfolio />
      <Clients />
      <Executives />
      <Footer />

    </div>
  )
}
