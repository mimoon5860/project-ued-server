import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import userServices from "../services/userServices";

class userController {
    private userServices = new userServices();

    //Search an user by phone controller
    public searchAnUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ success: false, errors: errors.array() });
            } else {
                const data = await this.userServices.searchAnUser(req);
                if (data.success) {
                    res.status(200).json(data);
                } else {
                    res.status(404).json(data);
                }

            }
        } catch (err) {
            next(err);
        }
    }


    // get an user controller 
    public getAnUser = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                res.status(400).json({ success: false, errors: errors.array() });
            } else {
                const data = await this.userServices.getAnUserService(req);
                if (data.success) {
                    res.status(200).json(data);
                } else {
                    res.status(403).json(data);
                }
            }
        } catch (err) {
            next(err);
        }
    }


}
export default userController;