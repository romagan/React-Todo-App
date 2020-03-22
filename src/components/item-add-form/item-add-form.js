import React from 'react';

import './item-add-form.css';

const ItemAddForm = ({ addItem }) => {
    return (
        <div className="item-add-form">
            <button className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => addItem('Hello')}
            >
                Add item
            </button>
        </div>
    )
}

export default ItemAddForm;
