const { Schema, model } = require("mongoose");

const adminSchema = Schema({
    type: String,
    title: String,
    description:String,
    videolink:String
});

const AdminModel = model('admin', adminSchema);

module.exports = { AdminModel }
