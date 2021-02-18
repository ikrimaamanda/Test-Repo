module.exports = {
    // status not found all data
    statusNotFound: (res, result) => {
        res.status(404).send({
            success: false,
            message: 'Data not found'
        })
    },

    // status server error
    statusErrorServer: (res, error) => {
        res.status(500).send({
            success: false,
            message: 'Internal Server Error!'
        })
    }
}