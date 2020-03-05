"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/" + Math.floor(Math.random() * 200);
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var id = todo.id, title = todo.title, completed = todo.completed;
    logToDo(id, title, completed);
});
var logToDo = function (id, title, completed) {
    console.log("\n    The Todo with ID: " + id + "\n    has a title of: " + title + "\n    is it finished? " + completed);
};
