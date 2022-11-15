const App = {
  template: `<main>
      <h1>App</h1>

      <router-link :to="{ name: 'contact' }">Contact</router-link>

      <router-view></router-view>
      </main>`,
};

export default App;
