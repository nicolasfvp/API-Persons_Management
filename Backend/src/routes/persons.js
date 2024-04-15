const express = require("express");
const router = express.Router();
const { Person } = require("../models");

router.get("/", async (req, res) => {
    try {
        if (req.query.cpf) {
            const person = await Person.findOne({ cpf: req.query.cpf });
            if (!person) {
                return res.status(404).json({ message: "Pessoa não encontrada" });
            }
            return res.json(person);
        } else {
            const persons = await Person.find();
            return res.json(persons);
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
});
router.post("/", async (req, res) => {
    console.log(req.body)
    const person = new Person(req.body);
    try {
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Person.findByIdAndUpdate(id, req.body);
        res.json({ message: "Person updated successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        await Person.findByIdAndDelete(id);
        res.json({ message: "Person deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;