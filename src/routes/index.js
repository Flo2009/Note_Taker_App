const router = require('express').Router();

// Import our modular routers for /notes 
const noteRouter = require('./notes');


router.use('/notes', noteRouter);


module.exports = router;