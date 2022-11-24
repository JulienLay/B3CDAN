const CocktailDescription = {
  props: ["cocktail"],
  template: `<form id="cocktail">
    <img :src="cocktail.strDrinkThumb">
    <h3>{{cocktail.strDrink}}</h3>
    <span class="badge">{{ cocktail.strAlcoholic }}</span>
    <p>Type : {{cocktail.strCategory}}</p>
    <p>Ingrédients :</p>
    <ul>
    <li v-for="ingredient in ingredients">{{ingredient.name}} <template v-if="ingredient.measure">({{ingredient.measure.trim()}})</template></li>
    </ul>
    </form>`,

  // permet de retourner le tableau avec tous les ingrédients qui ne sont pas null pour un cocktail
  // le but est de faire un affichage seulement des ingrédients qui ne sont pas à null
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

export default CocktailDescription;