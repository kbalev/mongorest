const Movie = require('./movies.model');

exports.createMovie = async (req, res) => {
    try {
        const movie = new Movie(req.body)
        const savedMovie = await movie.save();
        res.status(200).send({
            movie: savedMovie,
            message: 'Movie created in database.'
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.findUnwatched = async (req, res) => {
    try {
        const targetMovies = await Movie.find({
            watched: "Not watched"
        })
        res.status(200).send({
            targetMovies
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.listAllMovies = async (req, res) => {
    try {
        const targetMovies = await Movie.find()
        res.status(200).send({
            targetMovies
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.findByUser = async (req, res) => {
    try {
        const user = req.params.user
        const targetUser = await Movie.find({
            user: user
        })
        res.status(200).send({
            targetUser
        })
    } catch (error) {
        res.status(500).send(error)
    }
}

exports.updateWatchStatus = async (req, res) => {
    try {
        const userInput = {
            user: req.body.user,
            title: req.body.title
        }
        await Movie.findOneAndUpdate(userInput, {watched: "Finished"}, (err, movie)=>{
            if (err) res.status(500).send(error);
            res.status(200).send({message: `You have set the status of ${movie.title} to finished`})
        })
    } catch (error) {
        res.status(500).send(error)
       
    }
}

exports.removeMovie = async (req, res) => {
    try {
        const userInput = {
            user: req.body.user,
            title: req.body.title
        }
        await Movie.findOneAndRemove(userInput, (err, movie)=>{
            if (err) res.status(500).send(error);
            res.status(200).send({message: `You have removed ${movie.title} from your list`})
        })
    } catch (error) {
        res.status(500).send(error)
       
    }
}