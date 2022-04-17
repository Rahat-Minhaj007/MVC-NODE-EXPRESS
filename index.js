const express = require('express');
const app = express();
const PORT = 5000;
const starterRoute = require('./routes/starter.route');
const userRoute = require('./routes/user.route');
const notFoundRoute = require('./routes/notFound.route');

// express by default body parser
app.use(express.urlencoded({ extended: true }));

app.use(starterRoute);
app.use(userRoute);
app.use(notFoundRoute);

// port
app.listen(PORT, () => {
    console.log(`listening on port http://localhost:${PORT}`);
});