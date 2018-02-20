import { addItem } from '../../redux/actions/items';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import AddItem from '../AddItem';
import Filter from '../Filter';
import List from '../List';
import './dashboard.less';
import Pages from '../Pages/';

class Dashboard extends Component {
    constructor () {
        super();
        this.onAddSubmit = this.onAddSubmit.bind(this);
    }

    onAddSubmit (newItem) {
        this.props.onAddItem(newItem);
        this.props.onFormReset();
    }
    
    render () {
        const { page : currentPage } = this.props.match.params;
        return (
            <div className = 'dashboard'>
                <AddItem
                    onSubmit = {this.onAddSubmit}
                />
                <div className='dashboard__items'>
                    <Filter/>
                    <List
                        currentPage = {currentPage}
                    />
                </div>
                <Pages/>
            </div>
        )
    }
}

export default connect(
    state => ({}),
    dispatch => ({
        onAddItem : item => dispatch( addItem(item) ),
        onFormReset : () => dispatch( reset('newTodo') ),
        goTo : page => dispatch( go(page) )
    })
)(Dashboard);
