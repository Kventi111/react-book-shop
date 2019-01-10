import React, { Component } from 'react';

import Header from './header'
import BookList from './bookList'
import Filter from '../container/filter'

import './app.css'

class App extends Component {

  componentWillMount() {
    const { fetchBooks,filter } = this.props

    fetch('/books.json')
      .then( response =>  response.json()  )
      .then( data => {         
        fetchBooks(data)
      })

  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="container content app-grid">
          <div className="app-left">
            <BookList />
          </div>
          <div className="app-right">
          <Filter/>
          </div>
        </div>
      </div>
    );
  }
}


export default App
