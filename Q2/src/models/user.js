const db = require('../helpers/db')

module.exports = {
    getAllUserNotPhoneModel: () => {
        return new Promise((resolve, reject) => {
            const query = `SELECT * FROM USER`

            db.query(query, (err, result, fields) => {
                if (!err) {
                    resolve(result)
                } else {
                    reject(new Error(err))
                }
            })
        })
    }
}