import { getPages } from '../../utils/itemsPagination';
import React, { Component } from 'react';
import { go, replace } from 'react-router-redux'
import { connect } from 'react-redux';
import './pages.less';


class Pages extends Component {
    constructor () {
        super();
        
        this.onClick = this.onClick.bind(this);
        this.onArrowsClick = this.onArrowsClick.bind(this);
    }

    onClick (e) {
        this.props.goTo(e.target.dataset.pagenum);
    }

    onArrowsClick (e) {
        const curPage = this.props.currentPage,
            arrowMod = +e.target.dataset.pagenum;
        this.props.goTo( curPage + arrowMod );
    }
    
    render () {
        const { currentPage, pages } = this.props;
        const isFirst = currentPage === 1,
            isLast = currentPage === pages.length;
        const PageItem = ({number, onClick, isDisabled, text}) => (
            <span
                className = {`pages__item ${ isDisabled && 'current' }`}
                onClick = { onClick }
                role = 'button'
                data-pagenum = { number }
            >
                {text || number}
            </span>
        );
        return (
            <div className = 'pages'>
                <PageItem
                    isDisabled = { isFirst }                
                    onClick = { this.onArrowsClick }
                    text = '<'
                    number = '-1'
                />                
                { pages.map( page => {
                    const isCur = page === currentPage;
                    return (
                        <PageItem
                            isDisabled = { isCur }
                            onClick = { this.onClick }
                            number = { page }
                        />
                    );
                })}
                <PageItem
                    onClick = { this.onArrowsClick }
                    isDisabled = { isLast }
                    text = '>'
                    number = '+1'                    
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        currentPage : +state.routing.location.pathname.slice(-1),
        pages : getPages(state.items.length, 12)
    }),
    dispatch => ({
        goTo : page => dispatch( replace(`/${page}`) )
    })
)(Pages);
