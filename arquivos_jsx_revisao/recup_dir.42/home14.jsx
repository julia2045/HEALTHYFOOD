import React, { useState, useEffect } from 'react'
import Slide from '../Slide'
import HomeRestaurants from '../Restaurants/HomeRestaurants'
import { getGoals } from '../../Api'
import { useAuth } from '../Utils/AuthContext'
import Styles from './Home.module.css'
import Calories from '../../assets/Home/fogueira.png'
import Protein from '../../assets/Home/proteina.png'
import Meals from '../../assets/Home/refeicoes.png'
import Breakfest from '../../assets/Home/cafeManha.png'
import Salads from '../../assets/Home/saladas.png'
import Tea from '../../assets/Home/cafeTarde.png'
import Snacks from '../../assets/Home/lanches.png'
import LunchBoxes from '../../assets/Home/marmitas.png'
import Sushi from '../../assets/Home/sushi.png'
import Dessert from '../../assets/Home/sobremesas.png'



const Home = () => {
  const { user } = useAuth()
  const [goals, setGoals] = useState(null)
  const [loading, setLoading] = useState(true)

  // Buscar metas quando o usuário for carregado
  useEffect(() => {
    if (user?.id) {
      fetchUserGoals()
    } else {
      setLoading(false)
    }
  }, [user])

  const fetchUserGoals = async () => {
    try {
      setLoading(true)
      const data = await getGoals(user.id)
      setGoals(data[0] || null) // Pega o primeiro resultado
    } catch (error) {
      console.error('Erro ao buscar metas:', error)
      setGoals(null)
    } finally {
      setLoading(false)
    }
  }

  const slide = [
    <img src={Breakfest} alt="Café da manhã" />,
    <img src={Salads} alt="Saladas" />,
    <img src={Tea} alt="Café da tarde" />,
    <img src={Snacks} alt="Lanches" />,
    <img src={LunchBoxes} alt="Marmitas" />,
    <img src={Sushi} alt="Sushi" />,
    <p>Sobremesas</p>,
    <p>Vegano</p>,
    <p>Vegetariano</p>,
    <p>Low Carb</p>,
    <p>Sem glúten</p>,
    <p>Sem lactose</p>,
    <p>Pizzas</p>
  ]

  // Se não está autenticado
  if (!user) {
    return <p>Por favor, faça login para acessar a home.</p>
  }

  return (
    <section className={Styles.home}>
      <div className={Styles.welcome}>
        <h1>Bom dia, {user.name}!</h1>
        <p>Energize seu dia com uma nutrição equilibrada!</p>
      </div>

      {/* Mostrar metas apenas se existirem */}
      {goals && (
        <div className={Styles.goals}>
          <p className={Styles.goalTitle}>Metas de hoje</p>
          <div className={Styles.goalDetails}>
            <div className={Styles.goalItem}>
              <p>{goals.daily_calories} kcal</p>
              <img src={Calories} alt="Calorias" />
            </div>
            <div className={Styles.goalItem}>
              <p>Proteína {goals.daily_protein}g</p>
              <img src={Protein} alt="Proteína" />
            </div>
          </div>
          <div className={Styles.goalItem}>
              <p>{goals.daily_meals} refeições</p>
              <img src={Meals} alt="Refeições" />
            </div>
        </div>
      )}

      {loading && <p>Carregando metas...</p>}

      <div className={Styles.categories}>
        <p>Categorias</p>
        <Slide slides={slide} dots={true} autoplay={true}/>
      </div>
      <HomeRestaurants />
    </section>
  )
}

export default Home
