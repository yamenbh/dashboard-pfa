import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
import { RedirectAs404 } from "./utils/Utils";
import PrivateRoute from "./route/PrivateRoute";

import Layout from "./layout/Index";

import Error404Classic from "./pages/error/404-classic";
import Error404Modern from "./pages/error/404-modern";
import Error504Modern from "./pages/error/504-modern";
import Error504Classic from "./pages/error/504-classic";


import Login from "./pages/auth/Login";


import InvoicePrint from "./pages/pre-built/invoice/InvoicePrint";

const App = (props) => {

  
  return (
    <Switch>
      {/* Auth Pages <span className="nk-menu-icon">
              <Icon name="dashlite-alt" />
            </span> */}

      <Route exact path={`${process.env.PUBLIC_URL}/auth-login`} component={Login}></Route>
  
      {/* Print Pages */}
      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print/:id`} component={InvoicePrint}></Route>

      <Route exact path={`${process.env.PUBLIC_URL}/invoice-print`} component={InvoicePrint}></Route>

      {/*Error Pages*/}
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-classic`} component={Error404Classic}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-modern`} component={Error504Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/404-modern`} component={Error404Modern}></Route>
      <Route exact path={`${process.env.PUBLIC_URL}/errors/504-classic`} component={Error504Classic}></Route>

      {/*Main Routes*/}
      <Route exact path="" component={Layout}></Route>
      <Route component={RedirectAs404}></Route>
    </Switch>
  );
};
export default withRouter(App);
