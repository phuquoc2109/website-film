import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Fragment } from 'react';
import './App.css';
import Home from './component/page/Home';
import ListFilmProvider from './provider/ListFilmProvider';
import ScrollButton from './component/page/ScrollButton';
import Phimbo from './component/page/Phimbo';
import Phimle from './component/page/Phimle';
import Phimchieurap from './component/page/Phimchieurap';
import Phimhoathinh from './component/page/phimhoathinh';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <ListFilmProvider>
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/phimbo"><Phimbo /></Route>
          <Route path="/phimle"><Phimle /></Route>
          <Route path="/phimchieurap"><Phimchieurap /></Route>
          <Route path="/phimhoathinh"><Phimhoathinh /></Route>
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
