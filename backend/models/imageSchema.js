const mongoose = require("mongoose");

const collectionName = "image"; // collection Name image is pluralized(images)

const imageSchema = new mongoose.Schema({
    name: {
        type: 'string',
    },
    img: {
        public_id: {
            type: 'string',
        },
        secure_url: {
            type: 'string',
        }
    },
});

module.exports = mongoose.model(collectionName, imageSchema);