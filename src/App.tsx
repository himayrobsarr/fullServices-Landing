"use client"

import { useState, useEffect } from "react"

const FullServiceLanding = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-800">
      <header className="bg-[#004F94] text-white py-20 relative">
        <div className="container mx-auto px-4">
          <div className="absolute top-4 left-4 md:left-8 lg:left-12">
            <img 
              src="https://khc-sistema-v2.s3.amazonaws.com/centros/332e040d-c015-4d6f-9dfc-855ec2144fe3.png"
              alt="FullService Logo"
              className="w-24 md:w-32 h-auto"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div
              className={`transition-all duration-1000 transform ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight">FullService</h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl">
                Impulsamos tu negocio con soluciones tecnológicas innovadoras y personalizadas
              </p>
              <a
                href="#contact"
                className="bg-white text-[#004F94] px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Transforma tu empresa
              </a>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
              <img
                src="/team2.jpg"
                alt="FullService Header"
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">¿Quiénes somos?</h2>
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <p className="text-lg leading-relaxed">
                  FullService es la unidad de negocio de Campuslands especializada en desarrollo de software a la
                  medida, conformación de células de trabajo dedicadas y desarrollo de asistentes con inteligencia
                  artificial. Con más de 2 años de experiencia en el mercado, hemos brindado soluciones tecnológicas
                  innovadoras a empresas de diversos sectores, transformando sus operaciones y optimizando su
                  crecimiento.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <img
                  src="/team.png"
                  alt="Equipo FullService"
                  width={400}
                  height={300}
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#004F94] text-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Nuestro Impacto</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                "+8.000 horas mensuales de programación en diversos proyectos de software.",
                "Desarrollo y operación de aplicaciones web y móviles.",
                "Células de trabajo altamente capacitadas en Full Stack, Big Data, Machine Learning, DevOps, QA, UX/UI y Mobile.",
                "Implementación de asistentes de IA personalizados para automatización de procesos.",
              ].map((impact, index) => (
                <div
                  key={index}
                  className="bg-white text-[#004F94] p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300 transform hover:-translate-y-1"
                >
                  <div className="flex items-start">
                    <svg
                      className="w-8 h-8 text-[#004F94] mr-4 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                    <span className="text-lg">{impact}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center">Servicios</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Desarrollo de Software a la Medida",
                  icon: "💻",
                  description:
                    "Creamos soluciones personalizadas que se adaptan perfectamente a las necesidades únicas de tu negocio.",
                },
                {
                  title: "Células de Trabajo Dedicadas",
                  icon: "👥",
                  description:
                    "Equipos especializados y altamente capacitados para impulsar tus proyectos tecnológicos.",
                },
                {
                  title: "Asistentes de IA",
                  icon: "🤖",
                  description:
                    "Implementamos asistentes inteligentes que automatizan y optimizan tus procesos empresariales.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:-translate-y-2"
                >
                  <div className="text-5xl mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Empresas que confían en nosotros</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              <img 
                src={`${window.location.origin}/globant.png`} 
                alt="Globant" 
                className="h-12 md:h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="/applus.png" 
                alt="Applus" 
                className="h-12 md:h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="/siesa.jpg" 
                alt="Siesa" 
                className="h-12 md:h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
              <img 
                src="/masabi.png" 
                alt="Masabi" 
                className="h-12 md:h-16 w-auto filter grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#004F94] text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">¿Quieres transformar tu negocio con tecnología?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto">
              ¡Hablemos! Descubre cómo podemos impulsar tu empresa hacia el futuro digital.
            </p>
            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
              <a
                href="mailto:juan.yepes@campuslands.com"
                className="bg-white text-[#004F94] px-8 py-4 rounded-full font-semibold text-lg hover:bg-opacity-90 transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Contáctanos
              </a>
              <a
                href="https://www.campuslands.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#004F94] transition duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Visita nuestra web
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">
            &copy; {new Date().getFullYear()} FullService - Una unidad de negocio de Campuslands. Todos los derechos
            reservados.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="hover:text-[#004F94] transition duration-300">
              <span className="sr-only">Facebook</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-[#004F94] transition duration-300">
              <span className="sr-only">Instagram</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="hover:text-[#004F94] transition duration-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default FullServiceLanding

