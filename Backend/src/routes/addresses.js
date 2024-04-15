const express = require("express");
const router = express.Router();
const { Person, Address } = require("../models");


router.post("/:personId/addresses", async (req, res) => {
    const { personId } = req.params;
    const address = new Address(req.body);
    try {
        const person = await Person.findById(personId);
        person.addresses.push(address);
        await person.save();
        res.status(201).json(person);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.put("/:personId/addresses/:addressId", async (req, res) => {
    const { personId, addressId } = req.params;
    try {
        const person = await Person.findById(personId);
        const address = person.addresses.id(addressId);
        address.set(req.body);
        await person.save();
        res.json({ message: "Address updated successfully" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

router.delete("/:personId/addresses/:addressId", async (req, res) => {
    const { personId, addressId } = req.params;
    try {
        const person = await Person.findById(personId);
        person.addresses.id(addressId).remove();
        await person.save();
        res.json({ message: "Address deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;