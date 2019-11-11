import React from 'react';
import {observable, computed} from 'mobx';
import { observer } from 'mobx-react';

class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}

const TodoView = observer(({todo}) => (
    <li>
        <input type="checkbox" checked={todo.finished} onClick={() => todo.finished = !todo.finished}/>
    </li>
))


@observer class TodoListView extends React.Component {
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
            </section>
        )
    }
}
export {TodoList, TodoListView};