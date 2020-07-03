const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const bodyParser = require('body-parser');

db.sequelize.sync({force: false }).then(() => {
    app.listen(8000, () => {
        console.log('server is running at port 8000');
    });
});