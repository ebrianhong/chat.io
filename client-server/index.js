const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 1337;
app.use(express.static(path.join(__dirname, '../client/public/')));

// router

app.listen(PORT, () => {
  console.log('serving static files on PORT:', PORT);
})