import { RequestHandler } from "express"
import { DATABASE_ACTIONS } from "../../database"


//Middleware
    //Read
        export const Read: RequestHandler = async(req, res) => {
            const Account = new DATABASE_ACTIONS('N/A', 'N/A', 'N/A')
            
            return res.status(201).json({
                result: true,
                results: Account.Read()
            })
        }