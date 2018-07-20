import React from 'react'
import {
    NavBar,
    Icon
} from 'antd-mobile';

import './index.less'

export default class Header extends React.Component{
    render() {
        const { name,right  } = this.props;
        return (
            <NavBar
            mode = "dark"
            icon={<Icon type="left" />}
            className = "header"
            rightContent={right ? right : ''}>{name}</NavBar>
        );
    }
}