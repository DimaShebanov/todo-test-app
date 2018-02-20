import { editItem, deleteItem } from '../../redux/actions/items';
import { getItemsPerPage } from '../../utils/itemsPagination';
import React, { Component } from 'react';
import Todo from '../../presenters/Todo';
import { connect } from 'react-redux';
import './list.less';


const List = (props) => {
    const { items, onEdit, onDelete } = props;
    return (
        <div className = 'list'>
            <div className="list__items">
                { items.map( item => (
                    <Todo
                        data = { item }
                        onEdit = { onEdit }
                        onDelete = { onDelete }
                    />
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = ( state, ownProps ) => {
    const { date, title } = state.filters;
    const lowTitle = title.toLowerCase();
    const pageNum = +ownProps.currentPage || 1;
    let items = state.items.filter( item => {
        const byDate = ~item.created_at.indexOf( date );
        const byTitle = ~item.title.toLowerCase().indexOf( lowTitle );
        return byDate && byTitle;
    })
    items = getItemsPerPage(items, 12, pageNum);
    
    return { items };
}

export default connect(
    mapStateToProps,
    dispatch => ({
        onEdit : item => dispatch( editItem(item) ),
        onDelete : itemID => dispatch( deleteItem(itemID) )
    })
)(List);
