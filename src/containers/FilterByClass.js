import React, {Fragment} from 'react';

const FilterByClass = () => {
    return (
        <Fragment>
            <p>Filter by Bot Class</p>
            <select>
                <option value="All">All</option>
                <option value="Defender">Defender</option>
                <option value="Assault">Assault</option>
                <option value="Support">Support</option>
            </select>
        </Fragment>
    );
};

export default FilterByClass;