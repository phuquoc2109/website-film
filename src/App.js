import React, { Fragment, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './component/page/Home';
import PageWatchPhim from './component/page/PageWatchPhim';
import Phimbo from './component/page/Phimbo';
import Phimchieurap from './component/page/Phimchieurap';
import Phimhoathinh from './component/page/phimhoathinh';
import Phimle from './component/page/Phimle';
import ScrollButton from './component/page/ScrollButton';
import Search from './component/page/Search';
import ListFilmProvider from './provider/ListFilmProvider';


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
