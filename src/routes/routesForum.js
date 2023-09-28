import { Router } from "express";
import { postForum, DeleteForum, getForumApi, putForum, getAbout, getContact, getForum, getIndex } from "../controllers/foro.controllers.js";
import { createForumSchema, editForumSchema } from "../models/schemas/foro.schema.js";
import { validator } from "../middlewares/validator.js"
import { ForoModel } from "../models/Foro.js";

const routerForum = Router();

routerForum.get('/', getIndex)

routerForum.get('/about', getAbout)

routerForum.get('/contact', getContact)

routerForum.get('/foro', getForum)

routerForum.get('/api/foro', getForumApi);

routerForum.post('/api/foro', createForumSchema, validator, postForum);

routerForum.put('/api/foro/:id', editForumSchema, validator, putForum);

routerForum.delete('/api/foro/:id',DeleteForum);

export { routerForum }