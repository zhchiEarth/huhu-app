import React from 'react'
import {
    NavBar,
    Icon
} from 'antd-mobile';
import back from '../../images/back.png'
import './index.less'

export default class Header extends React.Component{
    //如果历史记录小于1，返回指定页面
    goHistoryBack = () => {
        if (history.length > 1) {
            window.history.go(-1);
        } else {
            var storeId = getCookie('storeId',1);
            window.location.href = `${href}/${storeId}`;
        }
    }
    render() {
        const { name,right  } = this.props;
        return (
            <NavBar
            mode = "dark"
            onLeftClick={() => this.goHistoryBack}
            icon={<img src={back} className="back-img" />}
            className = "header"
            rightContent={right ? right : ''}>{name}</NavBar>
        );
    }
}