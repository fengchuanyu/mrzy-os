import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, Tag, Button, message, Drawer, Radio, Modal, Input } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import router from 'umi/router';

const RadioGroup = Radio.Group;
const { TextArea } = Input;
let inputData = '';
let textareaData = '';
let iid = '';

function cancel(e) {
  message.error('取消删除');
}

@connect(features => {
  return {
    features,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      placement: 'left',
      list: [],
      index: 0,//弹出层索引
      popupsData: [],//弹出层数据
      columns: [
        {
          title: '病症名称',
          dataIndex: 'ill_title',
          width: 200,
          key: 'name',
        },
        {
          title: '病症详情',
          dataIndex: 'ill_content',
          key: 'detail',
        },
        {
          title: 'Action',
          width: '10%',
          key: 'action',
          render: (text, record) => (
            <div>
              <Button type="primary" onClick={() => {
                this.showModal(record.iid)
              }}>编辑</Button>
                <Button style={{ marginTop: '10px' }} type="primary" onClick={()=>{
                  this.delete(record.iid)
                }}>删除</Button>
            </div>
          ),
        },
      ]
    };
  }

  delete = (data) =>{
    console.log(data)
    let popupsIndex;//弹出层对应索引
    this.state.list.forEach(function (obj, index) {
      if (obj.iid == data) {
        popupsIndex = index;
      }
    });
    // this.setState({
      // visible: true,
      // index: popupsIndex
    // });
    // iid = this.state.list[popupsIndex].iid
    inputData = this.state.list[popupsIndex].ill_title
    textareaData = this.state.list[popupsIndex].ill_content
    // console.log(inputData)
    // console.log(textareaData)

    const { dispatch } = this.props;
    dispatch({
      type: 'feature/deleteill',
      payload: {
        iid: data,
        input: inputData,
        textarea: textareaData
      },
    });
    router.push('/feature/detail-page');
  } 

  showPopups = (data) => {
    let arr = data.list.map(function (obj, index) {
      return (
        <div key={index}>
          <p>病症名称：<Input defaultValue={obj.ill_title} onChange={(e) => {
            inputData = e.target.value
          }}></Input></p>
          <div>
            <p>病症描述：<TextArea defaultValue={obj.ill_content} onChange={(e) => {
              textareaData = e.target.value
            }}></TextArea></p>
          </div>
        </div>
      )
    })
    // console.log(arr)
    this.setState({
      popupsData: arr
    })
  }

  showModal = (data) => {
    let popupsIndex;//弹出层对应索引
    this.state.list.forEach(function (obj, index) {
      if (obj.iid == data) {
        popupsIndex = index;
      }
    });
    console.log(popupsIndex);
    this.setState({
      visible: true,
      index: popupsIndex
    });
    inputData = this.state.list[popupsIndex].ill_title
    textareaData = this.state.list[popupsIndex].ill_content
    console.log(inputData)
    console.log(textareaData)
  }

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
    console.log(inputData)
    let obj = this.state.list[this.state.index]
    const { dispatch } = this.props;
    dispatch({
      type: 'features/change',
      payload: {
        iid: obj.iid,
        input: inputData,
        textarea: textareaData
      },
    });
    router.push('/feature/detail-page');
  }

  handleCancel = (e) => {
    this.setState({
      visible: false,
    });
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'features/gets',
      payload: {},
    });
  }
  componentWillReceiveProps() {
    console.log(this.props)

    this.setState({
      list: [...this.props.features.features.list]
    })
    this.showPopups(this.props.features.features);

  }

  render() {
    let data = this.state.list;
    return (
      <div>
        <PageHeaderWrapper title="诊疗分类" />
        <Table
          columns={this.state.columns}
          dataSource={data}
          scroll={{ y: 1300 }}
          rowKey={record => record.iid}
        />
        <Modal
          title="编辑信息"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.state.popupsData[this.state.index]}
        </Modal>
      </div>
    );
  }
}
export default Feature;
