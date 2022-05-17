import React from 'react';
import './filterForm.css';

const FilterForm = function ({
  getShape,
  getColor,
  getSize,
  getFavorite,
}: {
  getShape: (e: React.MouseEvent<HTMLElement>) => void;
  getColor: (e: React.MouseEvent<HTMLElement>) => void;
  getSize: (e: React.MouseEvent<HTMLElement>) => void;
  getFavorite: () => void;
}): JSX.Element {
  return (
    <div className="filters">
      <div className="controls-tittle">Фильтры по значению</div>
      <div className="shape">
        Форма:
        <span data-filter="шар" onClick={getShape} />
        <span data-filter="колокольчик" onClick={getShape} />
        <span data-filter="шишка" onClick={getShape} />
        <span data-filter="снежинка" onClick={getShape} />
        <span data-filter="фигурка" onClick={getShape} />
      </div>
      <div className="color">
        Цвет
        <span data-filter="белый" onClick={getColor} />
        <span data-filter="желтый" onClick={getColor} />
        <span data-filter="красный" onClick={getColor} />
        <span data-filter="синий" onClick={getColor} />
        <span data-filter="зеленый" onClick={getColor} />
      </div>
      <div className="size">
        Размер
        <span data-filter="большой" onClick={getSize} />
        <span data-filter="средний" onClick={getSize} />
        <span data-filter="малый" onClick={getSize} />
      </div>
      <div className="favorite-container">
        Только любимые:
        <div className="form-group">
          <input
            type="checkbox"
            className="favorite-input"
            name="checkbox"
            id="checkbox"
            onClick={getFavorite}
          />
          <label htmlFor="checkbox" className="favorite-input-label" />
        </div>
      </div>
    </div>
  );
};

export default FilterForm;
