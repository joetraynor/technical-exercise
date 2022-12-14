// const express = require('express')
import express from 'express'
import fetch from 'node-fetch';
import moment from 'moment'

const server = express()
  .get('/api', (req, res) => {
    fetch('https://api.github.com/repositories/44838949/commits?per_page=100&sha=f45309246584ebdbc0cd6f4960c3f2103ff76a76')
      .then(res => res.json())
      .then(response => {
        const newArray = response.map(obj => {
          const commit = obj.commit
          return {
            name: commit.author.name,
            date: moment(commit.author.date).format('MMMM Do YYYY, h:mm:ss a'),
            message: commit.message
          }
        })
        res.send(newArray)
      })
      .catch(err => console.error('error:' + err))
  })
  .listen('3001', () => {
    console.log('api listening', server.address())
  })
