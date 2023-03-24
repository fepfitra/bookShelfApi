const { addBookHandler, getAllBookHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBookHandler
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: () => {}
  }
];

module.exports = routes;
