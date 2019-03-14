import React, { Component } from 'react';
// 引入编辑器组件
import BraftEditor from 'braft-editor';
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import { Input, Icon,Button, Col, Row, Select, InputNumber, DatePicker, AutoComplete, Cascader, } from 'antd';
import msg_style from'./Message.less';
import Msg_add from './Add_message_popops.js';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
const InputGroup = Input.Group;
const Option = Select.Option;

class AddMessage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            editorState: BraftEditor.createEditorState(null),
            messageName: '',
        };
        
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
        this.setState({ editorState })
    }

    render() {
        const { messageName } = this.state;
        const suffix = messageName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
        return (
         <div >
           <PageHeaderWrapper title='添加文章'></PageHeaderWrapper>
           <form action="">
           <InputGroup compact>
              < Select defaultValue="文章类型">
             <Option value="Msg_Type">食补</Option>
             <Option value="Msg_Type">养生</Option>
           </Select>
          <Input style={{ width: '50%' }} placeholder="请输入文章标题" />
      
           </InputGroup>
                <div className="msg_write">
        <BraftEditor
                    value={this.state.editorState}
                    onChange={this.handleEditorChange}
                    onSave={this.submitContent}
                />
          
                </div>
                <Msg_add/>
           </form>
        
                
            </div>
        )
    }
}

export default AddMessage;