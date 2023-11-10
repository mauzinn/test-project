import { RequestHandler } from "express"
import { DATABASE_ACTIONS } from "../../database"


//Middleware
    //Create
        export const Create: RequestHandler = async(req, res) => {
            const { email, name, password } = req.body

            const CreateAccount: DATABASE_ACTIONS = new DATABASE_ACTIONS(email, name, password)
            CreateAccount.Create()

            return res.status(201).json({
                result: true
            })
        } 