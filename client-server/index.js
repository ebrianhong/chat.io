const express = require('express');
const path = require('path')

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.static(path.join(__dirname, '../client/public/')));

// router
app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, '../client/public/index.html')));


app.listen(PORT, () => {
  console.log('serving static files on PORT:', PORT);
})