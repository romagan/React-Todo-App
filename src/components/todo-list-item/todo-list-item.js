import React from "react";

import './todo-list-item.css';

const TodoListItem = ({ label, onDeleted, onToggleImportant, onToggleDone, done, important }) => {
    let classNames = 'todo-list-item';

    if (done) classNames += ' done';
    if (important) classNames += ' important';

    return (
        <span className={ classNames }>
            <span className="todo-list-item-label"
                    onClick={ onToggleDone }>
                    { label }
            </span>

            <button className="btn btn-outline-success btn-sm float-right"
                    type="button"
                    onClick={ onToggleImportant }>
                <i className="fa fa-exclamation"></i>
            </button>

            <button className="btn btn-outline-danger btn-sm float-right"
                    type="button"
                    onClick={ onDeleted }
                    >
                <i className="fa fa-trash-o"></i>
            </button>
        </span>
    );
}

export default TodoListItem;
