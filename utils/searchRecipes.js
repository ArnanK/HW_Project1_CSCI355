const axios = require('axios');
require('dotenv').config();

async function searchRecipes() {
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/recipes/v2',
        params: {
            type: 'public',
            beta: 'false',
            q: 'chicken soup',
            app_id: process.env.APP_ID,
            app_key: process.env.APP_KEY
        }
    };

    try {
        const response = await axios.request(options);
        const recipes = await response.data;
        console.log(recipes);
        const hits = recipes.hits;
        hits.forEach(hit => {
            console.log(hit)
        })
    } catch (error) {
        console.log(error);
    }
}

searchRecipes();