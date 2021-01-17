
const port = 5000;
const express = require("express");
const compression = require("compression");
const path = require('path');

const app = express();

app.use(compression());
app.use(express.static("./greenflame/build"));

app.get("/*", (req, res) => res.sendFile(path.resolve(__dirname, 'greenflame', 'build', 'index.html')));

app.listen(port, "0.0.0.0", () => {
	console.log(`Listening on http://0.0.0.0:${port}`);
});