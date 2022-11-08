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
    hyperflex core SEO

<meta name="keywords" content="website designing, website designing in karachi, web design, web designer in karachi, wordpress services in pakistan, wordpress services in karachi, web design in karachi, website development company in karachi, website developers in karachi, website development services in pakistan, ecommerce website development, responsive website in karachi, wordpress development in karachi, domain registration in pakistan, domain registrar in karachi, cheap domain prices in pakistan, hosting services in pakistan, free domain registration in pakistan, wordpress maintenance services in pakistan, logo designing in pakistan, top web design companies in pakistan, website services in pakistan, dynamic website, static website, responsive website, wordpress website, ecommerce website, magento website, open care website, website designing in hyderabad, website designing in lahore, website designing in islamabad,react” website,next website,webapp,software development,software development in karachi,ERP,erp services in karachi,app development,mobile app development,mobile app development in karachi,mobile app development in pakistan,software house,software house in pakistan,software engineering" />


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
