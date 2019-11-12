import React from 'react';
import {observable, action, computed} from 'mobx';
import { observer } from 'mobx-react';
import {Form} from 'antd';

class Todo {
    constructor(name) {
        this.title = name;
    }
    id = new Date().getTime();
    @observable title = '';
    @observable finished = false;
}

class TodoList {
    @observable todos = [];
    
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }

    @action add(name) {
        this.todos.push(new Todo(name))
    };
}

const TodoView = observer(({todo}) => (
    <li>
        <input type="checkbox" checked={todo.finished} onChange={() => todo.finished = !todo.finished}/>{todo.title}
    </li>
))


@observer class TodoListView extends React.Component {
    add = () => {
        this.props.todolist.add(this.refs.addVal.value)
    }
    render() {
        return (
            <section className="todolist">
                <ul>
                    {
                        this.props.todolist.todos.map(todo =>(
                            <TodoView todo={todo} key={todo.id} />
                        ))
                    }

                </ul>
                Tasks left: {this.props.todolist.unfinishedTodoCount}
                <br/>
                <div>
                    <input type="text" ref="addVal"/><button onClick={this.add}>add</button>
                </div>
            </section>
        )
    }
}

let store = new TodoList();
export { store as todoStore, TodoListView};
