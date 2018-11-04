/*
 * @Author: Simon Bragg
 * @Date: 2018-11-04 15:14:29 
 * @Last Modified by: Simon B
 * @Last Modified time: 2018-11-04 15:51:15
 */

require('dotenv').config()

const server = require('./server')

const port = process.env.PORT || 3000

server.listen(port, () => console.log(`Genealogy API server started on ${port}`))