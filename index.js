
const express = require('express');
const cors = require('cors')
const { connection } = require('./config/db');
const { adminRouter } = require('./Routes/admin.route');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/admin',adminRouter);

app.get('/', (req, res) => {
    try {
        res.send({ "msg": "Welcome" })
    }
    catch (e) {
        console.log('e: ', e);
        res.send({ "msg": "error" });
    }
});

app.listen(8080, async () => {
    try {
        await connection;
        console.log("App listening 8080 Port")
    }
    catch (e) {
        console.log('e: ', e);
    }
    console.log("Ok")
})
