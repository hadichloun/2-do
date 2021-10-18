import React from 'react';
import {Todo} from "../model";
import SingleTodo from './SingleTodo';
import "./styles.css"

interface props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  }

  const TodoList: React.FC<props> = ({ todos, setTodos }) => {
    return (
      <div className="conatiner">
        <div className="todo">
          <span className="todos__heading">active tasks</span>
          {todos.map((todo) => (
              <SingleTodo
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}/>
            ))}
          </div>     
          <div className="todos remove"></div>
          <span className="todos__heading">completed tasks</span>
          {todos.map((todo) => (
              <SingleTodo
              todo={todo}
              todos={todos}
              key={todo.id}
              setTodos={setTodos}/>
            ))}
          </div>
    )
}

export default TodoList
