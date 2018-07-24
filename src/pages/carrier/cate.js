import React from 'react'
import Header  from '../../components/Header'
import { Modal, Button } from 'antd-mobile';
import './cate.less'
import { getCate } from '../../api/carrier'
import headsetImg from '../../images/headset.png'
import timeImg from '../../images/playtime.png'

export default class CarrierCate extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        cateId: this.props.match.params.id,
        title: '',
        cateItem: {},
      };
    }

  componentDidMount(){
    this.requestList()
  }

  requestList = ()=>{
    getCate({
      cate_id: this.state.cateId
    }).then((res)=>{
        this.setState({
          cateItem: res
        })
    })
  }


  render() {
    let { cateItem } = this.state
    return (
      <div className="carrier-cate-container">
        <Header name ={ cateItem.name }  />
        <div className="carrier-cate-header">
          <span className="title">更新至{cateItem.story_new_num}集，共{cateItem.story_num}集</span>
          <div className="bg-img"><img src={cateItem.image} /></div>
        </div>
          <ul className="cate-list">
            <li className="cate-item">
              <div className="container">
                <div className="cate-img"></div>
                <div className="content">
                    <span>螃蟹公主在哪里</span>
                    <div className="introduction">
                      <img src={headsetImg} />
                      <span>466</span>
                      <img src={timeImg} />
                      <span>03 : 16</span>
                    </div>
                </div>
              </div>
            </li>
          </ul>

      </div>
    );
  }
}