import React from 'react';
interface Options {
  value: string;
  label: string;
}
const Dropdown = ({
  options,
  getSort,
  filterSort,
}: {
  options: Options[];
  getSort: (e: { target: { value: string; }; }) => void;
  filterSort: string;
} )  => {
  return (
    <select name="sort-select" className="sort-select" value={filterSort} onChange={getSort}>
      {options.map((o) => (
        <option key={o.value} value={o.value}>
          {o.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
