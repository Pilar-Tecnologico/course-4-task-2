const mongoose = require("mongoose");
const { Schema } = mongoose;

const ManifestSchema = new Schema({
    name: { type: String, required: true }, // ej: "Curiosity"
    landing_date: { type: Date, required: true }, // ej: "2012-08-06"
    launch_date: { type: Date, required: true }, // ej: "2011-11-26"
    status: { type: String, required: true }, // ej: "active"
    max_sol: { type: Number, required: true }, // ej: 3394
    max_date: { type: Date, required: true }, // ej: "2022-02-22"
    total_photos: { type: Number, required: true }, // ej: 549788
    last_manifest: {
        type: { type: String, type: Array },
        sol: { type: Number, required: true }, // ej: 3394
        earth_date: { type: Date, required: true }, // ej: "2022-02-22"
        total_photos: { type: Number, required: true }, // ej: 17
        // cameras: [ { type: String, required: true } ], // ej: [NAVCAM]
        cameras: [ { type: String, required: true } ], // ej: [NAVCAM]
    },
});

module.exports = mongoose.model("Manifest", ManifestSchema);
