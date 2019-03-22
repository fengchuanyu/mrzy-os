import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Input, Button, Icon, Table, message } from 'antd';
import router from 'umi/router';

function confirm(e) {
  console.log(e);
  message.success('删除成功');
}

function cancel(e) {
  console.log(e);
  message.error('取消删除');
}

@connect((getoffice, addoffice) => {
  return {
    getoffice, addoffice
  };
})

class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      list: [],
      o_name: ''
    };
  }

  addoffice = () => {
    const { dispatch } = this.props;
    let name = this.state.userName;
    dispatch({
      type: 'addoffice/add',
      payload: {
        o_name: name
      },
    });
    router.push('/feature/office-page')
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'getoffice/gets',
      payload: {},
    });
  }

  componentWillReceiveProps() {
    console.log(this.props)

    this.setState({
      list: [...this.props.getoffice.getoffice.list],
      columns:[
        {
          dataIndex: 'o_name',
          title: '科室名称',
          key: 'name',
          width: '90%',
        },
        {
          title: 'Action',
          key: 'action',
          width: '10%',
          render: (text, record) => (
            <span>
                <Button type="primary" onClick={()=>{
                  this.deleteOffice(record.oid)
                }}>删除</Button>
            </span>
          ),
        },
      ]
    })

  }

  deleteOffice = (id) =>{
    console.log(id)
    const { dispatch } = this.props;
    dispatch({
      type: 'addoffice/delete',
      payload: {
        oid:id
      },
    });
    router.push('/feature/office-page')
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  };

  onChangeUserName = e => {
    this.setState({ userName: e.target.value });
  };

  render() {
    let data = this.state.list;
    console.log(data)
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return (
      <div>

        <PageHeaderWrapper title="科室管理" />
        <div>
          <Input
            style={{ width: '90%' }}
            placeholder="科室管理"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => (this.userNameInput = node)}
          /><Button style={{ width: '10%' }} type="primary" onClick={this.addoffice}>添加</Button>

        </div>
        <Table columns={this.state.columns} dataSource={data} />
      </div>
    );
  }
}
export default Feature;
