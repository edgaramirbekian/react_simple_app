import React, { Component } from 'react';
import ArticleList from './components/articles/ArticleList';
import CalendarDesk from './components/calendar/Calendar';
import Filter from './components/filter/filter'
import {articles} from '../src/data/mock';

class App extends Component {
  render() {
    return (
      <div>
        <CalendarDesk />
        <Filter articles = {articles}/>
        <ArticleList articles = {articles}/>
      </div>
    );
  }
}

export default App;
