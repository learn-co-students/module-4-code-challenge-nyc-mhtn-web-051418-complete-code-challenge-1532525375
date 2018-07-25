import React, { Component } from 'react';
import FilterByClass from './FilterByClass'
import SortBy from './SortBy'
import SearchBar from './SearchBar'

class Filters extends Component {
    render() {
        return (
            <div className="ui segment inverted olive">
                <FilterByClass />
                <SortBy />
                <SearchBar />
            </div>
        );
    }
}

export default Filters;