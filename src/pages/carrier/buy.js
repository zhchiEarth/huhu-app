import React from 'react'
import {
  Card,
  WingBlank,
  Button,
  WhiteSpace
} from 'antd-mobile';
import Header  from '../../components/Header'
import './buy.less'
import { cateList, aliPay } from '../../api/carrier'

import selected from '../../images/selected.png'
import unselected from '../../images/unselected.png'
import wechatLogin from '../../images/wechat.png'
import alipayLogin from '../../images/alipay.png'


export default class CarrierBuy extends React.Component {
  state = {
    cates: [],
    selectedCate: {
      content:[]
    }
  }

  componentDidMount(){
    this.requestList()
  }

  requestList = ()=>{
    cateList({}).then((res)=>{
        this.setState({
            cates: res,
            selectedCate: this.textConvert(res[0])
        })
    })
  }

  textConvert = (cate) => {
      if (typeof cate.content == "string") {
        cate.content = cate.content.split("\n")
      }
      return cate
  }

  handleSelectCate = (id) => {
    let cates = this.state.cates.forEach((cate, index) => {
      if (id === cate.id) {
        this.setState({
            selectedCate: this.textConvert(cate)
        })
      }
    })
  }

  /**
   * 支付
   */
  toPay = () => {
    console.log('topay')
      // axios.ajax({
      //     url:'/carrier/confirmPay',
      //     method: 'get'
      //     data:{cate_id: this.state.selectedCate.id}
      // }).then((res)=>{
      //   console.log(res)
          // this.setState({
          //     cates: res.msg,
          //     selectedCate: this.textConvert(res.msg[0])
          // })
      // })
  }

  render() {
    let { cates, selectedCate } = this.state
    console.log(cates.length)
    return (
      <div>
        <Header name = "会员专区" rightContent="" />
        <Card full>
          <Card.Body className="buy-card">
            <div className="title">会员权益：</div>
            <WhiteSpace size="sm" />
            <div className="introduction mt10">
               {
                 selectedCate.content.length > 0 ?
                 selectedCate.content.map((ctx, index) => (
                   <p key={index}>{ctx}</p>
                 )) : ''
               }
            </div>
          </Card.Body>
        </Card>
        <dl className="product-list buy-card flex flex-v">
          <dt>会员包月方式：</dt>
          {
            cates.length > 0 ?
            cates.map((cate,i) => (
              <dd onClick={() => this.handleSelectCate(cate.id)} key={i}>
                <span>{cate.name}</span>
                <img src={ cate.id == selectedCate.id ? selected : unselected }  className="right" />
              </dd>
            ))
            : ''
          }
        </dl>
        <div className="pay-mode flex flex-v">
          <h1 className="title padd20 pt20">支付方式：</h1>
          <div className="pay-item padd20">
            <img src={alipayLogin} className="pay-logo" />
            <span>支付宝</span>
            <img src={selected} className="right" />
          </div>
          <div className="hr"></div>
          <div className="pay-item padd20 pb12">
            <img src={wechatLogin} className="pay-logo" />
            <span>微信</span>
            <img src={unselected} className="right" />
          </div>
          <div className="hr"></div>
        </div>
        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
        <WingBlank size="sm">
          <Button className="become-member" onClick={this.toPay}>成为会员</Button>
        </WingBlank>
        </WingBlank>
      </div>
    );
  }
}