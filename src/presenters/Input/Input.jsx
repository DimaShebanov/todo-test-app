import React from 'react';
import './input.less';

export default (props) => {
    const {
        type='text',
        value='',
        onChange,
        classes='',
        placeholder
    } = props;

    const className = `custom-input ${classes}`
    const id = Math.random() * 100;
    return (
        <div className={className}>
            <input
                type={type}
                id={id}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className='custom-input__field'
            />
            
            <div className="custom-input__underline"/>
            <div className="custom-input__label">
                {placeholder}
            </div>
        </div>
    )
}
