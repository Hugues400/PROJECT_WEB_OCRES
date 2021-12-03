import React from "react";
import Widget1 from './Widget1.js';
import Widget2 from './Widget2.js';

import './App.css';

class Content extends React.Component {
  render() {
    return (
      <div>
        <div className="div-widget1">
          <Widget1/>
        </div>
        <div className="div-widget2">
          <Widget2/>
        </div>

      </div>
    );
  }
}
export default Content;




 /*function Content() {
    return (
      
      <div>
        <Widget1/>


      </div>
      
      
    );
  }
  
  export default Content;*/
  