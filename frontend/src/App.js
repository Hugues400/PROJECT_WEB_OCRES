import React from 'react';
import Header from './Header.js';
import Content from './Content.js';
import './Style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
    <div>
      <div>
        <Header/>
      </div>
      <div>
        <Content/>
      </div>
    </div>
    
  );
}

export default App;
