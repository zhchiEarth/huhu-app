import React from 'react'
import {
  NavBar,
  Icon
} from 'antd-mobile';


export default class Home extends React.Component{
  render() {
    return (
    <NavBar
      mode="light"
      icon={<Icon type="left" />}
      onLeftClick={() => console.log('onLeftClick')}
      rightContent={<span>会员专区</span>}
    >NavBar</NavBar>
    );
  }
}