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

  render() {
    return (
      <div>
      <div>
      <PageHeaderWrapper title='添加医生'></PageHeaderWrapper>
      </div>
      <div className={style.container}>
        <Form action="">
          <Upload name="img">
            <Button>
              <Icon type="upload" />
              上传图片
            </Button>
          </Upload>
          <Form.Item validateStatus="error" help="请填写医生姓名">
            <Input
              style={{ width: 300 }}
              size="small"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="医生姓名"
              id="error"
              name="name"
            />
          </Form.Item>
          <Form.Item>
            <Select style={{ width: 300 }} size="small" placeholder="请选择" name="office">
              <Option value="neike">内科</Option>
              <Option value="kangfuke">康复科</Option>
            </Select>
          </Form.Item>
          <Form.Item validateStatus="error" help="请填写医生工作地点">
            <Input
              style={{ width: 300 }}
              size="small"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="医生工作地点"
              id="error"
              name="place"
            />
          </Form.Item>
          <Form.Item validateStatus="error" help="请填写医生职称">
            <Input
              style={{ width: 300 }}
              size="small"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="医生职称"
              id="error"
              name="job"
            />
          </Form.Item>
          <Form.Item validateStatus="error" help="请填写挂号金额">
            <Input
              style={{ width: 300 }}
              size="small"
              prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder="挂号金额"
              id="error"
              name="price"
            />
          </Form.Item>
          <Form.Item validateStatus="error" help="请填写医生简介">
            <TextArea style={{ width: 300 }} size="defualt" placeholder="医生简介" id="error" name="desc"/>
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
export default Doctor;
