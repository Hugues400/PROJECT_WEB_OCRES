import React from 'react';

import './App.css';

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{textAlign:"center"}}>En avant pour voyager...</h1>
        <button className="button-switch-page">Lien page administrateur</button>
      </div>
    );
  }
}
 export default Header;
 


 /*function Header() {
    return (
      
      <div>
        <h1>Bonjour</h1>
      </div>
      
      
    );
  }
  
  export default Header;*/