const express = require ('express');
const controllerBasic = require ('../controllers/controllerBasic');
const controllerPosts = require ('../controllers/controllerPosts');

const router = express.Router();

router.route('/home')
    .get(controllerPosts.getPostCarousel);





module.exports = router;