const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { mongoose } = require('./databases.js')
const app = express();
//configuracion
app.set('port', process.env.PORT || 3000);
//middlewares
app.use(morgan('dev'))
app.use(express.json())
    //routes
app.use('/api/tasks', require('./routes/task.rutas.js'))

//staticfiles
app.use(express.static(path.join(__dirname + '/public')))
    //star server
app.listen(app.get('port'), () => {
    console.log(`Servidor en el puerto ${app.get('port')} `)
})