import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { Button, Input } from 'antd';

@connect(addills => {
  return {
    addills,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input:'', 
      editorState: null,
      textarea:null 
    }
  }
  addills = ()=> {
    const { dispatch } = this.props;
    dispatch({
      type: 'addills/add',
      payload: {
        input:this.state.input,
        textarea:this.state.textarea
      },
    });
  }

  handleEditorChange = (editorState) => {
    let textarea = null;
    if(this.state.editorState != null){
      const htmlContent = this.state.editorState.toHTML()
      textarea = htmlContent;
      console.log(htmlContent);
    }
    this.setState({ 
      editorState,
      textarea
    });
  };

  getTitle = (e) =>{//获取病种名称
    this.setState({
      input:e.target.value
    })
  }

  render() {
    return (
      <div>
        <PageHeaderWrapper title="添加诊疗" />
        <div>病种名称：<Input style={{width:'82.5%'}} placeholder="请输入。。。" onChange={this.getTitle}/></div>
        <div className="my-component">
          <BraftEditor className='editor_style'
          style={{ width:'90%',height:'95%',border:'1px solid #cdcdcd' }}
            value={this.state.editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
          />
        </div>
        <Button type="primary" onClick={this.addills}>保存</Button>
      </div>
    );
  }
}
export default Feature;
