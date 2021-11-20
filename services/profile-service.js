const profile = require('../data/profile.json');

module.exports = (app) => {
    const findProfile = (req, res) => {
        res.json(profile);
    }
    app.get('/api/profile', findProfile);
};
