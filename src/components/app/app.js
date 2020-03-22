import React, { Component } from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import TodoList from "../todo-list";
import ItemAddForm from "../item-add-form";

import './app.css';
import ItemStatusFilter from "../item-status-filter";

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: 'Drink Cofee', important: false, id: 1 },
            { label: 'Make Awesome App', important: true, id: 2 },
            { label: 'Have a Lunch', important: false, id: 3 }
        ]
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newData = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

            return {
                todoData: newData
            }
        });
    };

    addItem = (text) => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        }

        this.setState(({ todoData }) => {
            const newData = [...todoData, newItem];

            return {
                todoData: newData
            }
        });
    }

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3} />
                <div className="top-panel d-flex">
                    <SearchPanel />
                    <ItemStatusFilter />
                </div>
                <TodoList todos={ this.state.todoData }
                          onDeleted={ this.deleteItem }
                 />
                 <ItemAddForm addItem={ this.addItem } />
            </div>
        );
    }
};
