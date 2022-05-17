import React from 'react';
import './toy.css';
import Toys from '../../models/type';

const Toy = function ({
  num,
  name,
  count,
  year,
  shape,
  color,
  size,
  favorite,
  getLove,
}: Toys): JSX.Element {
  const reqPngs = require.context('../../../public/toys', true, /\.png$/);
  const paths = reqPngs.keys();
  const pngs = paths.map((path) => reqPngs(path).default);
  console.log(pngs);

  return (
    <div className="toy" data-num={num} onClick={getLove}>
      <h2 className="toy-tittle"> {name} </h2>

      <img src={pngs[+num-1]} alt="toy" className="toy-img" />
      <div className="toy-description">
        {' '}
        <p className="count"> Количество: {count} </p>
        <p className="year"> Год: {year}</p>
        <p className="shape">Форма: {shape} </p>
        <p className="color"> Цвет: {color}</p>
        <p className="size"> Размер: {size}</p>
        <p className="favorite "> Любимая: {favorite ? 'Да' : 'Нет'}</p>
      </div>
      <div className="ribbon" />
    </div>
  );
};

export default Toy;
