const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 3000
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname + '/static')))

app.get('/', (req,res) => {
    res.render(path.join(__dirname, '..', 'index'), { userName: 'Ivan'})
})


app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
