const express = require('express');
const app = express();
const useragent = require('express-useragent');
const port = 3000

app.use(useragent.express());
app.get('/', (req, res) => {
    const obj = req.useragent
    for (let key in obj) {
        if (!obj[key]) delete obj[key]
    }

    res.send(`<h1 style="font-family: Arial, Helvetica, sans-serif;">About your machine</h1><pre>${JSON.stringify(obj, null, 4)}</pre>`);
});


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
