const app = require('express')();

const routes = require('./routes/');

app.use(routes.router);

app.listen(process.env.PORT || 3000, () => {
    console.log('Server running on port 3000');
})