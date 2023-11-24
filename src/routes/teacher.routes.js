import {Router} from 'express';
import { AddTeacher, DropTeacher, GetTeacher, UpdateTeacher } from '../controller/procedure.controller.js';

const router = Router();
router.get('/employee/:_user', GetTeacher );
router.delete('/employee/:_code', DropTeacher );
router.patch('/employee/:_code', UpdateTeacher );
router.put('/employee', AddTeacher );
export default router;