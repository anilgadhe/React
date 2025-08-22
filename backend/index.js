const express = require("express");
const multer = require("multer");
const cors = require("cors")
const path= require("path")
const app = express();


app.use(express.urlencoded({ extends: false }));
app.use(express.json());
app.use(cors());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads')
    },
    filename: function (req, file, cb) {

         cb(null, Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({ storage: storage })

app.post("/upload", upload.single('file'), (req, res) => {
    console.log("File uploaded:", req.file);
    res.json({
        message: "File uploaded successfully",
        filename: req.file.filename,
        filePath: `/uploads/${req.file.filename}`
    });
})


app.listen(8000, () => {
    console.log("server is on 8000");

})
