var express = require("express");
var router = express.Router();
var pool = require("./pg-connection-pool");




router.get("/todos", function (req, res) {
    pool.query("SELECT * FROM todos").then(function (result) {
        res.send(result.rows);
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

router.post("/todos", function (req, res) {
    var task = req.body;
    var sql = "INSERT INTO todos(task) VALUES($1::text)";
    var values = [task.task];
    pool.query(sql, values).then(function (result) {
        res.status(201).send("Created");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});

router.delete("/todos/:id", function (req, res) {
    var id = req.params.id;
    var sql = "DELETE FROM todos WHERE id=$1::int";
    pool.query(sql, [id]).then(function (result) {
        res.send("deleted");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});
router.put("/todos/:id", function (req, res) {
    var id = req.params;
    var task = req.body;
    var sql = "UPDATE todos SET task=$2::text WHERE id=$1::int";
    var values = [id.id, task.task]
    pool.query(sql, values).then(function (result) {
        res.send("edited");
    }).catch(function (err) {
        console.log(err);
        res.status(500).send("ERROR");
    });
});


module.exports = router;

