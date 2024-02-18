const axios = require('axios');
const fs = require('fs');
require('dotenv').config();

async function searchRecipes() {
  const axios = require('axios');

  const options = {
    method: 'GET',
    url: 'https://tasty.p.rapidapi.com/recipes/list',
    params: {
      from: '0',
      size: '3',
      tags: 'under_30_minutes'
    },
    headers: {
      'X-RapidAPI-Key': process.env.RAPIDAPIKEY,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com'
    }
  };
  
  try {
    const response = await axios.request(options);
    const recipes = response.data.results
    // console.log(recipes)
    let healthyRecipes = []
    
    let BreakException = {}

    recipes.forEach(recipe => {
      if (healthyRecipes.length === 3) throw BreakException
      if (recipe.keywords && recipe.keywords.includes("healthy")) {
        healthyRecipes.push(recipe)
      }
    });

    console.log(healthyRecipes)
    // const dataStr = JSON.stringify(recipes, null, 2);

    // fs.writeFile('recipes.json', dataStr, (err) => {
    //   if (err) throw err;
    //   console.log('Recipes saved to recipes.json')
    // });


    } catch (error) {
    console.error(error);
  }

}

searchRecipes();