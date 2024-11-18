console.log("Blog")
const express = require('express')
const app = express()
const port = 3000

const posts = [
  {
    titolo: "ciambellone",
    contenuto: "Ciambellone preparato a casa",
    immagine: 'images/ciambellone.jpeg',
    tags: ["#cucina","#ciambellone"]
  },

  {
    titolo: "cracker barbabientola",
    contenuto: "cracker barbabientola preparato a casa",
    immagine: 'images/cracker_barbabientola.jpeg',
    tags: ["#cucina","#cracker_barbabientola"]
  },

  {
    titolo: "pane fritto dolce",
    contenuto: "pane fritto dolce preparato a casa",
    immagine: 'images/pane_fritto_dolce.jpeg',
    tags: ["#cucina","#pane_fritto_dolce"]
  },

  {
    titolo: "pasta barbabietola",
    contenuto: "pasta barbabietola preparata a casa",
    immagine: 'images/pasta_barbabietola.jpeg',
    tags: ["#cucina","#pasta_barbabietola"]
  },

  {
    titolo: "torta paesana",
    contenuto: "torta paesana preparata a casa",
    immagine: 'images/torta_paesana.jpeg',
    tags: ["#cucina","#torta_paesana"]
  }
]


app.use(express.static('images'))

app.get('/', (req, res) => {
  res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
  res.json(posts)
})


app.listen(port, () => {
  console.log(`Porta in ascolto ${port}`)
})

