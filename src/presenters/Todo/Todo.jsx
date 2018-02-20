import React, { Component } from 'react';
import Input from '../Input';
import './todo.less';

export default class Todo extends Component {
    constructor (props) {
        super();
        
        this.onEdit = this.onEdit.bind(this);
        this.onDelete = this.onDelete.bind(this);
    }

    onEdit (field) {
        return e => {
            const item = {
                ...this.props.data,
                [field] : e.target.value
            };
            this.props.onEdit(item);
        }
    }

    onDelete () {
        const { data, onDelete } = this.props;
        onDelete(data.id);
    }
    
    render () {
        const { title, description, created_at } = this.props.data;
        return (
            <div className = 'todo-item'>
                <Input
                    type='text'
                    value = { title }
                    onChange = { this.onEdit('title') }
                />
                <textarea
                    className = 'todo-item__description'
                    value = { description }
                    onChange = { this.onEdit('description') }
                />
                <div className='todo-item__date'>Added : {created_at}</div>
                <div
                    className="todo-item__delete"
                    onClick = {this.onDelete}
                    role = 'button'
                >
                    X
                </div>
            </div>
        )
    }
}
