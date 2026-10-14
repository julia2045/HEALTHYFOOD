import React, { useState, useEffect } from 'react'
import Slide from '../Slide'
import HomeRestaurants from '../Restaurants/HomeRestaurants'
import { getGoals } from '../../Api'
import { useAuth } from '../Utils/AuthContext'
import Styles from './Home.module.css'
import Calories from '../../assets/Home/fogueira.png'
import Protein from '../../assets/Home/proteina.png'
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
    <p>Café da manhã</p>,
    <p>Saladas</p>,
    <p>Café da tarde</p>,
    <p>Lanches</p>,
    <p>Marmitas</p>,
    <p>Sushi</p>,
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
            <p>{goals.daily_calories} kcal</p>
            <p>Proteína {goals.daily_protein}g</p>
          </div>
          <p>{goals.daily_meals} refeições</p>
        </div>
      )}

      {loading && <p>Carregando metas...</p>}

      <div>
        <p>Categorias</p>
        <Slide slides={slide} dots={true} autoplay={true}/>
      </div>
      <HomeRestaurants />
    </section>
  )
}

export default Home
