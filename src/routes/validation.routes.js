import {Router} from 'express';
import {conn} from '../db/db.js';

const router = Router();
router.get('/sql', async (req,response) => { 
    const [result] = await conn.query('CALL GetDatesOfTeachers;');
    response.json(result);
});
export default router;