// const express = require('express')
import express from 'express'
import fetch from 'node-fetch';
import moment from 'moment'
import dotenv from 'dotenv'
dotenv.config({path: './.env'})

const server = express()
  .get('/api', (req, res) => {
    // i have pushed the .env file for the sake of the exercise, however in reality this would be excluded
    fetch(process.env.API_URL)
      .then(res => res.json())
      .then(response => {
        const reducedCommit = response.map(obj => {
          const commit = obj.commit
          return {
            name: commit.author.name,
            date: moment(commit.author.date).format('MMMM Do YYYY, h:mm:ss a'),
            message: commit.message
          }
        })
        res.send(reducedCommit)
      })
      .catch(err => {
        // improve error handling
        res.status(500)
        res.render('Error', {error: err})
      })
  })
  .listen('3001', () => {
    console.log('api listening', server.address())
  })
