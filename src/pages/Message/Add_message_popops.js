import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button, Input, Form } from 'antd';
import style from './Add_message_popops.less';
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
                发布
            </Button>
            <Modal
                title="增加文章"
                visible={this.state.visible}
                onOk={this.handleOk}
                onCancel={this.handleCancel}
            >
                您确定要发布吗？
            </Modal>
        </div>
    }
}

export default Popups;