const mongoose = require('mongoose')

const Schema = mongoose.Schema

const manifestSchema = new Schema({
  name:  String,
  landing_date: Date,
  launch_date: Date,
  status: String,
  max_sol: Number,
  max_date: Date,
  total_photos: Number,
  last_manifest: {
    sol: Number,
    earth_date: Date,
    total_photos: Number,
    cameras: []
  }
})

const Manifest = mongoose.model('Manifest', manifestSchema)
module.exports = Manifest
