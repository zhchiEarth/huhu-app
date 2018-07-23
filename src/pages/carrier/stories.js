import React from 'react'
import Header  from '../../components/Header'
import { Modal, Button } from 'antd-mobile';
import './story.less'

import headsetImg from '../../images/headset.png'
import timeImg from '../../images/playtime.png'

export default class CarrierStories extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        modal1: false,
        modal2: false,
      };
    }


  render() {
    return (
      <div className="carrier-story-container">
        <Header name = "故事名称"  />

        <div className="carrier-story-header">
          <span className="title">更新至99集，共100集</span>
          <div className="bg-img"></div>
        </div>
          <ul className="story-list">
            <li className="story-item">
              <div className="container">
                <div className="story-img"></div>
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