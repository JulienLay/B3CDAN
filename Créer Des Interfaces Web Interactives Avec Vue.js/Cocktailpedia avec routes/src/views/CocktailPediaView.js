import CocktailByIngredientForm from "../components/CocktailByIngredientForm.js";
import CocktailByNameForm from "../components/CocktailByNameForm.js";
import CocktailDescription from "../components/CocktailDescription.js";
import RandomCocktailForm from "../components/RandomCocktailForm.js";

const CocktailPediaView = {
  name: "CocktailPediaView",
  template: `<div>
  <random-cocktail-form @generate="setCocktails" @random="setCocktails"></random-cocktail-form>

    <cocktail-by-ingredient-form @generate="setCocktails"></cocktail-by-ingredient-form>

    <cocktail-by-name-form @generate="setCocktails"></cocktail-by-name-form>

    <h1>{{cocktails != null ? cocktails.length : 0}} résultat{{cocktails != null && cocktails.length > 1 ? "s" : ""}}
    </h1>

    <div id="cocktails">
      <p v-if="cocktails==null">
        😔<i>Votre recherche n'a donné aucun résultat...</i>😔
      </p>

      <cocktail-description v-else v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail">
      </cocktail-description>
    </div>

    <p v-if="cocktails!=null && cocktails.length==0">
      <i>Vous n'avez pas encore recherché de cocktail.</i>
    </p>
    </div>
  `,
  data() {
    return {
      cocktails: [],
    };
  },

  methods: {
    // permet de récuperer le tableau de chaque composant avec ce qu'il fait et de l'afficher
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

export default CocktailPediaView;
