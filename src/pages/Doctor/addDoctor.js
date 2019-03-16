import React, { Component } from 'react';
import { connect } from 'dva';
import { Upload, Input, Icon, Button, Form, Select } from 'antd';
import addDoctorStyles from './addDoctor.less';
import style from './addDoctor.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Option } = Select;
const { TextArea } = Input;
@connect(doctor => {
  return {
    doctor,
  };
})
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'doctor/add',
      payload: { testaa: '123123' },
    });
  }
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    console.log(this.props);
    return (
      <div>
        <div>
          <PageHeaderWrapper title="添加医生" />
        </div>
        <div className={style.container}>
          <Form onSubmit={this.handleSubmit}>
            <Upload name="img">
              <Button>
                <Icon labelCol={{ span: 5 }} wrapperCol={{ span: 12 }} type="upload" />
                上传图片
              </Button>
            </Upload>
            <Form.Item>
              {getFieldDecorator('note', {
                rules: [{ required: true, message: '医生姓名' }],
              })(
                <Input
                  style={{ width: 300 }}
                  size="small"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="医生姓名"
                  name="name"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Select style={{ width: 300 }} size="small" placeholder="请选择" name="office">
                <Option value="neike">内科</Option>
                <Option value="kangfuke">康复科</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('note', {
                rules: [{ required: true, message: '请输入医生工作地点' }],
              })(
                <Input
                  style={{ width: 300 }}
                  size="small"
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="医生工作地点"
                  name="name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('note', {
                rules: [{ required: true, message: '请输入医生职称' }],
              })(
                <Input
                  style={{ width: 300 }}
                  size="small"
                  prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="医生职称"
                  name="name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('note', {
                rules: [{ required: true, message: '请输入挂号金额' }],
              })(
                <Input
                  style={{ width: 300 }}
                  size="small"
                  prefix={<Icon type="book" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="挂号金额"
                  name="name"
                />
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('note', {
                rules: [{ required: true, message: '请输入医生简介' }],
              })(
                <TextArea
                  style={{ width: 300 }}
                  size="defualt"
                  placeholder="医生简介"
                  name="desc"
                />
              )}
            </Form.Item>
            <Form.Item>
              <Button type="primary" htmlType="submit">
                点击保存
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    );
  }
}
export default Form.create({ name: 'coordinated' })(Doctor);
