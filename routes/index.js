const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {
        title: 'DevSecOps Showcase',
        user: req.user
    });
});

router.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Our Project',
        user: req.user
    });
});

module.exports = router;