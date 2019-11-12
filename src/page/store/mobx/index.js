import React from 'react';
import {todoStore, TodoListView}from './todolist';


export default class extends React.Component {
    render() {
        return (
            <div className="main-container mobx">
                <TodoListView todolist={todoStore}/>
            </div>
        )
    }
}
