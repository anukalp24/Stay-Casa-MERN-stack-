const multer =  require("multer")

const upload = multer({
    dest: "uploads/"
})

module.exports = upload
// multer overview:- 1. multer creates multer object
//    upload.single() returns middleware function
//    that middleware separates req.body and req.file ✅

// 2. file saved in uploads folder by multer
//    filename generated automatically ✅

// 3. you build URL string with that filename
//    save it in MongoDB ✅

// 4. express.static makes uploads folder public
//    browser can access files via URL ✅

// 5. frontend puts URL in <img src />
//    browser fetches image from backend ✅