// routes/index.mjs
import express from 'express';
import { get_landing } from '../controllers/landing.mjs';
import { submit_lead } from '../controllers/landing.mjs';

const router = express.Router();

/* GET home page. */
router.get('/', get_landing);
router.post('/', submit_lead);

export default router;
