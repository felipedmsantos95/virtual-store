const knex = require('knex')
const configuration = require('../../knexfile')

//Switching to test db or development db, according what script is running 

const config = process.env.NODE_ENV === 'test' ? configuration.test : configuration.development

const connection = knex(config)

module.exports = connection