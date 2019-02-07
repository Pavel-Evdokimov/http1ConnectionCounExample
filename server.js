const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/timeout', (req, res) => {
    setTimeout(() => {
        res.json({"result": "done"});
    }, 5000);
});

app.listen(2999);