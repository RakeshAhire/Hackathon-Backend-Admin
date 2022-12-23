const { Router } = require("express");
const { AdminModel } = require("../Model/admin.model");

const adminRouter = Router();

adminRouter.post("/", async (req, res) => {
    const {type} = req.body;
    try {
        if (type === 'lecture') {
            const data = await AdminModel.find({ type: 'lecture' });
            res.send(data);
        }
        else if (type === 'assignment') {
            const data = await AdminModel.find({ type: 'assignment' });
            res.send(data);
        }
        else {
            const data = await AdminModel.find();
            res.send(data);
        }
    }
    catch (e) {
        console.log('e: ', e);
        res.send({ "msg": "error" });
    }
});

adminRouter.post("/add", async (req, res) => {
    try {
        const payload = req.body;
        const data = new AdminModel(payload)
        await data.save()
        res.send(data);
        // res.send(payload)
    }
    catch (e) {
        console.log('e: ', e);
        res.send({ "msg": "error" });
    }
});

adminRouter.patch("/edit/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        await AdminModel.findByIdAndUpdate({ _id: id }, payload)
    }
    catch (e) {
        console.log('e: ', e);
        res.send({ "msg": "error" });
    }
});

adminRouter.delete("/delete/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const payload = req.body;
        await AdminModel.findByIdAndRemove({ _id: id })
    }
    catch (e) {
        console.log('e: ', e);
        res.send({ "msg": "error" });
    }
});

module.exports = { adminRouter }