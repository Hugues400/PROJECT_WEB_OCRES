import React from 'react';
import HeaderAdmin from './HeaderAdmin.js';
import ContentAdmin from './ContentAdmin.js';


import './Admin.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class Admin extends React.Component {
    render() {
      return (
          <div>
            <div className="div-header">
               <HeaderAdmin/>
            </div>
            <div>
               <ContentAdmin/>
            </div>
          </div>
      );
    }
 }
 export default Admin;
 
 
 
 
 /*function Admin() {
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
 
 export default Admin;*/