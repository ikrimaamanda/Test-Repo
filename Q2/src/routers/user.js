const {
    Router
} = require('express')
const router = Router()
const controller = require('../controllers/user')

router.get('/noPhone', controller.getAllUserNoPhone)

module.exports = router