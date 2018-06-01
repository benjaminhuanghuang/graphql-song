import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SongList from './SongList';
import SongCreate from './SongCreate';
import SongDetail from './SongDetail';

export default () => {
  return (
    <div className="container">
      <Switch>
        <Route path="/" component={SongList} />
        <Route path="songs/new" component={SongCreate} />
        <Route path="songs/:id" component={SongDetail} />
      </Switch>
    </div>);
};
