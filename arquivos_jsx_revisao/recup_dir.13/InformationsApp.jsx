import React from 'react'
import BenefitsCard from './BenefitsCard'
import Slide from '../Slide'
import Styles from './InformationsApp.module.css'
import Fruits from '../../assets/HomeImagens/fruits.png'
import Apple from '../../assets/HomeImagens/iconApple.svg?react'
import Facebook from '../../assets/HomeImagens/iconFacebook.svg?react'
import Gmail from '../../assets/HomeImagens/iconGmail.svg?react'
import { NavLink } from 'react-router-dom'
import {auth, googleProvider} from '../../firebase'
import { signInWithPopup } from 'firebase/auth'
import { loginSocial } from '../../Api'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../Utils/AuthContext'


function InformationsApp() {

   const slides = [<BenefitsCard 
            key={1}
            obs={'Refeições balanceadas'}
            bgVariant={'backYellow'}
            img={Fruits}
            alt={'frutas'}
            detail={'Etapa 1'}
            title={'Refeições balanceadas de forma simples.'}
            titleVariant={'yellow'}
            obsVariant={'yellow'}
            text={'Descubra recomendações de pratos elaborados por chefs que priorizam nutrientes e sabor para o bem-estar diário.'}
        />,
        <BenefitsCard
            key={2}
            obs={'Preferências alimentares'}
            bgVariant={'backGreen'}
            img={Fruits}
            alt={'frutas'}
            detail={'Etapa 2'}
            title={'Personalizado para você.'}
            titleVariant={'green'}
            obsVariant={'green'}
            text={'Informe-nos sobre sua dieta e alergias para que possamos personalizar refeições, filtros e notificações de acordo com suas necessidades.'}
        />,
        <BenefitsCard
            key={3}
            obs={'Monitoramento da nutrição'}
            bgVariant={'backBlue'}
            img={Fruits}
            detail={'Etapa 3'}
            title={'Personalizado para você.'}
            titleVariant={'blue'}
            obsVariant={'blue'}
            text={'Veja calorias, macronutrientes e vitaminas num relance para que você possa fazer escolhas que correspondam aos seus objetivos.'}
        />,
        <BenefitsCard
            key={4}
            obs={'Entrega Rápida'}
            bgVariant={'backBrown'}
            img={Fruits}
            detail={'Etapa 4'}
            title={'Entrega rápida e confiável.'}
            titleVariant={'brown'}
            obsVariant={'brown'}
            text={'Receba refeições saudáveis ​​em sua casa rapidamente, com embalagens que mantêm os pratos frescos e nutritivos.'}
        />]

        const navigate = useNavigate()
        const { login } = useAuth()
        const loginWithGoogle = async () => {
          try {
            const result = await signInWithPopup(auth, googleProvider)
            const user = result.user

            // envia para o backend
            const data = await loginSocial(user)

            login({ token: null, user: data })
            console.log('Usuário logado:', data)

            navigate('/pratos')



          } catch (error) {
            console.error('Erro ao fazer login com Google:', error.message)
          }
        }

  return (
    <section>
      <Slide slides={slides} dots={true} autoplay={true}/>
       
        <div className={Styles.preferences}>
          <p className={Styles.titlePreferences}>Informe-nos suas preferências.</p>
          <p className={Styles.textPreferences}>Selecione todas as opções que se aplicam para que possamos personalizar as recomendações de refeições e os filtros.</p>
          <ul>
            <li>
              <span className={`backGreen green ${Styles.spanReferences}`}>Vegan</span>
            </li>
            <li>
              <span className={`backYellow yellow ${Styles.spanReferences}`}>Vegetariano</span>
            </li>
            <li>
              <span className={`backBlue blue ${Styles.spanReferences}`}>Sem glúten</span>
            </li>
            <li>
              <span className={`backBrown brown ${Styles.spanReferences}`}>Sem lactose</span>
            </li>
          </ul>
          <p className={Styles.textPreferences}>Você pode atualizar essas configurações a qualquer momento. Escolher preferências nos ajuda a destacar primeiro as refeições mais adequadas.</p>
          <div className={Styles.btnContainerHome}>
            <NavLink className='btnGreen btgPadrao'to="/cadastro">Cadastre-se</NavLink>
            <NavLink className='btnWhite btgPadrao' to="/login">Conecte-se</NavLink>

          </div>
          <div>
            <div className={Styles.redesContainerHome}>
              <p className={Styles.textPreferences}>ou continue com</p>
              <button><img className={Styles.icon} src={Facebook} alt="Facebook" /></button>
              <button onClick={loginWithGoogle}><img className={Styles.icon} src={Gmail} alt="Gmail" /></button>
            </div>
            <p className={Styles.textPreferences}>Ao continuar, você concorda com os Termos e a Política de Privacidade da HealthyFood.</p>
          </div>
        </div>
      

    </section>
  )
}

export default InformationsApp
