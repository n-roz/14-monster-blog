const homeRoutes = require('./home-routes');
const router = require('express').Router();
router.use('/', homeRoutes);
