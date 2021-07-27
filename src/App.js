import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Fragment, useState } from 'react';
import './App.css';
import Home from './component/page/Home';
import ListFilmProvider from './provider/ListFilmProvider';
import ScrollButton from './component/page/ScrollButton';
import Phimbo from './component/page/Phimbo';
import Phimle from './component/page/Phimle';
import Phimchieurap from './component/page/Phimchieurap';
import Phimhoathinh from './component/page/phimhoathinh';
import XemPhim from './component/page/XemPhim';


function App() {
  

  return (
    <BrowserRouter>
    <div className="App">
      
      <ListFilmProvider>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/phimbo" exact><Phimbo /></Route>
          <Route path="/phimle" exact><Phimle /></Route>
          <Route path="/phimchieurap" exact><Phimchieurap /></Route>
          <Route path="/phimhoathinh" exact><Phimhoathinh /></Route>
          <Route path="/xemphim/:index"><XemPhim /></Route>
        </Switch>
        
      </ListFilmProvider>
        <Fragment >
            <ScrollButton />
        </Fragment>
      </div>
    </BrowserRouter>
  );
}

export default App;
