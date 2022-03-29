const mongoose = require ('mongoose');

const lastManifestSchema = new mongoose.Schema({
    sol: {
        type: Number,
        required: true,
    },
    earth_date: {
        type: Date,
        required: true,
    },
    total_photos: {
        type: Number,
        required: true,
    },
    cameras: {
        type: [String],
        required: true,
    }
})

const marsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    landing_date: {
        type: String,
        required: true,
    },
    launch_date: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        required: true,
    },
    max_sol: {
        type: Number,
        required: true,
    },
    max_date: {
        type: String,
        required: true,
    },
    total_photos: {
        type: Number,
        required: true,
    },
    photos: {
        type: [lastManifestSchema],
        
    }    
});

const Mars = mongoose.model('Mars', marsSchema); 

module.exports = Mars;