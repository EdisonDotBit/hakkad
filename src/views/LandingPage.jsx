import Footer from "../components/Footer"
import Landing from "../components/Landing"
import LandingContext from "../components/LandingContext"
import Navigation from "../components/Navigation"
import '../index.css'


function LandingPage() {
  return (
    <section>
        <Navigation/>
        <Landing/>
        <LandingContext/>
        <Footer/>
    </section>
  )
}

export default LandingPage