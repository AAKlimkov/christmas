import React from 'react';
import './toyMain.css';
import ToyList from '../toyList/toyList';
import FilterForm from '../filterForm/filterForm';
import FilterSort from '../filterSort/filterSort';
// import FilterValue from '../filterValue/filterValue';
import Toys from '../../models/type';

interface ToyMainProps {
  toys: Toys[];
  getShape: (e: React.MouseEvent<HTMLElement>) => void;
  getFavorite: () => void;
  getSort: (e: { target: { value: string } }) => void;
  filterSort: string;
  getLove: (e: React.MouseEvent<HTMLElement>) => void;
  getColor: (e: React.MouseEvent<HTMLElement>) => void;
  getSize: (e: React.MouseEvent<HTMLElement>) => void;
  resetApp: () => void;
}

const ToyMain = function (props: ToyMainProps): JSX.Element {
  const { toys, getShape, getFavorite, getSort, filterSort, getLove, getColor, getSize, resetApp } =
    props;
  return (
    <div className="ToyMain">
      <div className="controls">
        {/* <FilterValue /> */}
        <FilterForm
          getShape={getShape}
          getFavorite={getFavorite}
          getColor={getColor}
          getSize={getSize}
        />
        <FilterSort getSort={getSort} filterSort={filterSort} resetApp={resetApp} />
      </div>
      <ToyList toys={toys} getLove={getLove} />
    </div>
  );
};

export default ToyMain;

