import React, { Component } from "react";
import Masonry from 'react-masonry-component';

import Todo from "../components/Todo";

class TodoList extends Component {
  render() {
    const todos = this.props.todos;
    
    return (
      <Masonry className="films">
        {todos.map((todoData) => {
          const handleShowTodo = () => {
            todoData.showed = true;
            this.props.onEdit(todoData);
          };

          const handleRemoveTodo = () => {
            this.props.onRemove(todoData);
          };

          return (
            <Todo
              todo={todoData}
              key={todoData.id}
              onShow={handleShowTodo}
              onRemove={handleRemoveTodo}
            />
          );
        })}
      </Masonry>
    );
  }
}

export default TodoList;
