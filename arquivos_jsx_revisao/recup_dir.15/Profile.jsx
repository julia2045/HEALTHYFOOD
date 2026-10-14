import React from 'react'
import Notifications from '../../../assets/Footer/Profile/sino.png'
import AccountData from '../../../assets/Footer/Profile/seguranca-de-arquivo.png'
import Addresses from '../../../assets/Footer/Profile/pin.png'
import Favorites from '../../../assets/Footer/Profile/coracao.png'
import Preferences from '../../../assets/Footer/Profile/preferencias.png'
import Settings from '../../../assets/Footer/Profile/configuracoes.png'
import Logout from '../../../assets/Footer/Profile/sair.png'
import { NavLink } from 'react-router-dom'
import Styles from './Profile.module.css'


const Profile = () => {
  return (
    <section>
        {/* <div>
            <img src="" alt="" />
            <p>{name}</p>
        </div> */}
        <nav>
            <ul className={Styles.navProfile}>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Notifications} alt="Notificações" />
                            <p>Notificações</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={AccountData} alt="Dados da conta" />
                            <p>Dados da conta</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Addresses} alt="Endereços" />
                            <p>Endereços</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Favorites} alt="Favoritos" />
                            <p>Favoritos</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink' to={'/preferencias'}>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Preferences} alt="Preferências" />
                            <p>Preferências</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Settings} alt="Configurações" />
                            <p>Configurações</p>
                        </div>
                    </li>
                </NavLink>
                <NavLink className='navLink'>
                    <li>
                        <div className={Styles.navItensProfile}>
                            <img src={Logout} alt="Sair" />
                            <button>Sair</button>
                        </div>
                    </li>
                </NavLink>
            </ul>
        </nav>
      
    </section>
  )
}

export default Profile
