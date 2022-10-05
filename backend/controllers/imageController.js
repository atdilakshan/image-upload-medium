const cloudinary = require('../middlewares/cloudinary');

const Image = require('../models/imageSchema'); // require imageSchema

exports.addNew = async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path);

        // create new document(image)
        const image = await Image({
            name: req.body.name,
            img: {
                public_id: result.secure_url,
                secure_url: result.public_id
            }
        })
        // save document(user)
        await image.save();
        res.json(image);

    } catch (error) {
        res.send(error);
    }
};