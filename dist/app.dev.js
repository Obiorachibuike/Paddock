"use strict";

var axios = require("axios");

var read = function read(url) {
  var response;
  return regeneratorRuntime.async(function read$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(axios.get(url));

        case 3:
          response = _context.sent;
          console.log(response.data);
          return _context.abrupt("return", response);

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.log("Invalid URL");
          console.log(_context.t0);
          return _context.abrupt("return", "Incorrect URL!");

        case 13:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var post = function post(url, newObject) {
  var response;
  return regeneratorRuntime.async(function post$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(axios.post(url, newObject));

        case 3:
          response = _context2.sent;
          console.log("Successfull");
          console.log(response);
          return _context2.abrupt("return", {
            data: response,
            sataus: 201,
            message: "Success"
          });

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log("Invalid URL");
          return _context2.abrupt("return", "Incorrect URL!");

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 9]]);
};

var update = function update(url, newObject) {
  var response;
  return regeneratorRuntime.async(function update$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.put(url, newObject));

        case 3:
          response = _context3.sent;
          console.log(response);
          return _context3.abrupt("return", {
            data: response,
            sataus: 201,
            message: "Success"
          });

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          console.log("Invalid URL");
          return _context3.abrupt("return", "Incorrect URL!");

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

var erase = function erase(url) {
  var response;
  return regeneratorRuntime.async(function erase$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(axios["delete"](url));

        case 3:
          response = _context4.sent;
          console.log("Successful");
          return _context4.abrupt("return", response);

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          console.log("Invalid URL");
          return _context4.abrupt("return", "Incorrect URL!");

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

module.exports = {
  read: read,
  post: post,
  update: update,
  erase: erase
};