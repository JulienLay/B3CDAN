let App = {
    template: `<div>
    <h1>App</h1>

    <router-link to="/">Go to Home</router-link>
    <br>
    <router-link to="/about">Go to About</router-link>

    <router-view></router-view>
    </div>`,
};

export default App;