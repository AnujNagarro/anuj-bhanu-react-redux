import React from "react";
import { BrowserRouter, HashRouter, Route, Link, Switch } from "react-router-dom";

import ApplyComponent from "./screens/apply/";
import DocumentsComponent from "./screens/documents/";
import DashboardComponent from "./screens/dashboard/";
import DocDescriptionComponent from "./screens/documents/doc-description/";


const Routes = ()=> {
   return (
      <HashRouter>
         <div>
            <Route exact component={ApplyComponent} path="/apply"></Route>
            <Route exact component={DocumentsComponent} path="/documents"></Route>
            <Route exact component={DashboardComponent} path="/dashboard"></Route>
         </div>
      </HashRouter>
   );
}

export default Routes;