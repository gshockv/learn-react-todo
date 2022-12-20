import React, {useState} from 'react';

import './App.css';

import TodoTable from './components/TodoTable';
import NewTodoForm from './components/NewTodoForm';

function App() {

  const [showAddTodoForm, setShowAddTodoForm] = useState(false);

  const [todos, setTodos] = useState([
    { rowNumber: 1, rowDescription: 'Feed puppy', rowAssigned: 'Anna' }
  ]);

  const addTodo = (description, assigned) => {
    let rowNumder = 0;

    if (todos.length > 0) {
      rowNumder = todos[todos.length - 1].rowNumber + 1;
    } else {
      rowNumder = 1;
    }

    const newTodo = {
      rowNumber: rowNumder,
      rowDescription: description,
      rowAssigned: assigned
    };
    setTodos(todos => [...todos, newTodo]);
  }

  const deleteTodo = (deleteTodoRowNumber) => {
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

export default App;
