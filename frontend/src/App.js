import React from 'react';
import Header from './Header.js';
import Content from './Content.js';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
   render() {
     return (
         <div>
           <div className="div-header">
              <Header/>
           </div>
           <div>
              <Content/>
           </div>
         </div>
     );
   }
}
export default App;




/*function App() {
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

export default App;*/