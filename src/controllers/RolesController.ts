import express from "express";
import { getRoles } from "../services/RolesService";


export const getAllRoles = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('rolesList.html', { roles: await getRoles() });
}