import React, { Component } from "react";
import { connect } from 'react-redux'
import BookItem from '../bookItem'

import {
  Wrapper,
  Header,
  Grid
} from './style'

class BookList extends Component {
  render() {
    const { bookList } = this.props.book
    return (
      <div>
        <Wrapper>
          <Header>Список книг</Header>
            <Grid>
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
          </Grid>
        </Wrapper>
      </div>
    );
  }
}

const mapStateToProps = ({book}) => ({
  book
})


export default connect(mapStateToProps)(BookList)