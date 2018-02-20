import Input from '../../presenters/Input';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { filterByDate, filterByTitle } from '../../redux/actions/filters';
import './filter.less';
import getItemsDates from '../../utils/getItemsDates';


class Filter extends Component {
    constructor () {
        super();
        
        this.state = {
            name : '',
            date : ''
        }
        this.handleFieldChange = this.handleFieldChange.bind(this);
    }

    handleFieldChange (field) {
        const { onDateFilter, onNameFilter } = this.props;
        const actions = {
            'name' : onNameFilter,
            'date' : onDateFilter
        };
        return e => {
            const filter = e.target.value
            this.setState({ [field] : filter });
            actions[field](filter);
        }
    }

    render () {
        const { dates } = this.props;
        const { name, date } = this.state;
        return (
            <div className = 'filter'>
                <Input
                    type='text'
                    value = { name }
                    onChange = { this.handleFieldChange('name') }
                    classes='filter__title'
                    placeholder = 'Filter by title'
                />
                <select
                    onChange = {this.handleFieldChange('date')}
                    className = 'filter__date'
                >
                    <option value=''>Clear filter</option>
                    {dates.map( dateItem => (
                        <option
                            key = {dateItem}
                            value={dateItem}
                        >
                            {dateItem}
                        </option>
                    ))}
                </select>
            </div>
        )
    }
}

export default connect(
    state => ({
        dates : getItemsDates(state.items)
    }),
    dispatch => ({
        onDateFilter: filter => dispatch( filterByDate(filter) ),
        onNameFilter: filter => dispatch( filterByTitle(filter) )
    }),
)(Filter);
