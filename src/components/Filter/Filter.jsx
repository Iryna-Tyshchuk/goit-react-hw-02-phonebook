export const Filter = ({ value, onFilterChange }) => {
  return (
    <div style={{ margin: '20px auto', width: '500px' }}>
      <p>Find contact by name</p>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilterChange}
      />
    </div>
  );
};
