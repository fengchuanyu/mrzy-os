import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Input, Button, Icon, Table, Popconfirm, message } from 'antd';

const columns = [
  {
    title: '科室名称',
    dataIndex: 'name',
    key: 'name',
    width:'90%',
    // render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Action',
    key: 'action',
    width:'10%',
    render: () => (
      <span>
        <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary">删除</Button>
        </Popconfirm>
      </span>
    ),
  },
];
const data = [
  {
    key: '1',
    name: '内科',
  },
  {
    key: '2',
    name: '内科',
  },
  {
    key: '3',
    name: '内科',
  },
];

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

@connect(feature => {
  return {
    feature,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };

  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>
        
        <PageHeaderWrapper title="科室管理" />
        <div>
        <Input
        style={{width:'90%'}}
          placeholder="科室管理"
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          suffix={suffix}
          value={userName}
          onChange={this.onChangeUserName}
          ref={node => (this.userNameInput = node)}
        /><Button style={{width:'10%'}} type="primary">添加</Button>
       
        </div>
        <Table columns={columns} dataSource={data} />
      </div>
    );
  }
}
export default Feature;
