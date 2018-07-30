import React from 'react'
import Header  from '../../components/Header'
// import { Modal, Button } from 'antd-mobile';
import './cate.less'
import { getCate, storyList } from '../../api/carrier'
import headsetImg from '../../images/headset.png'
import timeImg from '../../images/playtime.png'
import nowplayImg from '../../images/nowplay_icon.png'
// import lastplayImg from '../../images/nowplay_icon.png'

export default class CarrierCate extends React.Component{
  constructor(props) {
      super(props);
      this.state = {
        cateId: this.props.match.params.id,
        cateItem: {},
        stories: [],
        currentMusic: {}
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

    storyList({
        cate_id: this.state.cateId
      }).then((res) => {
        this.setState({
          stories: res.story,
          currentMusic: res.story[0]
        })
        let audio = this.refs.audio;
        audio.autoplay = true
        audio.play();
      })
  }

  /**
   * 选择不同的故事
   */
  handleSelectStory = (storyKey) => {
     this.setState({
        currentMusic: this.state.stories[storyKey]
      })
        // let audio = this.refs.audio
    //   console.log(audio.src, audio.currentSrc)
    //   console.log(storyKey)
      // audio.src = this.state.stories[storyKey].filename
      // audio.play();
  }

  render() {
    let { cateItem, stories, currentMusic } = this.state
    return (
      <div className="carrier-cate-container">
        <Header name ={ cateItem.name }  />
        <div className="carrier-cate-header">
          <span className="title">更新至{cateItem.story_new_num}集，共{cateItem.story_num}集</span>
          <div className="bg-img"><img src={cateItem.image} alt="" /></div>
        </div>
        <ul className="story-list">
          {
            stories.length > 0 ?
            stories.map((story,i) => (
            <li className="story-item" key={i} onClick={() => this.handleSelectStory(i)}>
              <div className="story-item-left">
                {
                  (currentMusic && currentMusic.id === story.id) ?
                  <img src={nowplayImg} alt="" /> : ''
                }
              </div>
                <div className="container">
                  <div className="story-img"><img src={story.image} alt="" /></div>
                  <div className="content">
                      <span>{ story.title }</span>
                      <div className="introduction">
                        <img src={headsetImg} alt="" />
                        <span>{ story.view_num }</span>
                        <img src={timeImg} alt="" />
                        <span>{ story.duration }</span>
                      </div>
                  </div>
                </div>
              </li>
          )) : ''
          }
        </ul>
        <audio src={ (currentMusic && currentMusic.filename && currentMusic.filename.length > 0) ? currentMusic.filename : '' } ref="audio"></audio>


      </div>
    );
  }
}