import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Drawer,Select,Button,Table,Col,Row,Form,Input } from 'antd';
import router from 'umi/router';
import Popups from './Popups';

const Option = Select.Option;
const columns = [{
  title: '就诊人姓名',
  dataIndex: 'c_name',
  width:'20%'
}, {
  title: '科室',
  dataIndex: 'o_name',//科室名称
  width:'25%'
}, {
  title: '医生',
  dataIndex: 'doctor_name',
  width:'25%'
},{
  title: '操作',
  dataIndex: '',
  width:'30%',
  render: (record) => {
    return (
      <div>
        <Button style={{marginRight:'5px',marginButtom:'1px'}} type="primary" onClick={()=>goRegistration(record.id)}>编辑</Button>
        <Button style={{marginRight:'5px',marginButtom:'1px'}} type="primary">删除</Button>
        <Popups></Popups>
      </div>
      )
    }
}];

function handleChange(value) {
  console.log(`selected ${value}`);
}

function handleBlur() {
  console.log('blur');
}

function handleFocus() {
  console.log('focus');
}

function goRegistration(id){
  router.push(`/casehistory/casesend?id=${id}`);
}

@connect(caselist => {
  return {
    caselist,
  };
})

class CaseList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      list:[]
    };
  }
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'caselist/gets',
      payload: {},
    });
  }

  componentWillReceiveProps() {
    console.log(this.props);
    this.setState({
      list:[...this.props.caselist.caselist.list]
    }) 
  }

  showDrawer = () => {
    this.setState({});
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };


  render() {
    return <div>
      <PageHeaderWrapper title="病例列表"></PageHeaderWrapper>
      <div>
        <form>
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
          </Select>,
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
          </Select>,
          <Button type="primary">选择科室医生搜索病例</Button>
        </form>
      </div>
      <Table
        columns={columns}
        dataSource={this.state.list}
        bordered
      />,
    </div>;
  }
}
export default CaseList;
