const MainMenu = {
  template: `
  <header>
  <nav>
  <router-link to="/">Vue Router</router-link>
    <ul>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link :to="{ name: 'contact' }">Contact</router-link></li>
    </ul>
  </nav>
</header>
    `,
};

export default MainMenu;
