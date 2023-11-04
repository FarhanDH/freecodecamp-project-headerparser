const path = require('path');

const homePage = (req, res) => {
    const indexPath = path.join(__dirname, '../../views/index.html');
    res.sendFile(indexPath);
};

const headerParser = (req, res) => {
    // const languange = req.headers.accept-language
    res.json({
        ipaddress: req.ip,
        language: req.headers['accept-language'],
        software: req.headers['user-agent'],
    });
};

module.exports = { homePage, headerParser };
