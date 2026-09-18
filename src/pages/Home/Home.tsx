import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Calculator from '../../components/Calculator/Calculator'
import Faq from '../../components/FAQ/FAQ'
import Contact from '../../components/Contact/Contact'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <Calculator />

        <Faq />

        <Contact />

        <Footer />
      </main>
    </>
  )
}

export default Home