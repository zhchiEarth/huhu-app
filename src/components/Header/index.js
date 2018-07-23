import React from 'react'
import {
    NavBar,
    Icon
} from 'antd-mobile';
import back from '../../images/back.png'
import './index.less'

export default class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    //如果历史记录小于1，返回指定页面
    goHistoryBack = () => {
        if (window.history.length > 1) {
            window.history.go(-1);
        }
    }

    render() {
        const { name, rightMenu  } = this.props;
        return (
            <NavBar
            mode = "dark"
            onLeftClick={() => this.goHistoryBack()}
            icon={<img src={back} className="back-img" />}
            className = "header"
            rightContent={rightMenu ? rightMenu : ''}>
                {name}
            </NavBar>
        );
    }
}