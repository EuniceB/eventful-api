const express = require('express')
const path = require('path')
const server = require('./schema');
const app = express()
const port = 3000
const html_file = path.join(__dirname, '..', 'dist', 'index.html')
app.use(express.static(path.join(__dirname, '..', 'dist')))
app.get('/', (req, res) => {
    res.sendFile(html_file)
})

app.listen(port, () => console.log(`Eventful started! Visit http://localhost:${port}!`))

server.applyMiddleware({
  app
});
