import React from 'react';
import Dropdown from './dropbox';
import './filterSort.css';

const opt = [
  { value: 'От A до Я', label: 'От A до Я' },
  { value: 'От Я до А', label: 'От Я до А' },
  { value: 'По количеству по убыванию', label: 'По количеству по убыванию' },
  { value: 'По количеству по возрастанию', label: 'По количеству по возрастанию' },
];

const FilterSort = function ({
  getSort,
  filterSort,
  resetApp,
}: {
  getSort: (e: { target: { value: string } }) => void;
  filterSort: string;
  resetApp: () => void;
}): JSX.Element {
  return (
    <section className="sort">
      <div className="controls-tittle">Фильтры по диапазону</div>

      <Dropdown options={opt} getSort={getSort} filterSort={filterSort} />

      <input type="reset" value="Сброс фильтров" className="reset" onClick={resetApp} />
    </section>
  );
};

export default FilterSort;
