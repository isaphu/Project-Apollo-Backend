const express = require('express');
const app = express();
const cors = require('cors');
const db = require('./models');
const bodyParser = require('body-parser');
const productRouter = require('./routes/product')
const uomRouter = require('./routes/uom')

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use('/product', productRouter);
app.use('/uom', uomRouter )



app.all('*',(req,res,next) => {
  res.status(404).send({ message: 'route not found'})
})

db.sequelize.sync({force: false }).then(() => {
    app.listen(8000, () => {
        console.log('server is running at port 8000');
    });
});