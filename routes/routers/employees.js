import express from 'express';
const router = express.Router();
import { findAllEmployees, findEmployeeById } from '../../controllers/employees';

/* GET users listing. */
router.get('/', findAllEmployees);

router.get('/:id', findEmployeeById);

//module.exports = router;

export default router;
