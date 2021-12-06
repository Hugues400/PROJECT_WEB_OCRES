import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import App from './App.js';

import './Admin.css';

class HeaderAdmin extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Bienvenue sur la page administrateur</h1>
        <Button className="button-switch-page">Retour à la page principale</Button>
      </div>
    );
  }
}
 export default HeaderAdmin;
 


 /*function Header() {
    return (
      
      <div>
        <h1>Bonjour</h1>
      </div>
      
      
    );
  }
  
  export default Header;*/