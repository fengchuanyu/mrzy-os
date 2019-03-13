import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button,Input,Form } from 'antd';
import style from './Detail.less';

@connect(detail => {
    return {
      detail,
    };
  })
  
  class Detail extends Component {
    constructor(props) {
      super(props);
      this.state = {
        visible: false,
      };
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      }
    
      handleOk = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
      }
    
      handleCancel = (e) => {
        console.log(e);
        this.setState({
          visible: false,
        });
    }

render() {
    return <div className={style.detail_1}>
    <Button type="primary" onClick={this.showModal}>
        详情
    </Button>
    <Modal
        title="留言信息"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
    >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
    </Modal>
    </div>
  }
}

export default Detail;