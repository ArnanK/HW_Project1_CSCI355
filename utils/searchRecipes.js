const axios = require('axios');
require('dotenv').config();


async function searchRecipes(query) {
    const options = {
        method: 'GET',
        url: 'https://api.edamam.com/api/recipes/v2',
        params: {
            type: 'public',
            beta: 'false',
            q: query,
            app_id: process.env.APP_ID,
            app_key: process.env.APP_KEY
        }
    };
    
    const result = new Array();

    try {
        const response = await axios.request(options);
        const recipes = await response.data;
        const hits = recipes.hits;
        hits.forEach(hit => {
            result.push(hit)
        })
    } catch (error) {
        console.log(error);
    }
    return [result[0].recipe.label, result[1].recipe.label, result[2].recipe.label]
}


module.exports = searchRecipes;