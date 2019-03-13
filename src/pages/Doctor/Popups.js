import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button,Form,Input,Icon, Select } from 'antd';


const { TextArea } = Input;
class Popups extends Component {
  state = { visible: false }

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
    return (
      
      <div>
        <Button type="primary" onClick={this.showModal}>
          点击进行修改
        </Button>
        <Modal
          title="修改医生信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          okText="确认"
          cancelText="删除"
        >
        <Form labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} onSubmit={this.handleSubmit}>
        <Form.Item>
            <Input 
            style={{ width:236 }}
            size='small'
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
            defaultValue='李廷利'/>
        </Form.Item>
        <Form.Item>
            <Select
              defaultValue='康复科'
              style={{ width:236 }}
              size='small'
            >
              <Option value="neike">内科</Option>
              <Option value="kangfuke">康复科</Option>
            </Select>
        </Form.Item>
        <Form.Item>
            <Input
              style={{ width:236 }}
              size='small'
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              defaultValue='2楼209'/>
        </Form.Item>
        <Form.Item>
            <Input
              style={{ width:236 }}
              size='small'
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              defaultValue='医学博士'/>
        </Form.Item>
        <Form.Item>
            <Input
              style={{ width:236 }}
              size='small'
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }}/>}
              defaultValue='6'/>
        </Form.Item>
        <Form.Item>
            <TextArea
            autosize={false}
              // style={{ width:236 }}
              size='defualt'
              defaultValue='医生简介 医学博士，博士研究生导师，国家二级教授，享受国务院特贴，黑龙江中医药大学教授。黑龙江优秀中青年专家，黑龙江省卫生系统有突出贡献中青年专家，中国睡眠研究会常务理事，中国睡眠研究会东北工作委员会主任委员。
              李廷利教授从事中药改善睡眠研究20余年，在该研究领域有较高的学术造诣和学术地位。创立了“四位一体睡眠康复治疗模式”，擅长应用四联疗法诊治各种失眠症。'/>
        </Form.Item>
        <div>
          <img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" style={{width:150,height:200}}/>
        </div>
        
      </Form>
        </Modal>
      </div>
    );
  }
}
export default Popups;