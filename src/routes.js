const { addNoteHandler } = require("./handler");

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addNoteHandler,
  },
];

module.exports = routes;
