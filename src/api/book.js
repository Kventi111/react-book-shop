import bookList from './books.json';

const headers = {
  'content-type': 'application/json'
};

export const getBookList = () => {
  return new Promise(res=> setTimeout(()=>res({
    status : 200,
    data : bookList,
    headers
  }), 500))
};
