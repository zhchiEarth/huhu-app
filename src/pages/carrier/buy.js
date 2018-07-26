import React from 'react'
import {
  Card,
  WingBlank,
  Button,
  WhiteSpace
} from 'antd-mobile';
import Header  from '../../components/Header'
import './buy.less'
import { cateList, confirmPay } from '../../api/carrier'

import selected from '../../images/selected.png'
import unselected from '../../images/unselected.png'
import wechatLogin from '../../images/wechat.png'
import alipayLogin from '../../images/alipay.png'


export default class CarrierBuy extends React.Component {
  state = {
    cates: [],
    selectedCate: {
      content:[]
    },
    alipayFrom: null
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
    this.state.cates.forEach((cate, index) => {
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
    let _this = this;
    console.log('topay')
    confirmPay({
      cate_id: this.state.selectedCate.id
    }).then((res) => {
      console.log(res)
      _this.setState({
          alipayFrom : res
      });
      document.forms['alipaysubmit'].submit();
    })
  }

  render() {
    let { cates, selectedCate, alipayFrom } = this.state
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
        {alipayFrom?<div /*  后端给的表单 - 支付宝  */
                    dangerouslySetInnerHTML={{
                        __html: alipayFrom.split('<script>')[0]
                    }}
                />:''}

        <WhiteSpace size="xl" />
        <WhiteSpace size="xl" />
        <WingBlank size="lg">
        <WingBlank size="sm">
          <Button className="become-member" size="large" onClick={this.toPay}>成为会员</Button>
        </WingBlank>
        </WingBlank>
      </div>
    );
  }
}