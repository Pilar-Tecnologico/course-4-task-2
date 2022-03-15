const {Schema, model} = require("mongoose");

const ManifestSchema = new Schema({
        "name"          : String,
        "landing_date"  : String,
        "launch_date"   : String,
        "status"        : String,
        "max_sol"       : Number,
        "max_date"      : String,
        "total_photos"  : Number,
        "last_manifest" : Object
     }, {
    timestamps : false
});

module.exports = model("Manifest", ManifestSchema);