import Footer from "../components/Footer"
import Landing from "../components/Landing"
import LandingContext from "../components/LandingContext"
import Navigation from "../components/Navigation"


function LandingPage() {
  return (
    <>
        <Navigation/>
        <Landing/>
        <LandingContext/>
        <Footer/>
    </>
  )
}

export default LandingPage