const express = require('express')
const app = express()

// "/" This represent the blank path means home page
// app.get("route",callback(req,res))

app.get('/', function (req, res) {
  res.send('Hello From the Express')
})
app.get('/about', function (req, res) {
  res.send('This is about Page of My website')
})
app.get('/contact', function (req, res) {
  res.send('This is contact Page of My website')
})

app.listen(3000,()=>{
    console.log("Listening at port 3000")
})