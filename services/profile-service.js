let profile = require('../data/profile.json');

module.exports = (app) => {
    const findProfile = (req, res) => {
        res.json(profile);
    }
    const updateProfile = (req, res) => {
        const newData = req.body;
        const newProfile = {
            "firstName": newData.firstName,
            "lastName": newData.lastName,
            "handle": "beyonce",
            "profilePicture": "../.../.../images/bey.jpeg",
            "bannerPicture": "../../../images/sunset-colors.jpeg",
            "bio": newData.bio,
            "website": newData.website,
            "location": newData.location,
            "dateOfBirth": newData.date,
            "dateJoined": "Apr 2009",
            "followingCount": "512",
            "followersCount": "4,515,610",
            "tweetsCount": "5,196"
        };
        profile = newProfile;
        res.json(newProfile);

    }
    app.put('/api/profile', updateProfile);
    app.get('/api/profile', findProfile);
};
