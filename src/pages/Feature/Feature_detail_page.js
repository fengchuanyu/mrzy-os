import React, { Component } from 'react';
import { connect } from 'dva';
import { Table, Divider, Tag, Button, Popconfirm, message, Drawer, Radio } from 'antd';
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import Popups from './Popups';

const RadioGroup = Radio.Group;
 
const columns = [
  {
    title: '病症名称',
    dataIndex: 'name',
    width: '20%',
    key: 'name',
    // render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: '病症详情',
    dataIndex: 'detail',
    width: '70%',
    key: 'detail',
  },
  {
    title: 'Action',
    width: '10%',
    key: 'action',
    render: () => (
      <span>
        <Popups />
        <Popconfirm
          title="Are you sure delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <Button style={{marginTop:'10px'}} type="primary">删除</Button>
        </Popconfirm>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    name: '多囊卵巢综合征',
    detail:
      '多囊卵巢综合征（PCOS）是生育年龄妇女常见的一种复杂的内分泌及代谢异常所致的疾病，以慢性无排卵（排卵功能紊乱或丧失）和高雄激素血症（妇女体内男性激素产生过剩）为特征，主要临床表现为月经周期不规律、不孕、多毛和/或痤疮，是最常见的女性内分泌疾病。',
  },
  {
    key: '2',
    name: '不孕症',
    detail:
      '不孕的医学定义为一年未采取任何避孕措施，性生活正常（每周两次及以上）而没有怀孕。主要分为原发不孕及继发不孕。原发不孕为从未受孕；继发不孕为曾经怀过孕。根据这种严格的定义，不孕是一种常见的问题，大约影响到至少10%～15%的育龄夫妇。引起不孕的发病原因分为男性不孕和女性不孕。',
  },
  {
    key: '3',
    name: '月经不调',
    detail:
      '月经失调也称月经不调，是妇科常见疾病，表现为月经周期或出血量的异常，可伴月经前、月经时的腹痛及其他的全身症状。病因可能是器质性病变或是功能失常。',
  },
];

function confirm(e) {
  console.log(e);
  message.success('Click on Yes');
}

function cancel(e) {
  console.log(e);
  message.error('Click on No');
}

@connect(feature => {
  return {
    feature,
  };
})
class Feature extends Component {
  constructor(props) {
    super(props);
    this.state = { visible: false, placement: 'left' };
  }

  render() {
    return (
      <div>
        <PageHeaderWrapper title="诊疗分类" />
        <Table columns={columns} dataSource={data} scroll={{ y: 1300 }} />
      </div>
    );
  }
}
export default Feature;
