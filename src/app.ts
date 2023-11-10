require('dotenv').config()

import { server } from './server/server'
import express from 'express'
const app: express.Express = express()


//Configurations
    app.use(server)







//Server
    app.listen(process.env.PORT, () => {
        console.log('Server as listen in port: ' + process.env.PORT)
    })