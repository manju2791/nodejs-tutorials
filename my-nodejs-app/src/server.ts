import express from 'express'
import { sumOfNumbers } from './add'

const server = express()

server.use(express.json())

server.get('/', (req, res) => {
  res.status(200).send({ message: 'Welcome to node.js world!!' })
})

server.post('/add', (req, res) => {
  const { firstNumber, secondNumber } = req.body
  const sum: number = sumOfNumbers(firstNumber, secondNumber)
  res.status(200).send({ sum })
})

export { server }
