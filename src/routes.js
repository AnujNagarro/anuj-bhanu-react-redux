import React from "react";
import { Route } from "react-router-dom";

import ApplyComponent from "./screens/apply/";
import DocumentsComponent from "./screens/documents/";
import DashboardComponent from "./screens/dashboard/";
import DocDescriptionComponent from "./screens/documents/doc-description/";


const Routes = ()=> {
   return (
         <div>
            <Route exact component={ApplyComponent} path="/apply"></Route>
            <Route component={DocumentsComponent} path="/documents"></Route>
            <Route exact component={DashboardComponent} path="/dashboard"></Route>
         </div>
   );
}

export default Routes;