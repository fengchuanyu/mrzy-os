import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper  from  '@/components/PageHeaderWrapper';
import {Table,Button,Popover }  from  'antd';
import router from 'umi/router';

const content = (
  <div>
    <p>姓名:</p>
    <p>性别:</p>
    <p>联系方式:</p>
    <p>创建日期:</p>
    <p>身份证号:</p>
  </div>
);

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
    this.state = {
      data:[],//用户列表
      columns:[{
        title: '用户姓名',
        dataIndex: 'user_name',
      }, {
        title: '联系方式',
        className: 'column-money',
        dataIndex: 'user_phone',
      }, {
        title: '创建日期',
        dataIndex: 'user_birth',
      }, {
        title: '操作',
        dataIndex: '',
        render:() =>{
          return(
            <div>
              <Popover content={content} title="用户详情">
                <Button type="primary">查看详情</Button>
              </Popover>,
              <Button type="primary" onClick={goCaseHistory}>病例管理</Button>
           </div>
          )
        }
      }]
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'userlist/gets',
      payload: {},
    });
  }
  componentWillReceiveProps(){
    console.log(this.props.userlist.userlist)
    this.setState({
      data:this.props.userlist.userlist.list
    }) 
  }

  render() {
    return <div>
      <PageHeaderWrapper title='用户列表'></PageHeaderWrapper>
      <Table
        columns={this.state.columns}
        dataSource={this.state.data}
        bordered
      />,
    </div>;
  }
}
export default UserList;
