const express = reqiure("express")
const cors = reqiure("cors")

const PORT = process.env.PORT || 5000

const app = express()

app.use(cors())

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));