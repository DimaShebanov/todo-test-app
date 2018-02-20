export default items => {
    const dates = new Set(items.map( item => item.created_at));
    const ret = [];
    for (const date of dates) {
        ret.push(date);
    }
    return ret;
};
