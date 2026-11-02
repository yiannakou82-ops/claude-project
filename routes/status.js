const express = require('express');

const router = express.Router();

router.get('/status', (req, res) => {
  const uptime = process.uptime(); // seconds
  res.json({
    status: 'ok',
    uptime,
    startedAt: new Date(Date.now() - uptime * 1000).toISOString(),
  });
});

module.exports = router;
