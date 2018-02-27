var express = require("express");
var inMemoryDatabase = require("./in-memory-database");
var router = express.Router();
var taskDb = inMemoryDatabase();

taskDb.init([
    {task: "Wash the dishes"}
])

router.get("/tasks", function(req, res) {
    res.send(taskDb.readAll());
});

router.post("/tasks", function (req, res) {
    var task = req.body;
    taskDb.create(task);
    res.status(201).send(task);
});

router.delete("/tasks/:id", function(req, res) {
    var id = req.params.id;
    taskDb.delete(id);
    res.status(201).send("deleted");
});

router.put("/tasks/:id", function(req, res) {
    var id = req.params.id;
    var task = req.body;
    taskDb.update(id, task);
    res.status(201).send("updated");
});

module.exports = router;

