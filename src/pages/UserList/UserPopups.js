import React, { Component } from 'react';
import { connect } from 'dva';
import { Modal, Button, Input } from 'antd';
import style from './Popups.less';

@connect(userpopups => {
    return {
        userpopups,
    };
})

class UserPopups extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // visible: false,
            data: []//弹出层数据
        };
    }
    componentDidMount() {
        const { dispatch } = this.props;
        dispatch({
            type: 'userpopups/gets',
            payload: {},
        });
    }
    componentWillReceiveProps() {
        console.log(this.props.userpopups.userpopups.list)

        this.setState({
            data: [...this.props.userpopups.userpopups.list]
        })
    }

    render() {
        return <div className={style.popups_1}>
            
        </div>
    }
}

export default UserPopups;