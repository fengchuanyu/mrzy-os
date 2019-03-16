import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper  from  '@/components/PageHeaderWrapper';
import {Table,Button }  from  'antd';
import router from 'umi/router';
import Popups from './Popups'

const columns = [{
  title: '用户姓名',
  dataIndex: 'name',
  // render: text => <a href="javascript:;">{text}</a>,
}, {
  title: '联系方式',
  className: 'column-money',
  dataIndex: 'contact',
}, {
  title: '创建日期',
  dataIndex: 'createtime',
}, {
  title: 'Action',
  dataIndex: '',
  render:() =>{
    return(
      <div>
        <Popups></Popups>
        <Button style={{marginLeft:'5px'}} type="primary" onClick={goCaseHistory}>病例管理</Button>
     </div>
    )

  }
}];

const data = [{
  key: '1',
  name: 'John Brown',
  contact: '12637473829',
  createtime: '2017-02-28 00:00:00',
}, {
  key: '2',
  name: 'Jim Green',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '3',
  name: 'Joe Black',
  contact: '12984578484',
  createtime: '1999-11-15 00:00:00',
},
{
  key: '4',
  name: 'John Brown',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '5',
  name: 'Jim Green',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '6',
  name: 'Joe Black',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
},
{
  key: '7',
  name: 'John Brown',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '8',
  name: 'Jim Green',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '9',
  name: 'Joe Black',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
},
{
  key: '10',
  name: 'John Brown',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '11',
  name: 'Jim Green',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}, {
  key: '12',
  name: 'Joe Black',
  contact: '18596870978',
  createtime: '1999-11-15 00:00:00',
}];

function goCaseHistory (){
  router.push("/casehistory/caselist")
}
@connect(userlist => {
  return {
    userlist,
  };
})
class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>
      <PageHeaderWrapper title='用户列表'></PageHeaderWrapper>
      <Table
        columns={columns}
        dataSource={data}
        bordered
      />,
    </div>;
  }
}
export default UserList;
