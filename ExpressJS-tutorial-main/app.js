const app = require('express')();
const miMiddleware = require('./middleware/logger');
const port = 3000;

app.use(miMiddleware.logger);
app.use('/contacts', require('./routes/contact_routes'));

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

// app.js (inicializar) -> middleware -> routes -> services -> infraestructure