import React from 'react'
import { Link } from "react-router-dom";
import logo from '../navbar/logo.jpg'
import FooterItem from './FooterItem';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='logo'>
            <Link><img src={logo}/></Link>
      </div>
      <div className='items'>
        <FooterItem title="Contactez-nous" items={["Contactez nous","Aide & FAQ"]}/>
        <FooterItem title="A propos du magasin" items={["À propos","Méthodes de payement","Expedition et manutention"]}/>
        <FooterItem title="Termes et Politiques"items={["Conditions d'utilisation","Retours & échanges","Politique de Confidentialité"]}/>
      </div>
    </div>
  )
}

export default Footer
