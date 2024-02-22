const axios = require('axios');
require('dotenv').config();


/**
 * The function `searchRecipes` asynchronously fetches recipes from the Edamam API based on a query and
 * returns an array of parsed recipe data.
 * @param query - The `searchRecipes` function you provided is an asynchronous function that searches
 * for recipes based on a query using the Edamam API. It makes a GET request to the API endpoint with
 * the specified query and API credentials.
 * @returns The `searchRecipes` function is returning an array of recipe data objects after making a
 * GET request to the Edamam API with the provided query. The function fetches recipes based on the
 * query, parses the data for each recipe hit, and pushes the parsed data into the `result` array.
 * Finally, it logs the `result` array and returns it.
 */
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
            let data = parseData(hit)
            result.push(data)
        })
    } catch (error) {
        console.log(error);
    }
    console.log(result)
    return result
}

/**
 * The function `parseData` extracts specific data from a response object obtained from an API related
 * to a recipe and returns it in a structured object format.
 * @param hit - The `hit` parameter in the `parseData` function represents the response data from an
 * API. It contains information about a recipe, such as the recipe label, URL, image, calories, protein
 * content, carbohydrate content, and fat content. The function extracts this information from the
 * `hit` object
 * @returns The `parseData` function is returning an object with properties such as name, url, image,
 * calories, protein, carbs, and fat extracted from the `hit` object which is the response data from an
 * API.
 */
//hit is defined as the response data from API
function parseData(hit){
    let obj = new Object();
    obj.name = hit.recipe.label;
    obj.url = hit.recipe.url;
    obj.image = hit.recipe.image;
    obj.calories = Math.round(hit.recipe.calories);
    obj.protein = Math.round(hit.recipe.totalNutrients['PROCNT']['quantity']);
    obj.carbs = Math.round(hit.recipe.totalNutrients['CHOCDF']['quantity']);
    obj.fat = Math.round(hit.recipe.totalNutrients['FAT']['quantity'])
    return obj;
}


module.exports = searchRecipes;