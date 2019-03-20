import React, { Component } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Input, Icon, Button, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, } from 'antd';
import msg_style from './Message.less';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { connect } from 'dva';
const InputGroup = Input.Group;
const Option = Select.Option;

@connect(addmessage => {
  return {
    addmessage,
  };
})

class AddMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: BraftEditor.createEditorState(null),
      messageName: '',
      list: [],//存放文章类型,
      title: '',
      type: '',
      desc: ''
    };
  }

  getTitle = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  getType = (e) => {
    this.setState({
      type: e.target.value
    })
  }

  addMessage = () =>{
    console.log(this.props);
    const { dispatch } = this.props;
      dispatch({
        type: 'addmessage/add',
        payload: {
          title: this.state.title,
          type: this.state.type,
          desc: this.state.desc
        },
      });
  }

  componentDidMount() {
    // console.log(this.props.location.query.id);
    const { dispatch } = this.props;
    dispatch({
      type: 'message/gets',
      payload: {},
    });
  }

  componentWillReceiveProps() {
    let arr = [...this.props.addmessage.message.list];
    let temp = [];//临时存放文章类型
    arr.forEach(function (obj, index) {
      if (!temp.includes(obj.cate_name)) {
        temp.push(obj.cate_name)
      }
    })
    this.setState({
      list: temp
    })
  }

  //标题 开始
  emitEmpty = () => {
    this.messageNameInput.focus();
    this.setState({ messageName: '' });
  }
  onChangeMessageName = (e) => {
    this.setState({ messageName: e.target.value });
  }
  //标题 结束

  handleEditorChange = (editorState) => {
    let desc = null;
    if (this.state.editorState != null) {
      const htmlContent = this.state.editorState.toHTML()
      desc = htmlContent;
      console.log(desc);
    }
    this.setState({
      editorState,
      desc
    });
  }

  render() {
    const { messageName } = this.state;
    const suffix = messageName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    let arr = this.state.list.map(function (val, index) {
      return (
        <Option value={val}>{val}</Option>
      )
    })
    return (
      <div >
        <PageHeaderWrapper title='添加文章'></PageHeaderWrapper>
        <div >
          {/* div用于提交数据 */}
          <InputGroup compact>
            <Input style={{ width: '79.4%' }} placeholder="请输入文章标题" onChange={this.getTitle} />
            < Select defaultValue="文章类型" onChange={this.getDesc}>
              {arr}
            </Select>
          </InputGroup>
          <div className="msg_write">
            <BraftEditor className='editor_style'
              style={{ width: '90%', height: '95%', border: '1px solid #cdcdcd' }}
              value={this.state.editorState}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />

          </div>
          <Button type="primary" htmlType="submit" onClick={this.addMessage}>
            发布
          </Button>
        </div>


      </div>
    )
  }
}

export default AddMessage;