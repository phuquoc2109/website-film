import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React, { Fragment, useContext, useState } from 'react';
import './App.css';
import Home from './component/page/Home';
import ListFilmProvider, { FilmContext } from './provider/ListFilmProvider';
import ScrollButton from './component/page/ScrollButton';
import Phimbo from './component/page/Phimbo';
import Phimle from './component/page/Phimle';
import Phimchieurap from './component/page/Phimchieurap';
import Phimhoathinh from './component/page/phimhoathinh';
import PageWatchPhim from './component/page/PageWatchPhim';
import Search from './component/page/Search';


function App() {
  

  const [isSearch, setIsSearch] = useState(false);
  const clickSearch = () => {
    setIsSearch(!isSearch);
  }
  

  return (
    <BrowserRouter>
    <div className="App">
      
      <ListFilmProvider>
       {isSearch ? <Search clickSearch={clickSearch} isSearch={isSearch}  /> : ''}
        <Switch>
          <Route path="/" exact><Home clickSearch={clickSearch} /></Route>
          <Route path="/phimbo" ><Phimbo clickSearch={clickSearch} /></Route>
          <Route path="/phimle" ><Phimle clickSearch={clickSearch} /></Route>
          <Route path="/phimchieurap" ><Phimchieurap clickSearch={clickSearch} /></Route>
          <Route path="/phimhoathinh" ><Phimhoathinh clickSearch={clickSearch} /></Route>
          <Route path="/xemphim/:id"><PageWatchPhim clickSearch={clickSearch} /></Route>
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
