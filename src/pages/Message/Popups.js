import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button,Input,Form } from 'antd';
import style from './Popups.less';
import Msg_amend from './AddMessage.js'
@connect(popups => {
return {
popups,
};
})
class Popups extends Component {
constructor(props) {
super(props);
this.state = {
visible: false,
};
}
showModal = () => {
this.setState({
visible: true,
});
}
handleOk = (e) => {
console.log(e);
this.setState({
visible: false,
});
}
handleCancel = (e) => {
console.log(e);
this.setState({
visible: false,
});
}

render() {
return <div className={style.popups_1}>
<Button type="primary" onClick={this.showModal}>
    编辑
</Button>
<Modal
title="修改文章"
visible={this.state.visible}
onOk={this.handleOk}
onCancel={this.handleCancel}
>
<Form layout="vertical">
<Msg_amend></Msg_amend>

</Form>
</Modal>
</div>
}
}

export default Popups;