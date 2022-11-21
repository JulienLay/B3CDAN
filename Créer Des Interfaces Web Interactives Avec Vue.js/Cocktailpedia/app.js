const RandomCocktailForm = {
  data() {
    return {
      nonAlcoholicCocktails: [],
      randomNonAlcoholicCocktail: {},
    };
  },

  methods: {
    generateRandomCocktail() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
        (response) => {
          response.json().then((data) => {
            this.$emit("generate", data.drinks);
          });
        }
      );
    },

    generateRandomNonAlcoholicCocktail() {
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      ).then((response) => {
        response.json().then((data) => {
          this.nonAlcoholicCocktails = data.drinks;

          this.randomNonAlcoholicCocktail =
            this.nonAlcoholicCocktails[
              Math.floor(Math.random() * this.nonAlcoholicCocktails.length)
            ];

          fetch(
            "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
              this.randomNonAlcoholicCocktail.idDrink
          ).then((response) => {
            response.json().then((data) => {
              this.$emit("random", data.drinks);
            });
          });
        });
      });
    },
  },

  template: `<form  @submit.prevent="generateRandomCocktail">
    <h3>🎲 Trouver un cocktail au hasard</h3>
    
    <button type="submit">Surprend-moi 😏</button>
    <br>
    <a href="#" @click.prevent="generateRandomNonAlcoholicCocktail"><i>Sans alcool la fête est plus folle 🥳</i></a>
    </form>`,
};

const CocktailByIngredientForm = {
  data() {
    return {
      ingredients: [],
      selected: "",
      cocktailsWithIds: [],
      hasError: false,
    };
  },

  computed: {
    isValid() {
      return this.selected != null && this.selected != "";
    },
  },

  methods: {
    getCocktailsFromIngredient() {
      this.hasError = false;
      if (!this.isValid) {
        this.hasError = true;
        return;
      }

      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=" +
          this.selected
      ).then((response) => {
        response
          .json()
          .then((data) => {
            if (!data.drinks || data.drinks.length == 0) {
              this.$emit("generate", null);
              return;
            }

            let cocktailsBasedOnIngredient = data.drinks;

            let cocktailIds = [];

            for (let i = 0; i < cocktailsBasedOnIngredient.length; i++) {
              cocktailIds.push(cocktailsBasedOnIngredient[i].idDrink);
            }

            for (let i = 0; i < cocktailIds.length; i++) {
              fetch(
                "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" +
                  cocktailIds[i]
              ).then((response) => {
                response.json().then((data) => {
                  this.cocktailsWithIds.push(data.drinks[0]);
                });
              });
            }

            this.$emit("generate", this.cocktailsWithIds);
          })
          .catch((error) => {
            this.$emit("generate", null);
          });
      });
      this.ingredient = [];
      this.selected = "";
      this.cocktailsWithIds = [];
    },
  },

  mounted() {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
      (response) => {
        response.json().then((data) => {
          this.ingredients = data.drinks.sort((a, b) => {
            return a.strIngredient1.localeCompare(b.strIngredient1);
          });
        });
      }
    );
  },

  template: `<form  @submit.prevent="getCocktailsFromIngredient">
    <h3>🍹 Trouver un cocktail à base de :</h3>
    
    <select name="ingredients" id="ingredients" v-model="selected" >
    <option disabled value="">--Choisissez un ingrédient--</option>
    <option value="Ingrédient inconnu">Ingrédient inconnu</option>
    <option v-for="ingredient in ingredients" :key="ingredient.strIngredient1" :value="ingredient.strIngredient1">{{ingredient.strIngredient1}}</option>
    </select>
    <p v-if="hasError" style="color:red;">Vous devez selectionner un ingrédient à rechercher !</p>
    <button type="submit">Rechercher</button>
    </form>`,
};

const CocktailByNameForm = {
  data() {
    return {
      search: null,
      hasError: false,
    };
  },

  computed: {
    isValid() {
      return this.search != null && this.search != "";
    },
  },

  methods: {
    generateByName() {
      this.hasError = false;
      if (!this.isValid) {
        this.hasError = true;
        return;
      }
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" +
          this.search
      ).then((response) => {
        response.json().then((data) => {
          this.$emit("generate", data.drinks);
        });
      });
    },
  },

  template: `<form @submit.prevent="generateByName">
    <h3>🧐 Rechercher un cocktail</h3>
    
    <input placeholder="Nom" type="text" id="name" v-model="search"/>
    <p v-if="hasError" style="color:red;">Vous devez entrer le nom d'un cocktail à rechercher !</p>
    
    <button type="submit">Rechercher</button>
    </form>`,
};

const CocktailDescription = {
  props: ["cocktail"],
  template: `<form>
    <img :src="cocktail.strDrinkThumb">
    <h3>{{cocktail.strDrink}}</h3>
    <span class="badge">{{ cocktail.strAlcoholic }}</span>
    <p>Type : {{cocktail.strCategory}}</p>
    <p>Ingrédients :</p>
    <ul>
    <li v-for="ingredient in ingredients">{{ingredient.name}} <template v-if="ingredient.measure">({{ingredient.measure.trim()}})</template></li>
    </ul>
    </form>`,

  computed: {
    ingredients() {
      let ingredients = [];
      for (let i = 1; i <= 15; i++) {
        let ingredient = this.cocktail["strIngredient" + i];
        let measure = this.cocktail["strMeasure" + i];
        if (ingredient) {
          ingredients.push({ name: ingredient, measure });
        }
      }
      return ingredients;
    },
  },
};

const options = {
  data() {
    return {
      cocktails: [],
    };
  },

  methods: {
    setCocktails(cocktails) {
      this.cocktails = cocktails;
    },
  },

  components: {
    RandomCocktailForm,
    CocktailByIngredientForm,
    CocktailByNameForm,
    CocktailDescription,
  },
};

Vue.createApp(options).mount("#app");
