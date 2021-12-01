const dao = require('../profile/profile-dao')

module.exports = (app) => {
    const findProfile = (req, res) =>
        dao.findProfiles()
            .then(profile => res.json(profile));

    const updateProfile = (req, res) =>{
        console.log(req.body);
        dao.updateProfile(req.params.id , req.body)
            .then(profile => res.json(profile));
    }




    app.put('/rest/profile/:id', updateProfile);
    app.get('/rest/profile', findProfile);
};
