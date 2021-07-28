const {Router} = require('express');
const { createMovie, findUnwatched, findByUser, listAllMovies, updateWatchStatus, removeMovie } = require('./movies.controllers');
const movieRouter = Router();

movieRouter.post('/movies', createMovie);
movieRouter.get('/movies/unwatched', findUnwatched);
movieRouter.get('/movies/:user', findByUser);
movieRouter.get('/movies', listAllMovies);
movieRouter.put('/movies', updateWatchStatus)
movieRouter.delete('/movies', removeMovie)

module.exports = movieRouter;