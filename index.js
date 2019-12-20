const express = require('express')
const app = express()
const port = process.env.PORT || 3000
//this line tells express to serve
//js or css file in the frontend folder
app.use(express.static('frontend'))


app.get('/', (req, res) => res.sendFile(__dirname+'/frontend/html/home.html'))
app.get('/login', (req, res) => res.send('login!'))
app.get('/register', (req, res) => res.send('register'))
var student={}
student.name="A D I T Y A .K"
student.college="VNRVJIET"
student.regno="17071A1227"
app.get('/data', (req, res)=> res.json(student));



//res.sendfile
//res.json

app.listen(port, () => console.log(`Example app listening on port ${port}!`))