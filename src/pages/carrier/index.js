import React from 'react'
import {
  Flex,
  Button,
  WingBlank,
  Toast
} from 'antd-mobile';
import { Link } from 'react-router-dom'
import Cookies from 'js-cookie'
import { signValid } from '../../api/carrier'
import Header  from '../../components/Header'
import './index.less'
import imgbg from  '../../images/unicom_bg.png'
import backImg from '../../images/back.png'

export default class Carrier extends React.Component {

  constructor(props) {
    super(props)
    let sign = this.getQueryString('sign')
    if (!Cookies.get('sign') && (!sign || sign.length === 0)) {
      Toast.fail('sign获取失败')
      return ;
    }

    if (sign && sign.length > 0) {
      let loginSign = this.hex2bin(sign)
      signValid({sign: loginSign}).then((res)=>{
        Cookies.set('sign', loginSign, {
          extends: 1 //1day
        })
      })
    }
  }

  getQueryString = function (name) {
      let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
      let r = window.location.search.substr(1).match(reg);
      if (r !== null) return unescape(r[2]);
      return null;
  };

    hex2bin = (str) => {
        let sbin = "";
        for ( let i = 0; i < str.length; i += 2 ) {
            var v =  str.substr(i, 2);
            sbin += String.fromCharCode(parseInt(v,16))
        }
        return sbin;
    }

    gpBay = () => {
      this.props.history.push("/carrier/buy");
    }

  render() {
    return (
      <div>
        <Header
        name = "中国联通客户专属"
        leftMenu={<a href={ 'http://www.baidu.com/' + '#hh:' + encodeURI('{opentype:back}')}>
              <img src={backImg} className="back-img" alt="" />
            </a>}
        rightMenu={<Link to="/carrier/center" style={{color:'#ffffff'}}>会员专区</Link>} />
        <Flex>
          <div className="unicom-bg">
            <img src={imgbg} alt=""/>
          </div>
        </Flex>

        <div className="unicom-body">
          <div className="unicom-buy-mode pl20 pr20">
            <div className="title pt26">购买方式：</div>
            <p className="explain mt10 mb12">故事包月权益在您支付完成之后，即时生效。</p>
          </div>
          <div className="hr"></div>
          <div className="pl20 pr20">
              <div className="title pt12">退订方式：</div>
              <p className="explain pt12 pb22">1.编辑短信"CX"到10655198664，
查询本机包月业务（如1：包月1）。根据业务提示可编辑“TD1”到“10655198664”即可退订业务1：包月1。</p>
              <p className="explain pb22">2.订购后的服务期限是到订购自然月的最后一天，退订后用户仍可享受服务到已订购的服务权益。</p>
              <p className="explain pb22">3.客服退订（tel:4000114006)</p>
          </div>
        </div>
        <WingBlank size="lg"><Button className="become-member" onClick={this.gpBay}>成为会员</Button></WingBlank>
      </div>
    );
  }
}