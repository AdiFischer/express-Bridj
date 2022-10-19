import express from 'express'
import dogs from './data.js'


const PORT = 3021  //3000-4000

const app = express()

app.use(express.json())

app.listen(PORT, () => console.log('Listening on http://localhost:3021...'))

//
//Routes/end-points
app.get('/test', (request, response) => {
    response.send("It's all good man!")// or makeing it json by putting {}response.send({"It's all good man!"})
})

app.get('/dogs', (req, res) => {
    res.send(dogs)
})

app.post('/dogs', (req, res) => {
    const newDog = req.body
    dogs.push(newDog)
    res.send(dogs)
})
