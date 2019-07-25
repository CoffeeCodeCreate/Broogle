//by state
import {elements} from './views/base.mjs';
export const filters = {
    current: 'by_state',
    by_city: 'by_city',
    by_state:'by_state',
    by_name: 'by_name',
    by_type: 'by_type',
    by_tag: 'by_tag'
}


export const ToggleFilter = () => {
    const getByFilter = `https://api.openbrewerydb.org/breweries?${filters.current}=`;
    elements.filter_buttons.forEach( el => {
        el.onclick = () => {
            let filterType = filters[el.value].slice(3);
            elements.searchInput.value = `Type in your ${filterType} to find breweries near you.`;
            filters.current = filters[el.value];
        }
    });
    return getByFilter;
};
ToggleFilter();

export const getById    = 'https://api.openbrewerydb.org/breweries/';