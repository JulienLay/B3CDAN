const RecipeForm = {
  data() {
    return {
      recipe: {},
    };
  },
  emits: ["create"],
  methods: {
    createRecipe() {
      this.recipe.id = Date.now();
      this.$emit("create", this.recipe);
      this.recipe = {};
    },
  },
  template: `<form @submit.prevent="createRecipe">
  <h3>Créer une recette</h3>

  <label for="name">Nom</label>
  <input type="text" id="name" v-model="recipe.name" required />

  <label for="ingredients">Ingrédients</label>
  <textarea
    id="ingredients"
    v-model="recipe.ingredients"
    required
  ></textarea>

  <label for="preparation">Préparation</label>
  <textarea
    id="preparation"
    v-model="recipe.preparation"
    required
  ></textarea>

  <label for="time">Temps de préparation (en min.)</label>
  <input type="number" id="time" v-model="recipe.time" required />

  <label for="persons">Nombre de personnes</label>
  <input type="number" id="persons" v-model="recipe.persons" required />

  <button type="submit" :disabled="!this.recipe.name">Créer</button>
</form>`,
};

const Recipes = {
  props: ["recipes"],
  emits: ["remove"],
  methods: {
    deleteRecipe(recipe) {
      this.$emit("remove", recipe);
    },
  },
  template: ` <div v-for="recipe in recipes" :key="recipe.id">
  <h4>{{ recipe.name }}</h4>

  <ul>
    <li>Temps de préparation : {{ recipe.time }} min</li>
    <li>Nombre de personnes : {{ recipe.persons }}</li>
  </ul>

  <p>{{ recipe.ingredients }}</p>

  <p>{{ recipe.preparation }}</p>

  <a href="#" @click.prevent="deleteRecipe(recipe)"><i>Supprimer</i></a>
</div>`,
};

const options = {
  data() {
    return {
      recipes: [],
    };
  },
  methods: {
    createRecipe(recipe) {
      this.recipes.unshift(recipe);
    },
    deleteRecipe(recipe) {
      const newRecipes = this.recipes.filter((r) => {
        return recipe.id != r.id;
      });

      this.recipes = newRecipes;
    },
  },
  components: { RecipeForm, Recipes },
};

Vue.createApp(options).mount("#app");
