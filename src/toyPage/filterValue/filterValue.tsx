import React from 'react';
import './filterValue.css';

const FilterValue = function (): JSX.Element {
  return (
    <div className="range">
      <div className="controls-tittle">Фильтры по диапазону</div>
      <div className="count">
        <span className="control-span">Количество экземляров</span>
        <div className="control-slider-container">
          <output className="slider-output">1</output>
          <div className="count-slider">2</div>
          <output className="slider-output">12</output>
        </div>
      </div>

      <div className="year">
        <span className="control-span">Год приобретения</span>
        <div className="year-slider-container">
          <output className="slider-output">1</output>
          <div className="year-slider">2</div>
          <output className="slider-output">12</output>
        </div>
      </div>
    </div>
  );
};

export default FilterValue;
