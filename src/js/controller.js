import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable'; //polyfilling other things
import 'regenerator-runtime/runtime'; //polyfilling async/await

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;

    recipeView.renderSpinner();

    await model.loadRecipe(id);

    recipeView.render(model.state.recipe);
  } catch (error) {
    console.error(error);
  }
};
controlRecipes();

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};

init();
