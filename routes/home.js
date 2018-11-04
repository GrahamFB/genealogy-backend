/*
 * @Author: Simon B 
 * @Date: 2018-11-04 15:46:12 
 * @Last Modified by:   Simon B 
 * @Last Modified time: 2018-11-04 15:46:12 
 */
const Router = require('koa-router')
const router = new Router()
const Ctrl = require('../controllers/home')

router.get('/', Ctrl.index)

module.exports = router.routes()