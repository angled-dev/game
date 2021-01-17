import React, { Suspense, lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GlobalContext, { useScreen, usePlayer } from 'context';
import Cursor from 'organisms/Cursor';
import ScreenLayout from 'organisms/ScreenLayout';
import Loading from 'atoms/Loading';

// const SearchPage = lazy(() => import('organisms/SearchPage'));

function App() {
  const screen = useScreen();
  const player = usePlayer();

  return (
    <GlobalContext.Provider value={{ screen, player }}>
      <Router>
        <div className="App">
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/">
                <ScreenLayout />
              </Route>
            </Switch>
          </Suspense>
        </div>
      </Router>
      <Cursor />
    </GlobalContext.Provider>
  );
}

export default App;
