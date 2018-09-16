const express = require('express');
const path = require('path');

const app = express();
const PORT = 5252;

app.use('/', express.static(path.resolve(__dirname, './public')));

app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));