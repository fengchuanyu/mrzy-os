import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Input, Icon, Select, Button,Form } from 'antd';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import { get } from 'https';


const Option = Select.Option;

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

@connect(casesend => {
  return {
    casesend,
  };
})
class CaseSend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      description: null,
      result:null,
      plan:null,
      matters:null,
    };
  }

  componentDidMount(){
    console.log(this.props.location.query.id);
  }

  handleEditorChange = (editorState) => {
    this.setState({ editorState })
  }

  handleChange(value) {
    this.setState({ text: value })
  }

  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }  

  render() {
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    return <div>
      <PageHeaderWrapper title="病例发布"></PageHeaderWrapper>
      <Input
        style={{width:'50%'}}
        placeholder="病例名称"
        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
        suffix={suffix}
        value={userName}
        onChange={this.onChangeUserName}
        ref={node => this.userNameInput = node}
      />
      <Form>
        <span>科室：</span>
        <Select
          className="formitem2"
          showSearch
          style={{ width: 200 }}
          placeholder="请选择"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="内科">内科</Option>
          <Option value="康复科">康复科</Option>
        </Select>
        <span>医生：</span>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="请选择"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="李延利">李延利</Option>
          <Option value="马建">马建</Option>
        </Select>
        <span>病人：</span>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="请选择医生科室点击搜索"
          optionFilterProp="children"
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          filterOption={(input, option) => option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
        >
          <Option value="李延利">无匹配数据</Option>
        </Select>
        <Button type="primary">点击搜索病人</Button>
        </Form>
        <Form>
          <div>
            <span>病例描述</span>
            <BraftEditor className='editor_style'
             style={{ width:'90%',height:'95%',border:'1px solid #cdcdcd' }}
              value={this.state.description}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </div>
          <div>
            <span>诊断结果</span>
            <BraftEditor  className='editor_style'
             style={{ width:'90%',height:'95%',border:'1px solid #cdcdcd' }}
              value={this.state.result}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </div>
          <div>
            <span>医生方案</span>
            <BraftEditor className='editor_style'
            style={{ width:'90%',height:'95%',border:'1px solid #cdcdcd' }}
              value={this.state.plan}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </div>
          <div>
            <span>注意事项</span>
            <BraftEditor className='editor_style'
            style={{ width:'90%',height:'95%',border:'1px solid #cdcdcd' }}
              value={this.state.matters}
              onChange={this.handleEditorChange}
              onSave={this.submitContent}
            />
          </div>
          <Button style={{marginTop:'10px'}}  type="primary" htmlType="submit">发布</Button>
        </Form>
    </div>;
  }
}
export default CaseSend;
