import React from 'react'
import Header  from '../../components/Header'
import { Modal, Button } from 'antd-mobile'
import './center.less'
import { getOrderList } from '../../api/carrier'
import { formatValidityDate } from '../../utils/utils'
import moreImg from '../../images/more.png'

export default class CarrierCenter extends React.Component {
    state = {
      modalShow: false,
      orderList: [],
      popupContent: []
    }

  componentDidMount(){
    this.requestList()
  }

  requestList = ()=>{
    getOrderList({}).then((res)=>{
      this.setState({
          orderList: res
      })
    })
  }

  textConvert = (content) => {
      if (typeof content === "string") {
        content = content.split("\n")
      }
      return content
  }

    showModal = key => (e) => {
      this.setState({
        modalShow: true,
        popupContent: this.textConvert(this.state.orderList[key].content)
      });
    }
    onClose = key => () => {
      this.setState({
        [key]: false,
      });
    }

    goStories = (id) => {
      this.props.history.push("/carrier/cate/" + id)
    }



  render() {
    let { orderList, popupContent } = this.state
    return (
      <div>
        <Header name = "会员专区"  />
        <div className="carrier-center-list">
          {
            orderList.length > 0 ?
            orderList.map((order, key) => (
              <div className="item" key={key}>
                <div className="content" onClick={() => this.goStories(order.cate_id)}>
                  <div className="right">
                    <img src={order.cate_image} alt="" />
                  </div>
                  <div className="left">
                    <h2 className="title text-overflow">{order.cate_name}</h2>
                    <p className="introduction text-overflow">{order.introduction}</p>
                    <span className="sum">集数：{order.story_num}</span>
                  </div>
                </div>
                <div className="footer" onClick={this.showModal(key)}>
                  <p className="deadline">{order.cate_name}   会员期限: { formatValidityDate(order.validity)}号前免费收听</p>
                  <img src={moreImg} alt="" />
                </div>
              </div>
            )) : ''
          }

        </div>
        <Modal
          visible={this.state.modalShow}
          transparent
          // popup
          maskClosable={false}
          onClose={this.onClose('modalShow')}
          className="carrier-center-modal">
            <div className="container">
              <h3 className="title">会员权益</h3>
              <div className="content">
                {
                  popupContent && popupContent.length > 0  ?
                  popupContent.map((content, i) => (
                    <p key={i}>{content}</p>
                  ))
                  : ''
                }
              </div>
              <div className="footer">
                  <Button onClick={this.onClose('modalShow')} className="close">我知道了</Button>
              </div>
            </div>
        </Modal>
      </div>
    )
  }

}