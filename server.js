const express = require('express')
const app = express();
const dbConfig = require('./db')
const userRouter = require('./routes/userRoute')
const roomsRoute = require("./routes/roomsRoutes")
const bookingsRoute = require("./routes/bookingsRoute")
const cors = require('cors')

const port = process.env.PORT || 5000;
app.use(cors())
app.use(express.json())
app.use('/api/users',userRouter)
app.use('/api/bookings',bookingsRoute)
app.use("/api/rooms", roomsRoute);

app.listen(port, () => console.log(`Server listening on port ${port}`));