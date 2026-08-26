import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Services from '../../components/Services/Services'

const Home = () => {
  return (
    <>
      <Header />

      <main>
        <Hero />

        <About />

        <Services />

        <section id="calculator">
          <h2>Кредитний калькулятор</h2>
        </section>

        <section id="contact">
          <h2>Контакти</h2>
        </section>
      </main>
    </>
  )
}

export default Home