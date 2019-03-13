import { Modal, Button, Input } from 'antd';
import React, { Component } from 'react';
import { connect } from 'dva';

@connect(feature => {
  return {
    feature,
  };
})
class Popups extends Component {
  state = { visible: false };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };

  render() {
    const { TextArea } = Input;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          编辑
        </Button>
        <Modal
          title="病症名称"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <TextArea rows={4} placeholder="请输入您要编辑的内容" />,
        </Modal>
      </div>
    );
  }
}
export default Popups;
