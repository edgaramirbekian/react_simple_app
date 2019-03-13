import React, { Component } from 'react';
import ArticleList from './components/articles/ArticleList';
import CalendarDesk from './components/calendar/Calendar';
class App extends Component {
  render() {
    return (
      <div>
        <CalendarDesk />
        <ArticleList />
      </div>
    );
  }
}

export default App;
