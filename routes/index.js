/*
 * @Author: Simon B 
 * @Date: 2018-11-04 15:46:04 
 * @Last Modified by:   Simon B 
 * @Last Modified time: 2018-11-04 15:46:04 
 */
module.exports = (router) => {
  router.prefix('/api/v1')
  router.use('/', require('./home'))
}