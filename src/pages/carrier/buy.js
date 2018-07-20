import React from 'react'
import {
  Card,
  WingBlank,
  Button,
  Radio,
  Icon
} from 'antd-mobile';
import Header  from '../../components/Header'
import './buy.less'

const RadioItem = Radio.RadioItem;

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
            <div>
              <p className="explain mt10">1.包月会员可免费收听会员专区的所有内容。</p>
              <p className="explain">2.专区每月10号前新增5集故事。</p>
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
            <Icon type="check-circle-o" />
          </dd>
          <dd>
            <span>20元/月</span>
            <Icon type="check-circle-o" />
          </dd>
          <dd>
            <span>25元/月</span>
            <Icon type="check-circle-o" />
          </dd>
        </dl>
        <dl className="pay-mode buy-card flex flex-v">
          <dt>支付方式：</dt>
          <dd>
            <span>支付宝</span>
            <Icon type="check-circle-o" />
          </dd>
          <dd>
            <span>微信</span>
            <Icon type="check-circle-o" />
          </dd>
        </dl>
        <WingBlank size="lg"><Button className="become-member">成为会员</Button></WingBlank>
      </div>
    );
  }
}