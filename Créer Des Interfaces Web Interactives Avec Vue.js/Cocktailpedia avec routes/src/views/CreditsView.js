const CreditsView = {
  name: "CreditsView",
  template: `<h1>Les outils qui m'ont permis de réaliser cette application : </h1>,
  <ul>
    <li>L'utilisation de Vue.js et de sa <a href="https://vuejs.org/guide/introduction.html" target="_blank">documentation</a></li>
    <li>Un framework CSS  <a href="https://andybrewer.github.io/mvp/" target="_blank">MVP.css</a></li>
    <li>Une API gratuite et sans authentification <a href="https://www.thecocktaildb.com/api.php" target="_blank">TheCocktailDB</a></li>
    <li>L'utilisation de Vue Router et de sa <a href="https://router.vuejs.org/introduction.html" target="_blank">documentation</a></li>
  </ul>

  <i>PS : Essayez de changer la fin de l'URL pour consulter la page 404 😱<i>

  <div id="outils">
    <img src="https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png"/>
    <img src="https://www.thecocktaildb.com/images/logo.png"/>
    <img src="https://andybrewer.github.io/mvp/img/logo.png"/>
  </div>
  `,
};

export default CreditsView;
