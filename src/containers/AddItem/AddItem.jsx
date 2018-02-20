import { Field, reduxForm } from 'redux-form';
import React, { Component } from 'react';
import './addItem.less';


const AddItem = props => {
    const { handleSubmit } = props;
    return (
        <div className='add-item'>
            <label htmlFor='form'>Add new Todo item</label>
            <form
                id='form'
                className = 'add-item__form'
                onSubmit={handleSubmit}
            >
                <div className = 'form__fields'>
                    <div>
                        <label htmlFor='title'>Title</label>
                        <Field
                            name='title'
                            component='input'
                            type='text'
                        />
                    </div>
                    <div>
                        <label htmlFor='description'>Description</label>
                        <Field
                            name='description'
                            component='input'
                            type='text'
                        />
                    </div>
                </div>

                <button className = 'form__button' type='submit'>Submit</button>
            </form>
        </div>
    )
}


export default reduxForm({form:'newTodo'})(AddItem);
