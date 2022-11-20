const RandomCocktailForm = {
    data() {
        return {
            nonAlcoholicCocktails : [],
            randomNonAlcoholicCocktail : {},
        }
    },

    methods : {
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
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic").then(
            (response) => {
                response.json().then((data) => {
                    this.nonAlcoholicCocktails = data.drinks;
                });
            })

            this.randomNonAlcoholicCocktail = this.nonAlcoholicCocktails[Math.floor(Math.random() * this.nonAlcoholicCocktails.length)];


            console.log(this.randomNonAlcoholicCocktail.idDrink);

            fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.randomNonAlcoholicCocktail.idDrink).then(
                        (response) => {
                        response.json().then((data) => {
                            this.$emit("aaa", data.drinks);
                        });
                        });

        }
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
            ingredients : [],
            selected : "",
            cocktailsBasedOnIngredient : [],
            cocktailIds : [],
            cocktailsWithIds : []
        }
    },

    methods: {
        getCocktailsFromIngredient() {
            fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?i="+this.selected).then(
            (response) => {
                response.json().then((data) => {
                    if (data.drinks.length == 0) {
                        window.alert("Pas de cocktail pour cet ingrédient !");
                    }

                    cocktailsBasedOnIngredient = data.drinks;

                    console.log(cocktailsBasedOnIngredient);

                    for (let i=0; i<cocktailsBasedOnIngredient.length; i++) {
                            this.cocktailIds.push(cocktailsBasedOnIngredient[i].idDrink);
                    } 

                    for (let i=0; i<this.cocktailIds.length; i++) {
                        fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+this.cocktailIds[i]).then(
                        (response) => {
                        response.json().then((data) => {
                            this.cocktailsWithIds.unshift(data.drinks[0]);
                        });
                        });
                    }     

                    this.$emit("generate", this.cocktailsWithIds);
                });
            }
        );
        this.ingredient = [];
        this.selected = "";
        this.cocktailsBasedOnIngredient = [];
        this.cocktailIds = [];
        this.cocktailsWithIds = [];
        }
    },

    mounted() {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list").then(
            (response) => {
                response.json().then((data) => {
                    this.ingredients = data.drinks;
                });
            }
        );
    },

    template: `<form  @submit.prevent="getCocktailsFromIngredient">
    <h3>🍹 Trouver un cocktail à base de :</h3>

    <select name="ingredients" id="ingredients" v-model="selected" >
        <option disabled value="">--Choisissez un ingrédient--</option>
        <option v-for="ingredient in ingredients" :key="ingredient.strIngredient1" :value="ingredient.strIngredient1">{{ingredient.strIngredient1}}</option>
    </select>

    <button type="submit">Rechercher</button>
  </form>`
};

const CocktailByNameForm = {

    data() {
      return {
        search : null,
      };
    },

    methods: {
        generateByName() {

            fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+this.search).then(
            (response) => {
                response.json().then((data) => {
                    this.$emit("generate", data.drinks);
                });
            });
        }
    },
    
    template: `<form @submit.prevent="generateByName">
    <h3>🧐 Rechercher un cocktail</h3>
  
    <input placeholder="Nom" type="text" id="name" v-model="search" required/>
  
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
        <li v-for="ingredient in ingredients">{{ingredient.name}} ({{ingredient.measure}})</li>
      </ul>
  </form>`,

  computed: {
    ingredients() {
        let ingredients = [];
        for(let i=1; i<=15; i++) {
            let ingredient = this.cocktail["strIngredient"+i];
            let measure = this.cocktail["strMeasure"+i];
            if (ingredient) {
                ingredients.push({name: ingredient, measure});
            }
        }
        return ingredients;
    } 
  }
};
  
  const options = {
    data() {
      return {
        cocktails : [],
      };
    },
    
    methods: {
        setCocktails(cocktails) {
            this.cocktails = cocktails;
        },
    },

    components : {
        RandomCocktailForm,
        CocktailByIngredientForm,
        CocktailByNameForm,
        CocktailDescription
    },
};
  
Vue.createApp(options).mount("#app");