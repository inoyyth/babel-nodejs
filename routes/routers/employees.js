import express from 'express';
const router = express.Router();
import { findAllEmployees } from '../../controllers/employees';

/* GET users listing. */
router.get('/', findAllEmployees);

//router.get('/:id', findListingById);

//module.exports = router;

export default router;
