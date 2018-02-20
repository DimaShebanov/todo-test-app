export const getItemsPerPage = (items, itemsPerPage, curPageNum) => {
    const firstItemInd = itemsPerPage * (curPageNum - 1),
        lastItemInd = itemsPerPage * curPageNum,
        retItems = [];

    for ( let i = firstItemInd; i < items.length && i < lastItemInd; i++) {
        const item = items[i];
        if( item ) retItems.push(item);
    }
    return retItems;
};

export const getPages = (itemsCount, itemsPerPage) => {
    const pageCount = Math.ceil(itemsCount / itemsPerPage),
        ret = [];
    
    for (let i = 1; i <= pageCount; i++) {
        ret.push(i);
    }

    return ret;
}
