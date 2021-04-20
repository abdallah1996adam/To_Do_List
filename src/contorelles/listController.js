const { response, request } = require("express");
const Lists = require("../models/list");


exports.findAll = (request, response) => {
  Lists.getAll((error, lists) => {
    if (error) {
      response.send(error.message);
    }
    response.render("home.ejs", { lists });
  });
};


exports.findOne = (request, response) => {
  const id = request.params.id;
  Lists.getOne(id, (error, result) => {
    if (error) {
      response.send(error.message);
    }
    const tasks = result;
    let listName;
    if (result == "") {
      listName = "pas de taches";
    } else {
      listName = result[0].name;
    }
    response.render("list.ejs", { tasks, listName });
  });
};



exports.addOne = (request, response) => {
  Lists.create(request.body, (error, result) => {
    if (error) {
      response.send(error.message);
    }

    response.redirect("/");
  });
};
