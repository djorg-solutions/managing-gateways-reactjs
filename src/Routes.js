import React from 'react';
import { BrowserRouter as Router, Switch} from 'react-router-dom'

import { RouteWithLayout } from './Components';
import { Main } from './Layout';

import {
  Home as HomeView,
  Gateway as GatewayView,
  Device as DeviceView,
} from './Views';

const Routes = () => {
  return (
    <Router>
    <Switch>

     <RouteWithLayout
        component={HomeView}
        exact
        layout={Main}
        path="/"
      />
    
      <RouteWithLayout
        component={GatewayView}
        exact
        layout={Main}
        path="/gateways"
      />
      <RouteWithLayout
        component={DeviceView}
        exact
        layout={Main}
        path="/devices"
      />  

    </Switch>
    </Router>
  );
};

export default Routes;
