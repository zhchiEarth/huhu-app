import React from 'react'
import {
    NavBar,
    Icon
} from 'antd-mobile';
import back from '../../images/back.png'
import './index.less'

export default class Header extends React.Component{
    render() {
        const { name,right  } = this.props;
        return (
            <NavBar
            mode = "dark"
            icon={<img src={back} className="back-img" />}
            className = "header"
            rightContent={right ? right : ''}>{name}</NavBar>
        );
    }
}