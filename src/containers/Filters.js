import React from 'react';
import FilterByClass from './FilterByClass'
import SortBy from './SortBy'
import SearchBar from './SearchBar'

const Filters = (props) => {
        return (
            <div className="ui segment inverted olive">
                <FilterByClass filterBotsClass={props.filterBotsClass}
                />
                <SortBy sortValue={props.sortValue} handleSort={props.handleSort}/>
                <SearchBar nameValue={props.nameValue} handleSearch={props.handleSearch}/>
            </div>
        );
}

export default Filters;