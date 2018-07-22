import React from 'react'
import {
  Card,
  WingBlank,
  Button,
  WhiteSpace
} from 'antd-mobile';
import Header  from '../../components/Header'
import './buy.less'

import selected from '../../images/selected.png'
import unselected from '../../images/unselected.png'
import wechatLogin from '../../images/wechat.png'
import alipayLogin from '../../images/alipay.png'


export default class CarrierBuy extends React.Component {
  state = {
    content: "1.包月会员可免费收听会员专区的所有内容",
    value: 1,
    cates: [
      {id:1,title:'15元/月', selected:selected},
      {id:2,title:'20元/月',selected:unselected},
      {id:3,title:'25元/月',selected:unselected},
    ]
  }

  handleSelectCate = (id) => {
    let cates = this.state.cates.map((cate) => {
      console.log(id)
      if (cate.id == id) {
        cate.selected = selected
        
      } else {
        cate.selected = unselected
      }
      return cate
    })
    this.setState({
      cates: cates
    })
  }



  render() {
    let { cates } = this.state
    return (
      <div>
        <Header name = "会员专区"  />
        <Card full>
          <Card.Body className="buy-card">
            <div className="title">会员权益：</div>
            <WhiteSpace size="sm" />
            <div className="introduction mt10">
              <p className="explain">1.包月会员可免费收听会员专区的所有内容。</p>
              <p className="explain mt10">2.专区每月10号前新增5集故事。</p>
            </div>
          </Card.Body>
        </Card>
        <dl className="product-list buy-card flex flex-v">
          <dt>会员包月方式：</dt>
          {
            cates.length > 0 ? 
            cates.map((cate,i) => (
              <dd onClick={() => this.handleSelectCate(cate.id)} key={i}>
                <span>{cate.title}</span>
                <img src={cate.selected}  className="right" />
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
          <Button className="become-member">成为会员</Button>
        </WingBlank>
        </WingBlank>
      </div>
    );
  }
}