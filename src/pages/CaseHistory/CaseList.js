import React, { Component } from 'react';
import { connect } from 'dva';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import { Drawer,Select,Button,Table,Col,Row,Form,Input } from 'antd';
import router from 'umi/router';
import Popups from './Popups';

const Option = Select.Option;
const columns = [{
  title: '就诊人姓名',
  dataIndex: 'name',
}, {
  title: '科室',
  className: 'keshi',
  dataIndex: 'keshi',//科室名称
}, {
  title: '医生',
  dataIndex: 'doctor',
},{
  title: 'action',
  dataIndex: '',
  render: () => {

    
    return (
      <div>
        <Button type="primary" onClick={goRegistration}>编辑</Button>
        <Button type="primary">删除</Button>
        <Popups></Popups>
      </div>
      )
    }
}];

const data = [{//表格数据
  key: '1',
  name: 'John Brown',
  keshi: '￥300,000.00',
  doctor: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  keshi: '￥1,256,000.00',
  doctor: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  keshi: '￥120,000.00',
  doctor: 'Sidney No. 1 Lake Park',
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

function goRegistration(){
  router.push("/casehistory/casesend");
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
    };
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
      <PageHeaderWrapper title="病例列表"></PageHeaderWrapper>,
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
        dataSource={data}
        bordered
      />,
    </div>;
  }
}
export default CaseList;
