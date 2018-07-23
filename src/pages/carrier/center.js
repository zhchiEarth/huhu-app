import React from 'react'
import Header  from '../../components/Header'
import { Modal, Button } from 'antd-mobile';
// import {withRouter} from "react-router-dom";

import './center.less'


import moreImg from '../../images/more.png'

export default class CarrierCenter extends React.Component {

   constructor(props) {
      super(props);
      this.state = {
        modal1: false,
        modal2: false,
      };
    }

      showModal = key => (e) => {
      e.preventDefault(); // 修复 Android 上点击穿透
      this.setState({
        [key]: true,
      });
    }
    onClose = key => () => {
      this.setState({
        [key]: false,
      });
    }

    goStories = () => {
      this.props.history.push("/carrier/stories/" + 1);
    }



  render() {
    return (
      <div>
        <Header name = "会员专区"  />
        <div className="carrier-center-list  ">
          <div className="item">
            <div className="content" onClick={() => this.goStories(1)}>
              <div className="right">
              </div>
              <div className="left">
                <h2 className="title">深海里的龙骸石</h2>
                <p className="introduction">一句话简介一句话简介一介一介</p>
                <span className="sum">集数：100</span>
              </div>
            </div>
            <div className="footer" onClick={this.showModal('modal1')}>
              <p className="deadline">15元/月   会员期限: 5.22号前免费收听</p>
              <img src={moreImg} />
            </div>
          </div>
          <div className="hr"></div>

          <div className="item">
            <div className="content">
              <div className="right">
              </div>
              <div className="left">
                <h2 className="title">深海里的龙骸石</h2>
                <p className="introduction">一句话简介一句话简介一介一介</p>
                <span className="sum">集数：100</span>
              </div>
            </div>
            <div className="footer">
              <p className="deadline">15元/月   会员期限: 5.22号前免费收听</p>
              <img src={moreImg} />
            </div>
          </div>
          <div className="hr"></div>

          <div className="item">
            <div className="content">
              <div className="right">
              </div>
              <div className="left">
                <h2 className="title">深海里的龙骸石</h2>
                <p className="introduction">一句话简介一句话简介一介一介</p>
                <span className="sum">集数：100</span>
              </div>
            </div>
            <div className="footer">
              <p className="deadline">15元/月   会员期限: 5.22号前免费收听</p>
              <img src={moreImg} />
            </div>
          </div>

        </div>
        <Modal
          visible={this.state.modal1}
          transparent
          // popup
          maskClosable={false}
          onClose={this.onClose('modal1')}
          // title="会员权益"
          className="carrier-center-modal"
        >
            <h3 className="title">会员权益</h3>
            <div className="content">
              1.包月会员可免费收听会员专区的所有内容。

              2.专区每月10号前新增5集故事。
            </div>
             <div className="footer">
                <Button onClick={this.onClose('modal1')} className="close">我知道了</Button>
            </div>
        </Modal>
      </div>
    );
  }

}