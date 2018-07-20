import React, { Component } from 'react';
import logo from './logo.svg';
import './style/style.less';
import {
  Flex,
  WhiteSpace
} from 'antd-mobile';
class App extends Component {
  render() {
    return (
      <div className="app">
        {this.props.children}
      </div>
    );
  }
}

export default App;
