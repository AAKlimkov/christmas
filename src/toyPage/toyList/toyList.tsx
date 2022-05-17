import React from 'react';
import './toyList.css';
import Toy from '../toy/toy';
import Toys from '../../models/type';

const ToyList = function ({
  toys,
  getLove,
}: {
  toys: Toys[];
  getLove: (e: React.MouseEvent<HTMLElement>) => void;
}): JSX.Element {
  return (
    <div className="toy-list">
      {toys.map((toy) => (
        <Toy
          key={toy.num}
          num={toy.num}
          name={toy.name}
          count={toy.count}
          year={toy.year}
          shape={toy.shape}
          color={toy.color}
          size={toy.size}
          favorite={toy.favorite}
          getLove={getLove}
        />
      ))}
    </div>
  );
};
export default ToyList;
