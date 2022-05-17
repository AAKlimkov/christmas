import React from 'react';
import AppHeader from '../components/appHeader/appHeader';
import AppFooter from '../components/footer/footer';

const MainPage = function (): JSX.Element {
  return (
    <div className="App">
      <AppHeader count={0} />
      <main className="page">
       Hello Main
      </main>
      <AppFooter />
    </div>
  );
};

export default MainPage;
