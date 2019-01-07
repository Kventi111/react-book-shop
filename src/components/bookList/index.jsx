import React, { Component } from "react";
import { connect } from 'react-redux'
import BookItem from '../'

class BookList extends Component {
  render() {
    const { bookList } = this.props.book
    return (
      <div>
        <h4>Список книг</h4>
        <div role="list" className="ui divided relaxed list">
          {
            bookList.map( (item,index) => {
              return (
                <BookItem 
                  key = {item._id}
                  _id = {item._id}
                  title = {item.title}
                  author = {item.author}
                  price = {item.price}
              />
              )
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({book}) => ({
  book
})


export default connect(mapStateToProps)(BookList)