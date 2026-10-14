import React, {useEffect } from 'react'
import styles from './Slide.module.css'

const Slide = ({ slides, controls, dots, autoplay }) => {
  // Estado para controlar o slide atual
  const [currentSlide, setCurrentSlide] = React.useState(0)

  //const para armazenar o número total de slides
  const totalSlides = slides.length

  //função para avançar para o próximo slide, atualizando o estado do slide atual
  function nextSlide() {
    //utilizo o prev para garantir que o estado seja atualizado corretamente e adiciono  1 ao slide atual, usando o operador módulo para voltar ao início quando chegar ao final
    //pois todo resto da divisão de slides quando for menor que totalSlides retorna o próprio número, e quando for igual ou maior retorna o resto da divisão, que é o número do slide correspondente
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

 
   useEffect(() => {
      if(!autoplay) return

      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % totalSlides)
      }, 3000)

      return () => clearInterval(interval)
   },[autoplay, totalSlides])

  

  function prevSlide() {
    setCurrentSlide((prev) =>
      //aqui verifico se o slide atual é o primeiro (0), se for, volto para o último slide (totalSlides - 1), caso contrário, subtraio 1 do slide atual para voltar ao slide anterior
      prev === 0 ? totalSlides - 1 : prev - 1
    )
  }

  return (
    <div className={styles.slide}>
      <div
        className={styles.slideTrack}
        style={{
          //aqui eu aplico uma transformação de translação no eixo X para mover os slides horizontalmente, multiplicando o índice do slide atual por 100% para garantir que cada slide ocupe toda a largura do contêiner
          //então se for 1 sera 100%, se for 2 sera 200% e assim por diante, criando o efeito de deslizamento entre os slides
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {slides.map((item, index) => (
          <div key={index} className={styles.element}>
            {item}
          </div>
        ))}
      </div>

        {dots &&
          <div className={styles.dots}>
            {slides.map((_, index) => (
              <button
              className={index === currentSlide ? styles.active : styles.buttonSlide}
                key={index}
                onClick={() => setCurrentSlide(index)}
              >
              </button>
            ))}
          </div>
        }
      { controls &&
         <div className={styles.controls}>
        <button onClick={prevSlide}>◀</button>
        <button onClick={nextSlide}>▶</button>
      </div>
      }
    </div>
  )
}

export default Slide