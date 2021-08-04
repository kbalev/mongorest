const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
    watched: {
        type: String,
        default: 'Not watched'
    },
    user: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
})

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;