import React, {useState} from 'react';

import './App.css';

import { TodoTable } from './components/TodoTable';
import { NewTodoForm } from './components/NewTodoForm';
import { TodoModel } from './models/TodoModel';

export const App = () => {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([] as TodoModel[]);

  const addTodo = (description: string, assigned: string) => {
    let rowNumder = 0;

    if (todos.length > 0) {
      rowNumder = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumder = 1;
    }

    const newTodo = new TodoModel(rowNumder, description, assigned);
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber: number) => {
    let filtered = todos.filter(function (value) {
      return value.rowNumber !== deleteTodoRowNumber;
    });
    setTodos(filtered);
  }

  return (
    <div className="mt-5 container">
      <div className="card">
        <div className="card-header">
          Your TODOs
        </div>

        <div className="card-body">
          <TodoTable todos={todos} deleteTodo={ deleteTodo } />

          <button className="btn btn-primary" onClick={ () => setShowAddTodoForm(!showAddTodoForm) }>
            { showAddTodoForm ? 'Close New Todo' : 'New Todo' }
          </button>

        {showAddTodoForm &&
          <NewTodoForm addTodo={ addTodo }/>
        }
        </div>
      </div>
    </div>
  );
}
