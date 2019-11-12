import React from 'react';
import { todoStore, TodoListView } from './todolist';
import './style.less';
import {Row, Col} from 'antd';

export default class extends React.Component {
    render() {
        return (
            <div className="main-container mobx">
                <Row gutter={16}>
                    <Col span={12}>
                        <TodoListView todolist={todoStore} />
                    </Col>
                    <Col span={12}></Col>
                </Row>
                
            </div>
        )
    }
}
