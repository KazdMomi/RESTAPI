const db = require("../../database");
const Words = db.words;

//add
exports.createWord = (req, res) => {
    if (!req.body.name) {
        res.status(400).send({
            message: "Content can not be empty!",
        });
        return;
    }
    const word = {
        name: req.body.name,
    };

    Words.create(word)
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Error occured while uploading the word"
            });
        });
};

//get
exports.getAllUniqueWords = (req, res) => {
    Words.findAll({
        attributes: ['name'],
        group: ['name']
    })
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
};

//delete
exports.deleteWord = (req, res) => {
    const name = req.params.name
    Words.destroy({
        where: { name: name }
    }).then(num => {
        if (num == 1) {
            res.send(num);
        } else {
            res.send({
                message: "Canot delete word with name " + name
            });
        }
    }).catch(err => {
        console.log(err);
        return res.status(401).send({ message: "Problem with deleting word" });
    });
};

//count
exports.countWord = (req, res) => {
    const name = req.body.name;
    Words.findAndCountAll({
        where: {name: name}
    }).then(data => {
        const rows = {
            count: data.count,
        }
        res.send(rows);
    })

}
