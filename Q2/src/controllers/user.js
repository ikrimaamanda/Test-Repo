const model = require('../models/user')
const status = require('../helpers/status')

module.exports = {
    getAllUserNoPhone: async (req, res) => {
        try {
            const result = await model.getAllUserNotPhoneModel()
        } catch (error) {
            status.statusErrorServer(res, error)
        }
    }
}