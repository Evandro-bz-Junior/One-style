
import Navbar from '../components/Navbar/Navbar'
import HomeBanner from '../components/HomeBanner/HomeBanner'
import Releases from '../components/Releases/Releases'
import Products from '../components/Products/Products'
import About from '../components/About/About'
import Faq from '../components/Faq/Faq'
import Footer from '../components/Footer/Footer'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'



function Home() {

  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <>
      <div id="home">
        <Navbar />
      </div>
      <HomeBanner />
      <div id="releases">
        <Releases />
      </div>
      <div id="products">
        <Products />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <div id="contact">
        <Footer />
      </div>
    </>
  )
}

export default Home
