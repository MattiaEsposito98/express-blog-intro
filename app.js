console.log ("Blog")
const express = require ('express')
const app = express ()
const port = 3000 


app.get ('/', (req, res) => {
  res.send ('Server del mio blog')
})


app.listen (port, () => {
  console.log (`Porta in ascolto ${port}`)
})

