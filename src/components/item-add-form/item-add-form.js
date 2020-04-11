import React, { Component } from 'react';

import './item-add-form.css';

export default class ItemAddForm extends Component {
    state = {
        label: ''
    }

    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state.label);
        this.setState({
            label: ''
        });
    }

    render() {
        return (
            <form className="item-add-form d-flex"
                    onSubmit={ this.onSubmit }>
                <input className="form-control"
                        type="text"
                        placeholder="What needs to be done"
                        value={ this.state.label }
                        onChange={ this.onLabelChange }/>
                <button className="btn btn-outline-secondary"
                        type="submit">
                    Add item
                </button>
            </form>
        )
    }
}
