import React from "react";
import Widget1 from './Widget1.js';
import Widget2 from './Widget2.js';
import Widget3 from './Widget3.js';
import Widget4 from './Widget4.js';
import Widget5 from './Widget5.js';
import Widget6 from './Widget6.js';

import './App.css';

class Content extends React.Component {
  render() {
    return (
      <div>
        
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="div-widget1">
                <Widget1/>
              </div>
            </div>
            <div className="col-6">
              <div className="div-widget2">
                <Widget2/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="div-widget3">
                <Widget3/>
              </div>
            </div>
            <div className="col-6">
              <div className="div-widget4">
                <Widget4/>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-6">
              <div className="div-widget5">
                <Widget5/>
              </div>
            </div>
            <div className="col-6">
              <div className="div-widget6">
                <Widget6/>
              </div>
            </div>
          </div>

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
  