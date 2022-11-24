const RandomCocktailForm = {
  data() {
    return {
      nonAlcoholicCocktails: [],
      randomNonAlcoholicCocktail: {},
    };
  },

  methods: {
    // on génère un cocktail de manière aléatoire dans l'API
    generateRandomCocktail() {
      fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php").then(
        (response) => {
          response.json().then((data) => {
            this.$emit("generate", data.drinks);
          });
        }
      );
    },

    // retourne un cocktail sans alcool au hasard dans l'API
    generateRandomNonAlcoholicCocktail() {
      // récupère les cocktails sans alcool mais avec une partie des données d'un cocktail
      fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic"
      ).then((response) => {
        response.json().then((data) => {
          this.nonAlcoholicCocktails = data.drinks;

          // on prend un cocktail au hasard
          this.randomNonAlcoholicCocktail =
            this.nonAlcoholicCocktails[
              Math.floor(Math.random() * this.nonAlcoholicCocktails.length)
            ];

          // permet de emit les détails du cocktail avec l'id du cocktail pris au hasard précédemment
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

export default RandomCocktailForm;