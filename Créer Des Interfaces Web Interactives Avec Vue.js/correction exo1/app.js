const options = {
  data() {
    return {
      recipes: [],
      recipe: {},
    };
  },
  methods: {
    createRecipe() {
      this.recipe.id = Date.now();
      this.recipes.unshift(this.recipe);
      this.recipe = {};
    },
    deleteRecipe(recipe) {
      const newRecipes = this.recipes.filter((r) => {
        return recipe.id != r.id;
      });

      this.recipes = newRecipes;
    },
  },
};

Vue.createApp(options).mount("#app");
