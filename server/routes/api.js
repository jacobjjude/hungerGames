const express = require('express');
const path = require('path');
const router = express.Router();

// Serve the React app for the root route
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

// Catch-all route to serve the React app
router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client/build', 'index.html'));
});

module.exports = router;