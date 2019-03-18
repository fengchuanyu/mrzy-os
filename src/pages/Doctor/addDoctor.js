import React, { Component } from 'react';
import { connect } from 'dva';
import { Upload, Input, Icon,message, Button, Form, Select } from 'antd';
import addDoctorStyles from './addDoctor.less';
import style from './addDoctor.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';

const { Option } = Select;
const { TextArea } = Input;

const upProps = {
  name: 'file',
  action: '//jsonplaceholder.typicode.com/posts/',//接口还没调整好
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


@connect(adddoc => {
  return {
    adddoc,
  };
})
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      desc:'',
      price:'',
      office:'',
      place:'',
      job:''
    };
  }

  addDoc = () => {
    console.log(this.props);
    const { dispatch } = this.props;
      dispatch({
        type: 'adddoc/add',
        payload: {
          name:this.state.name,
          office:this.state.office,
          desc:this.state.desc,
          place:this.state.place,
          job:this.state.job,
          price:this.state.price,
        },
      });
    }

    getName = (e) =>{
      this.setState({
        name:e.target.value
      })
    }
    getDesc = (e) =>{
      this.setState({
        desc:e.target.value
      })
    }
    getPrice = (e) =>{
      this.setState({
        price:e.target.value
      })
    }
    getOffice = (value) =>{
      this.setState({
        office:value
      })
      // console.log(this.state.office);
    }
    getPlace = (e) =>{
      this.setState({
        place:e.target.value
      })
    }
    getJob = (e) =>{
      this.setState({
        job:e.target.value
      })
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
    const { dispatch } = this.props;
    // console.log(this.props);
    return (
      <div>
      <div>
      <PageHeaderWrapper title='添加医生'></PageHeaderWrapper>
      </div>
      <div className={style.container}>
        <Form>
          <Upload {...upProps} name="img" className="111">
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
              onChange={this.getName}
            />
          </Form.Item>
          <Form.Item>
            <Select style={{ width: 300 }} size="small" placeholder="请选择" name="office" onChange={this.getOffice}>
              <Option value="kangfuke">内科</Option>
              <Option value="neike">康复科</Option>
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
              onChange={this.getPlace}
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
              onChange={this.getJob}
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
              onChange={this.getPrice}
            />
          </Form.Item>
          <Form.Item validateStatus="error" help="请填写医生简介">
            <TextArea style={{ width: 300 }} size="defualt" placeholder="医生简介" id="error" name="desc" onChange={this.getDesc}/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={this.addDoc}>
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
