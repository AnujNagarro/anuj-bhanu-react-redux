import React from "react";
import { Route, Link } from 'react-router-dom';

import DocDescriptionComponent from './doc-description/';

class DocumentsComponent extends React.Component{

   constructor(props){ super(props);}

   render(){
      const match = this.props;
      return (
         <div className="documents">
            <h1>DOCUMENTS SCREEN</h1>
            <Link to={`documents/info`}>Info - </Link>
            <br />
            <Route path="documents/info" component={DocDescriptionComponent}/>
         </div>
      );
   }

}

export default DocumentsComponent;