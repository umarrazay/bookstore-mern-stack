const express  = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors')

const { SERVER_PORT, MONGO_DB_URI } = require("./config.js")
const historybooksRoute = require('./routes/HistoryBookRoutes')
const programmingBookRoute = require('./routes/ProgrammingBookRoutes')


// middleware 

app.use(express.json())
app.use(cors())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})
  
// Api Routes

app.use('/api/historybooks' , historybooksRoute )
app.use('/api/programmingbooks' , programmingBookRoute )

// DB Connection

mongoose.connect(MONGO_DB_URI)
    .then(()=> {
        app.listen(SERVER_PORT , ()=>{
            console.log(`DB Connections Establishesd Successfully & Server Running at ${SERVER_PORT}`);
        })
    })
    .catch((error)=>{
        console.log(error)
    })
