import React from 'react';

const FilterButtons = ({ filter, setFilter }) => {
  return (
    <div className="filter-buttons">
      {['all', 'completed', 'pending'].map((status) => (
        <button
          key={status}
          onClick={() => setFilter(status)}
          className={filter === status ? 'active' : ''}
        >
          {status.charAt(0).toUpperCase() + status.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;
