import React from 'react'
import {
  Card,
  WingBlank,
  Button,
  Radio,
  Icon,
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
    content: "<p>1.包月会员可免费收听会员专区的所有内容。</p><p>2.专区每月10号前新增5集故事。</p>",
    value: 0
  }

  onChange = (value) => {
    console.log('checkbox');
    this.setState({
      value,
    });
  };

  render() {
     const data = [
      { value: 0, label: 'doctor' },
      { value: 1, label: 'bachelor' },
    ];
    const {value} = this.state;
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
        {/* <div className="buy-form">
          <div className="title">用户信息填写：</div>
          <form>
            <div className="buy-input mt10">
              <label>手机号码</label>
              <input placeholder="手机号码" />
            </div>
          </form>
        </div> */}
        <dl className="product-list buy-card flex flex-v">
          <dt>会员包月方式：</dt>
          <dd>
            <span>15元/月</span>
            <img src={selected} className="right" />
          </dd>
          <dd>
            <span>20元/月</span>
            <img src={unselected} className="right" />
          </dd>
          <dd>
            <span>25元/月</span>
            <img src={unselected} className="right" />
          </dd>
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