import react from 'react'
import BenefitsCard from './BenefitsCard'

function Login() {
  

  return (
    <>
        <BenefitsCard
            obs={'Refeições balanceadas'}
            img={'src/assets/LoginImagens/donuts.jfif'}
            detail={'Etapa 1'}
            title={'Refeições balanceadas de forma simples.'}
            text={'Descubra recomendações de pratos elaborados por chefs que priorizam nutrientes e sabor para o bem-estar diário.'}
        />
    </>
  )
}

export default Login
