const profileModel = require('./profile-model');

const findProfiles = () =>
    profileModel.find();



const updateProfile = (id, update) =>
    // console.log("update:", update);
    profileModel.updateOne({_id: id},
        {$set: update});
;

const findProfileById = (id) =>
    profileModel.findById(id);

module.exports = {
    findProfiles, updateProfile, findProfileById
};