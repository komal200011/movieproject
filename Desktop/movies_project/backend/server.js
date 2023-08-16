const express = require('express');
const cors = require('cors');
const axios = require('axios');
const app = express();
require('dotenv').config();

// Use the cors middleware
app.use(cors());

const TMDB_API_KEY = process.env.TMDB_API_KEY;
console.log(TMDB_API_KEY)
app.get('/api/movies', async (req, res) => {
    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}`
        );
        res.json(response.data.results);
    } catch (error) {
        console.error('Error fetching movies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.get('/api/search', async (req, res) => {
    const query = req.query.query; // Get the query parameter from the request

    try {
        const response = await axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${query}`
        );
        res.json(response.data.results);
    } catch (error) {
        console.error('Error searching movies:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
