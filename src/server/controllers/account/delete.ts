import { RequestHandler } from "express"
import { DATABASE_ACTIONS } from "../../database"


//Middleware
    //Delete
        export const Delete: RequestHandler = async(req, res) => {
            const { id } = req.body

            const Account: DATABASE_ACTIONS = new DATABASE_ACTIONS('N/A', 'N/A', 'N/A')

            Account.Delete(id)

            return res.status(201).json({
                result: true
            })
        }