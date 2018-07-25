import React from 'react';

const SearchBar = (props) => {
        return (
            <div>
                <p>Search by name</p>
                <input
                    type="text"
                    value={props.nameValue}
                    onChange={props.handleSearch}
                ></input>
            </div>
        );
}

export default SearchBar;