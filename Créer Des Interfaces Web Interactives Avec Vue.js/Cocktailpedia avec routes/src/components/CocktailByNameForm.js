const CocktailByNameForm = {
  data() {
    return {
      search: null,
      hasError: false,
    };
  },

  // pour tester si on a un élément qui a été entré dans le champ du formulaire
  computed: {
    isValid() {
      return this.search != null && this.search != "";
    },
  },

  methods: {
    // si this.isValid est faux, on fait un return pour ne pas exécuter la suite (le fetch)
    generateByName() {
      this.hasError = false;
      if (!this.isValid) {
        this.hasError = true;
        return;
      }
      // on recherche un cocktail par son nom
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

export default CocktailByNameForm;