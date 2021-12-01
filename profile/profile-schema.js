const mongoose = require('mongoose');
const schema = mongoose.Schema({
    firstName: String,
    lastName: String,
    handle: String,
    profilePicture: String,
    bannerPicture: String,
    bio: String,
    location: String,
    dateOfBirth: String,
    dateJoined: String,
    followingCount: {type:Number, defaultValue: 512},
    followersCount: {type:Number, defaultValue: 610},
    tweetsCount: {type:Number, defaultValue: 196}
},{collection: "profiles"});

module.exports = schema;