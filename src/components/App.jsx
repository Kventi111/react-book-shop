import React, { Component } from 'react';
import { connect } from 'react-redux'
import Header from '.'

import { fetchBooks } from '../actions/book'
import BookList from './bookList'

class App extends Component {

  componentWillMount() {
    const { fetchBooks } = this.props

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
        <div className="container content">
          <BookList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ book })  => ({
  book
})

const mapDispatchToProps = dispatch => ({
  fetchBooks : books => dispatch(fetchBooks(books))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
