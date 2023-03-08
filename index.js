#! /usr/bin/env node

const { program } = require('commander')

program.command('optimize').action(() => {
  console.log('Optimizing images');
  require('./optimize')
})

program.parse(process.argv)