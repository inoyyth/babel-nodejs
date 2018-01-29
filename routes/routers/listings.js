import express from 'express';
const router = express.Router();
import {findAllListings, findListingById} from '../../controllers/listings';

/* GET users listing. */
router.get('/', findAllListings);

router.get('/:id', findListingById);

//module.exports = router;

export default router;
