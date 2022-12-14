const express = require('express')

const server = express()
  .get('/api', (req, res) => {
    res.json({ data: { message: 'hey there' } })
  })
  .listen('3001', () => {
    console.log('api listening', server.address())
  })
