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
import CarrierCate from './pages/carrier/cate';
import Home from './pages/home';

export default class ERouter extends React.Component {

  render() {
    return (
      <Router>
        <App>
            <Switch>
              <Route exact path = "/carrier/buy"  component = {CarrierBuy}/>
              <Route exact path = "/carrier/center"  component = {CarrierCenter}/>
              <Route exact path = "/carrier/cate/:id"  component = {CarrierCate}/>
              <Route exact path = "/carrier"  component = {Carrier}/>
              <Route exact path="/" component={Carrier} />
            </Switch>
        </App>
      </Router>
    );
  }
}