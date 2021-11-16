import request from 'supertest'
import { server } from '../../src/server'

describe('GET', function async() {

  it('responds with Welcome message', async () => {
    return await request(server)
      .get('/')
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.body.message).toBe('Welcome to node.js world!!')
      })
  })

  it('responds with sum of numbers', async () => {
    return await request(server)
      .post('/add')
      .send({ firstNumber: 10, secondNumber: 5 })
      .then(response => {
        expect(response.status).toBe(200)
        expect(response.body.sum).toBe(15)
      })
  })

})
