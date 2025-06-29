const os = require('os');
const https = require('https');

function trackUsage() {
  const data = JSON.stringify({
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    timestamp: new Date().toISOString()
  });

  const options = {
    hostname: 'script.google.com',
    path: '/macros/s/AKfycbzMlOYKUOnDSiJH3Bth3ohBw0_uMaLHMbOjuWABCb6aOHtJDwgkzRWQdRMaOaj9ddwE/exec',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Content-Length': data.length
    }
  };

  const req = https.request(options, (res) => {
    res.on('data', () => {}); // biar gak error
  });

  req.on('error', (e) => {
    // Boleh di-log atau diamkan
  });

  req.write(data);
  req.end();
}

trackUsage();
