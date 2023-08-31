import Navbar from './components/HomePage/NavBar'
import Headline from './components/HomePage/Headline'
import MockBrowser from './components/HomePage/MockBrowser'
import InfoGraphicGuide from './components/HomePage/InfoGraphicGuide'
import CallToAction from './components/HomePage/CallToAction'
import Footer from './components/HomePage/Footer'
import '@ionic/core/css/core.css';

export default function Home() {
return (
  <>
    <main className="gradient leading-relaxed tracking-wide flex flex-col">
      <Navbar />
      <div className="container mx-auto h-screen">
        <Headline />
        <MockBrowser />
      </div>
      <InfoGraphicGuide />
      <CallToAction /> 
      <Footer />
    </main>
  </>
  )
}
