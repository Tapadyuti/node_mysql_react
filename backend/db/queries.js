const knex = require(knex);

const query = require("./")
const config = require('../knexfile');
const db = knex(config.development);

function add(order)

module.exports = {
    add,
}