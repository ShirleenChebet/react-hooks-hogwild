
import React from 'react';

const FilterSort = ({ setFilterGreased, setSortOption }) => {
    return (
        <div>
            <label>
                <input type="checkbox" onChange={(e) => setFilterGreased(e.target.checked)} />
                Show Greased
            </label>
            <select onChange={(e) => setSortOption(e.target.value)}>
                <option value="name">Sort by Name</option>
                <option value="weight">Sort by Weight</option>
            </select>
        </div>
    );
};

export default FilterSort;
