const CocktailByIngredientForm = {
  data() {
    return {
      ingredients: [],
      selected: "",
      cocktailsWithIds: [],
      hasError: false,
    };
  },

  // pour tester si on a selectionné un élément de la liste déroulante
  computed: {
    isValid() {
      return this.selected != null && this.selected != "";
    },
  },

  methods: {
    // si this.isValid est faux, on fait un return pour ne pas exécuter la suite (le fetch)
    getCocktailsFromIngredient() {
      this.hasError = false;
      if (!this.isValid) {
        this.hasError = true;
        return;
      }

      // récupère les cocktails basé sur l'ingrédient mais avec une partie des données d'un cocktail
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

            // permet de récuprer toutes les données d'un cocktail grâce à son id
            // on parcours donc le tableau cocktailsWithIds qui contient les cocktails qu'on veut afficher par la suite
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
      // on remet les datas à 0 (sauf hasError qui doit rester false)
      this.ingredient = [];
      this.selected = "";
      this.cocktailsWithIds = [];
    },
  },

  mounted() {
    // récupère la liste des ingrédients de l'API
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

export default CocktailByIngredientForm;