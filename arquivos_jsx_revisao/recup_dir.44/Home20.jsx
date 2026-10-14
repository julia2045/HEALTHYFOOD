import React from 'react'
import Slide from '../Slide'
import HomeRestaurants from '../Restaurants/HomeRestaurants'
import { getGoals } from '../../Api'
import { useAuth } from '../Utils/AuthContext'

const Home = () => {

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

  const goals = getGoals(user.id) // Substitua por sua lógica para obter as metas do usuário
  const {user} = useAuth()
  
  return (
    <section>
      <Input 
        placeholder="O que você está procurando?" 
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Pesquisar</button>
      <div>
        <h1>Bom dia, {userName}!</h1>
        <p> Energize seu dia com uma nutrição equilibrada!</p>
      </div>

      <div>
        <p>Meta de hoje</p>
        <div>
          <p>{goals.daily_calories}</p>
          <p>Proteína <span>{goals.daily_protein}</span></p>
        </div>
        <p>{nRefs} refeições registradas - {pRefs} restantes</p>
      </div>
      <div>
        <p>Categorias</p>
        <Slide slides={slide} dots={true} autoplay={true}/>
      </div>
      <HomeRestaurants />

    </section>
  )
}

export default Home
