import express from 'express'
const server = express()
import { Router } from './routes/routes'


//Configurations
    //Express parser
        server.use(express.json())


//Routes
    server.use(Router)    


    







//Export
    export { server }