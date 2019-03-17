import React from 'react';
import ArticleList from './components/articles/ArticleList';
import CalendarDesk from './components/calendar/Calendar';
import Filter from './components/filter/filter';
import Counter from './components/counter/counter';
import {articles} from '../src/data/mock';

class App extends React.Component {
  render() {
    return (
      <div>
        <Counter />
        <CalendarDesk />
        <Filter articles = {articles}/>
        <ArticleList articles = {articles}/>
      </div>
    );
  }
}

export default App;
