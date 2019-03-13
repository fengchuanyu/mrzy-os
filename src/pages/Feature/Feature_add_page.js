import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import style from './abc.less';
import { Button, Input } from 'antd';

@connect(feature => {
  return {
    feature,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { editorState: null };
  }

  handleEditorChange = editorState => {
    this.setState({ editorState });
  };

  render() {
    return (
      <div>
        <PageHeaderWrapper title="添加诊疗" />
        <Input placeholder="病症名称:" />
        <div className="my-component" className={style.abc}>
          <BraftEditor
            value={this.state.editorState}
            onChange={this.handleEditorChange}
            onSave={this.submitContent}
          />
        </div>
        <Button type="primary">保存</Button>
      </div>
    );
  }
}
export default Feature;
