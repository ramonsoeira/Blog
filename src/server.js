const express = require("express");
const bodyParser = require("body-parser");

const routes = require("./api/routes");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);

const server = app.listen(process.env.PORT || 3000, () => {
    const port = server.address().port;

    console.log(`Port ===> ${port}`);
});