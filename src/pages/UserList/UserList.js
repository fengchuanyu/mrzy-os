import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper  from  '@/components/PageHeaderWrapper';
import {Table,Button,Popover,Modal }  from  'antd';
import router from 'umi/router';

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
      visible: false,
      data:[],//用户列表
      index:0,
      popupsData:[],//弹出层数据
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
        render:(text,record) =>{
          return(
            <div>
              <Button type="primary" onClick={()=>{
                this.showModal(record.uid);        
                }}>查看详情{record.name}</Button>
              <Button type="primary" onClick={goCaseHistory}>病例管理</Button>
           </div>
          )
        }
      }]
    };
  }

  showPopups = (data) =>{
    let arr = data.list.map(function(obj,index){
      return (
        <div key={index}>
          <p>用户姓名:{obj.user_name}</p>
          <p>性别:{obj.user_sex}</p>
          <p>身份证号:{obj.user_idnumber}</p>
          <p>电话:{obj.user_phone}</p>
        </div>
      )
    })
    // console.log(arr)
    this.setState({
      popupsData:arr
    })
  }

  showModal = (data) => {
    let popupsIndex;//弹出层对应索引
    this.state.data.forEach(function(obj,index){
        if(obj.uid == data){
          popupsIndex = index;
        }
    });
    console.log(popupsIndex);
    this.setState({
      visible: true,
      index:popupsIndex     
    });
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
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
    this.showPopups(this.props.userlist.userlist);
  }

  render() {
    console.log(this.state.popupsData[1])
    return <div>
      <PageHeaderWrapper title='用户列表'></PageHeaderWrapper>
      <Table
        columns={this.state.columns}
        dataSource={this.state.data}
        bordered
        rowKey={record => record.uid} 

      />
      <Modal
          title="详情信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.state.popupsData[this.state.index]}
        </Modal>
    </div>;
  }
}
export default UserList;
