const mongoose = require("mongoose");

const AddressSchema = new mongoose.Schema({
    cep: { type: String, required: true },
    address: { type: String, required: true },
    number: { type: Number, required: true },
    complement: { type: String },
    neighborhood: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true }
});

const PersonSchema = new mongoose.Schema({
    name: { type: String, required: true },
    cpf: {type :String, required:true },
    gender: { type: String, enum: ["masculino", "feminino", "outro"], required: true  },
    birthDate: { type: Date, required: true },
    maritalStatus: { type: String, enum: ["solteiro", "casado", "separado" , "divorciado", "viuvo"] },
    addresses: [AddressSchema]
});

const Person = mongoose.model("Person", PersonSchema);
const Address = mongoose.model("Address", AddressSchema);

module.exports = { Person, Address };