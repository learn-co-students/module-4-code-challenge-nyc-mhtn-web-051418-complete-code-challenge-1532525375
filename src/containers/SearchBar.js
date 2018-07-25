import React, { Component } from 'react';

class SearchBar extends Component {
   
    render() {
        return (
            <div>
                <p>Search by name</p>
                <input
                    type="text"
                    value={this.props.nameValue}
                    onChange={this.props.handleSearch}
                ></input>
            </div>
        );
    }
}

export default SearchBar;