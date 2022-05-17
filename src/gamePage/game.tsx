import React from 'react';
import AppHeader from '../components/appHeader/appHeader';
import AppFooter from '../components/footer/footer';

const Game = function (): JSX.Element {
  return (
    <div className="App">
      <AppHeader count={0} />
      <main className="page">
       Hello Game
      </main>
      <AppFooter />
    </div>
  );
};

export default Game;
