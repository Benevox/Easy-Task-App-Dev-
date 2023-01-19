require("dotenv").config();
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const date = require('date-and-time');
const connection = require('./database/db');
const home = require('./routes/homes');
const userRoute = require('./routes/users');
const authRoute = require('./routes/auth');
const customerJobRoute = require('./routes/customerJobPosts');
const taskerJobRoute = require('./routes/taskerJobPost');
const categoryRoute = require('./routes/categories');
const skillCategoryRoute = require('./routes/skillCategories');
const multer = require("multer");

dotenv.config();

// DATABASE CONNECTION
connection();

// USE CASES
// mongoose.set('strictQuery', true);
app.use(express.json());
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));

// STORAGE
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/assets/profilePics");
    },
    filename: (req, file, cb) => {
        cb(null, req.body.name);
    },
});

const upload = multer({storage: storage});
app.post("/api/upload/profile_pic", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
});

// ROUTES
app.use('/', home);
app.use('/api/auth/', authRoute);
app.use('/api/user/', userRoute);
app.use('/api/customer/', customerJobRoute);
app.use('/api/tasker/', taskerJobRoute);
app.use('/api/user/category/', categoryRoute);
app.use('/api/skills/category/', skillCategoryRoute);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));