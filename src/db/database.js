const mongoose = require("mongoose");
const config = require("config");

const { DB_HOST, DB_DATABASE, DB_COLLECTION, DB_USER, DB_PASSWORD } = config.get("database.mongodb");
//console.log(DB_HOST, DB_DATABASE, DB_COLLECTION, DB_USER, DB_PASSWORD);

// URL {HOT}/ {USER}:{PASSWORD} @{DB}.mongodb.net/{COLLECTION}?retryWrites=true&w=majority
const MONGODB_URI=`${DB_HOST}/${DB_USER}:${DB_PASSWORD}@${DB_DATABASE}.mongodb.net/${DB_COLLECTION}?retryWrites=true&w=majority`


mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));