import React from 'react'
import {
    NavBar
} from 'antd-mobile';
import back from '../../images/back.png'
import './index.less'

export default class Header extends React.Component{
    constructor(props) {
        super(props)
    }

    //如果历史记录小于1，返回指定页面
    goHistoryBack = () => {
        // let backNativeUrl = ['/', '/carrier', '/carrier/']

        // if (backNativeUrl.includes(window.location.pathname)) {
        //     window.location.href  = 'http://www.baidu.com/' + '#hh:' + encodeURI('{opentype:back}');
        //     console.log('http://www.baidu.com/' + '#hh:' + encodeURI('{opentype:back}'))
        // }
        if (window.history.length > 1) {
            window.history.go(-1);
        } else {
            window.location.href  = window.location.href + '#hh:' + encodeURI('{opentype:back}');
        }
    }

    render() {
        const { name, rightMenu, leftMenu  } = this.props;
        console.log(leftMenu)
        return (
            <NavBar
                mode = "dark"
                onLeftClick={() => this.goHistoryBack()}
                icon={ leftMenu ? leftMenu : <img src={back} className="back-img" alt="" /> }
                className = "header"
                rightContent={rightMenu ? rightMenu : ''}>
                {name}
            </NavBar>
        );
    }
}