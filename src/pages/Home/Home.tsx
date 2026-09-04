import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'
import Calculator from '../../components/Calculator/Calculator'
import FAQ from '../../components/FAQ/FAQ'

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <Calculator />

        <FAQ />

        <section id="contact">
          <h2>Контакти</h2>
        </section>
      </main>
    </>
  )
}

export default Home