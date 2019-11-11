import React from 'react';
import Store from './store';
import {TodoList, TodoListView}from './todolist';


export default class extends React.Component {
    render() {
        return (
            <div className="main-container mobx">
                <TodoListView todolist={new TodoList()}/>
            </div>
        )
    }
}