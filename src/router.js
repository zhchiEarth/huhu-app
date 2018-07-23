import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import App from './App'
import Carrier from './pages/carrier';
import CarrierBuy from './pages/carrier/buy';
import CarrierCenter from './pages/carrier/center';
import CarrierStories from './pages/carrier/stories';
import Home from './pages/home';

export default class ERouter extends React.Component {

  render() {
    return (
      <Router>
        <App>
            <Switch>
              <Route path = "/carrier/buy"  component = {CarrierBuy}/>
              <Route path = "/carrier/center"  component = {CarrierCenter}/>
              <Route path = "/carrier/stories/:id"  component = {CarrierStories}/>
              <Route path = "/carrier"  component = {Carrier}/>
              <Route path="/" component={Home} />
            </Switch>
        </App>
      </Router>
    );
  }
}