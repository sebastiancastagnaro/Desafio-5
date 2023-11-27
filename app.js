const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');
const hbs = require('express-handlebars');

const app = express();

// Configuración de Mongoose
mongoose.connect('tuURLdeConexion', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión:'));
db.once('open', function() {
    console.log('Conexión exitosa a la base de datos');
});

// Configuración de Handlebars
app.engine('hbs', hbs({ extname: 'hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Configuración de bodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rutas
const cartRouter = require('./routes/cartRouter'); // Asume que tienes rutas separadas para cada entidad
const messageRouter = require('./routes/messageRouter');
const productRouter = require('./routes/productRouter');

app.use('/carts', cartRouter);
app.use('/messages', messageRouter);
app.use('/products', productRouter);

// Otros middlewares y configuraciones necesarios

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});

