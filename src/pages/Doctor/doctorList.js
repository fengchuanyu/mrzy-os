import React, { Component } from 'react';
import { connect } from 'dva';
import { Card, Icon, Button } from 'antd';
import doctorListStyles from './doctorList.less';
import Popups from './Popups';
import router from 'umi/router';
@connect(doctor => {
  return {
    doctor,
  };
})
class Doctor extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'doctor/gets',
      payload: { testaa: '123123' },
    });
  }

  render() {
    return (
      <div className={doctorListStyles.container}>
        <Card
          style={{ width: 240, height: 420 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              className={doctorListStyles.doctorListImg}
            />
          }
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ padding: 6, marginLeft: 47 }}
        >
          <p>医生姓名:李廷利</p>
          <p>医生所在科室:康复科</p>
          <p>医生工作地点:2楼209</p>
          <p>医生职称:医学博士</p>
          <p>挂号金额:6</p>
          <p className={doctorListStyles.card}>
            医生简介
            医学博士，博士研究生导师，国家二级教授，享受国务院特贴，黑龙江中医药大学教授。黑龙江优秀中青年专家，黑龙江省卫生系统有突出贡献中青年专家，中国睡眠研究会常务理事，中国睡眠研究会东北工作委员会主任委员。
            李廷利教授从事中药改善睡眠研究20余年，在该研究领域有较高的学术造诣和学术地位。创立了“四位一体睡眠康复治疗模式”，擅长应用四联疗法诊治各种失眠症。
          </p>
          <Popups />
        </Card>
        <Card
          style={{ width: 240, height: 420 }}
          cover={
            <img
              alt="example"
              src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
              className={doctorListStyles.doctorListImg}
            />
          }
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ padding: 6, marginLeft: 47 }}
        >
          <p>医生姓名:马建</p>
          <p>医生所在科室:内科</p>
          <p>医生工作地点:3楼209</p>
          <p>医生职称:主任医师</p>
          <p>挂号金额:55</p>
          <p className={doctorListStyles.card}>
            医学博士，硕士研究生导师，主任医师，教授，黑龙江中医药大学附属第一医院内分泌科主任。黑龙江省名中医，首届“龙江名医”。国家中医药管理局内分泌重点学科带头人，国家中医药管理局内分泌重点专科学术带头人、专科负责人。
            马建教授从事内分泌临床、教学、科研工作33年。擅长中医药治疗糖尿病神经病变、微血管病变、大血管病变等并发症，甲亢、甲减、甲状腺结节、原发性醛固酮增多症、皮质醇增多症、代谢综合征等疾病。
          </p>
          <Popups />
        </Card>
        <Card
          style={{ width: 240, height: 420 }}
          className={doctorListStyles.doctorListCard}
          bodyStyle={{ fontSize: 200, marginTop: 20 }}
        >
          <Icon
            type="plus"
            className={doctorListStyles.iconImg}
            onClick={() => {
              router.push('/doctor/list2');
            }}
          />
        </Card>
      </div>
    );
  }
}
export default Doctor;
