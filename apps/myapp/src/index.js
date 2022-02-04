import React from 'react';
import ReactDOM from 'react-dom';
// react library for routing
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// plugins styles from node_modules
import "react-notification-alert/dist/animate.css";
import "react-perfect-scrollbar/dist/css/styles.css";
import "@fullcalendar/common/main.min.css";
import "@fullcalendar/daygrid/main.min.css";
import "sweetalert2/dist/sweetalert2.min.css";
import "select2/dist/css/select2.min.css";
import "quill/dist/quill.core.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
// plugins styles downloaded
import "assets/vendor/nucleo/css/nucleo.css";
// core styles
import "assets/scss/argon-dashboard-pro-react.scss?v1.2.0";
import "assets/css/index.css";
// js
import "jquery/dist/jquery.slim.min.js";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import AdminLayout from "layouts/Admin.js";
import RTLLayout from "layouts/RTL.js";
import AuthLayout from "layouts/Auth.js";
import IndexView from "views/Index.js";
import { Provider } from "contexts/DataContext";

//Amplify
import Amplify from 'aws-amplify'
import awsconfig from './aws-exports'
// Amplify.configure({...awsconfig, ssr: true})
Amplify.configure(awsconfig);


ReactDOM.render(
  <Provider>
    <BrowserRouter>
      <Switch>
        <Route path="/admin" render={(props) => <AdminLayout {...props} />} />
        <Route path="/rtl" render={(props) => <RTLLayout {...props} />} />
        <Route path="/auth" render={(props) => <AuthLayout {...props} />} />
        <Route path="/" render={(props) => <IndexView {...props} />} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
