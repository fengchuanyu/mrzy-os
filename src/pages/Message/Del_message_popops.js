import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button, Input, Form } from 'antd';
import style from './Del_message_popops.less';
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
                删除
</Button>
            <Modal
                title="删除文章"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                你确定要删除这篇文章吗？
</Modal>
        </div>
    }
}

export default Popups;