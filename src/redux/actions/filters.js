export const FILTER_BY_DATE = 'FILTER_BY_DATE';
export const FILTER_BY_TITLE = 'FILTER_BY_TITLE';


export const filterByDate = payload => ({
    type : FILTER_BY_DATE,
    payload
});

export const filterByTitle = payload => ({
    type : FILTER_BY_TITLE,
    payload
});
