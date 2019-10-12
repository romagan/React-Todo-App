import React from "react";

import './todo-list-item.css';

const TodoListItem = ({ label, important = false }) => {
    const style = {
        color: important ? 'tomato' : 'black',
        fontWeight: important ? 700 : 400
    };

    return (
        <span className="todo-list-item">
            <span className="todo-list-item-label" style={ style }>{ label }</span>
            <button className="btn btn-outline-success btn-sm float-right" type="button">
                <i className="fa fa-exclamation"></i>
            </button>
            <button className="btn btn-outline-danger btn-sm float-right" type="button">
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
};

export default TodoListItem;
