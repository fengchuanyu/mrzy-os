import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button,Input,Form } from 'antd';
import style from './Popups.less';

@connect(popups => {
    return {
      popups,
    };
  })
  
  class Popups extends Component {
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
    return <div className={style.popups_1}>
    <Button type="primary" onClick={this.showModal}>
        留言
    </Button>
    <Modal
        title="留言信息"
        visible={this.state.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
    >
    <Form layout="vertical">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        发布留言<Input></Input>
        <Button type="primary" htmlType="submit">发布</Button>
    </Form>
    </Modal>
    </div>
  }
}

export default Popups;