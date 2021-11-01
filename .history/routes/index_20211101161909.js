const express = require("express")
const router = express.Router()


app.get('/', (req, res) => {
    res.json({ success: true })
})

module.exports = router