/* eslint-disable @typescript-eslint/no-shadow */
import React, { useState } from 'react';
import './App.css';
import ToyMain from '../toyPage/toyMain/toyMain';

import AppHeader from '../components/appHeader/appHeader';
import AppFooter from '../components/footer/footer';
import allToys from '../assets/allToys';
import Toys from '../models/type';

const App = function (): JSX.Element {
  const filt: string[] = [];
  const color: string[] = [];
  const size: string[] = [];
  const [count, setCount] = useState(0);
  const [likeToys, setLikeToys] = useState([]);
  const [filterFavorit, setFilterFavorit] = useState(false);
  const [filterSort, setFilterSort] = useState('От A до Я');
  const [filterShape, setFilterfilterShape] = useState(filt);
  const [filterColor, setFilterfilterColor] = useState(color);
  const [filterSize, setFilterfilterSize] = useState(size);

  const sortToys = (filteredToys: Toys[]) => {
    switch (filterSort) {
      case 'От A до Я':
        filteredToys.sort((a, b) => {
          if (a.name > b.name) {
            return 1;
          }
          if (a.name < b.name) {
            return -1;
          }
          return 0;
        });
        break;
      case 'От Я до А':
        filteredToys.sort((a, b) => {
          if (a.name > b.name) {
            return -1;
          }
          if (a.name < b.name) {
            return 1;
          }
          return 0;
        });
        break;
      case 'По количеству по убыванию':
        filteredToys.sort((a, b) => {
          return +b.count - +a.count;
        });
        break;
      case 'По количеству по возрастанию':
        filteredToys.sort((a, b) => {
          return +a.count - +b.count;
        });
        break;
      default:
        break;
    }

    return filteredToys;
  };

  const getFavorite = () => {
    setFilterFavorit((filterFavorit) => {
      return !filterFavorit;
    });
  };

  const getSort = (e: { target: { value: string } }) => {
    setFilterSort(e.target.value);
  };

  const getFiltered = () => {
    let result: Toys[];
    if (filterShape.length > 0) {
      result = allToys.filter((toy) => filterShape.includes(toy.shape));
    } else {
      result = allToys.filter((toy) => toy.shape);
    }

    if (filterColor.length > 0) {
      result = result.filter((toy) => filterColor.includes(toy.color));
    } else {
      result = result.filter((toy) => toy.color);
    }

    if (filterSize.length > 0) {
      result = result.filter((toy) => filterSize.includes(toy.size));
    } else {
      result = result.filter((toy) => toy.size);
    }

    if (filterFavorit) {
      const toysFav = result.filter((toy) => toy.favorite);
      result = toysFav;
    }
    result.length ? '' : alert('Извините, совпадений не обнаружено');
    return sortToys(result);
  };

  const getShape = (e: React.MouseEvent<HTMLElement>) => {
    const filtClicked = e.currentTarget.getAttribute('data-filter');
    const filtCli = e.currentTarget;

    setFilterfilterShape((_filterShape) => {
      const filterShape = [..._filterShape];

      if (filterShape.findIndex((el) => el === filtClicked) === -1) {
        filterShape.push(filtClicked);
        filtCli.classList.add('active');
      } else {
        console.log(filtClicked);
        console.log(filt);

        filterShape.splice(
          filterShape.findIndex((el) => el === filtClicked),
          1,
        );
        filtCli.classList.remove('active');
      }
      console.log(filterShape);
      return filterShape;
    });
  };
  const getColor = (e: React.MouseEvent<HTMLElement>) => {
    const filtClicked = e.currentTarget.getAttribute('data-filter');
    const filtCli = e.currentTarget;

    setFilterfilterColor((_filterColor) => {
      const filterColor = [..._filterColor];

      if (filterColor.findIndex((el) => el === filtClicked) === -1) {
        filterColor.push(filtClicked);
        filtCli.classList.add('active');
      } else {
        filterColor.splice(
          filterColor.findIndex((el) => el === filtClicked),
          1,
        );
        filtCli.classList.remove('active');
      }
      return filterColor;
    });
  };

  const getSize = (e: React.MouseEvent<HTMLElement>) => {
    const filtClicked = e.currentTarget.getAttribute('data-filter');
    const filtCli = e.currentTarget;

    setFilterfilterSize((_filterSize) => {
      const filterSize = [..._filterSize];

      if (filterSize.findIndex((el) => el === filtClicked) === -1) {
        filterSize.push(filtClicked);
        filtCli.classList.add('active');
      } else {
        filterSize.splice(
          filterSize.findIndex((el) => el === filtClicked),
          1,
        );
        filtCli.classList.remove('active');
      }
      return filterSize;
    });
  };

  const getLove = (e: React.MouseEvent<HTMLElement>) => {
    const like = e.currentTarget.getAttribute('data-num');
    const likeCard = e.currentTarget;
    if (likeToys.length >= 20) {
      alert('К сожалению по правилам не может быть более 20 любимых игрушек');
    } else {
      setLikeToys((likeToys) => {
        const likeToy = [...likeToys];
        if (likeToy.findIndex((el) => el === like) === -1) {
          likeToy.push(like);
          likeCard.classList.add('active');
        } else {
          likeToy.splice(
            filt.findIndex((el) => el === like),
            1,
          );
          likeCard.classList.remove('active');
        }
        setCount(likeToy.length);
        return likeToy;
      });
    }
  };

  const resetApp = () => {
    setFilterFavorit(false);
    filt.length = 0;
    setFilterfilterShape(filt);
    color.length = 0;
    setFilterfilterColor(color);
    size.length = 0;
    setFilterfilterSize(size);
  };

  return (
    <div className="App">
      <AppHeader count={count} />
      <main className="page">
        <ToyMain
          toys={getFiltered()}
          getShape={getShape}
          getColor={getColor}
          getSize={getSize}
          getFavorite={getFavorite}
          getSort={getSort}
          filterSort={filterSort}
          getLove={getLove}
          resetApp={resetApp}
        />
      </main>
      <AppFooter />
    </div>
  );
};

export default App;
