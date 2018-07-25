import React from 'react';

const SortBy = () => {
    return (
        <div>
            <p>Sort by</p>
            <select>
                <option value="Name">Name</option>
                <option value="Armor">Armor</option>
                <option value="Health">Health</option>
                <option value="Damage">Damage</option>
            </select>
        </div>
    );
};

export default SortBy;