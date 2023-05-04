const cloudinary = require('./config')

const uploadImg = async (img, publicId) => {

    const res = cloudinary.uploader.upload(img, {public_id: publicId})

    res.then((data) => {
      console.log(data);

      console.log("URL: ", data.secure_url);
      return data.secure_url;
    }).catch((err) => {
      console.log(err);
    });
}

module.exports = uploadImg;