import express from 'express'
const Router = express.Router()
import { Account } from '../controllers'


//Routes
    //Create account
        Router.post('/account/create', Account.Create)

    //Delete account
        Router.post('/account/delete', Account.Delete)

    //Read accounts
        Router.get('/account/read', Account.Read)









//Export
    export { Router }