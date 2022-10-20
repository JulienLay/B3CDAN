console.log('coucou');

const option = {
    data(){
        return{
            firstname: "gaetan",
            name: "corin"
        }
    }
};
let app = Vue.createApp(option);
app.mount('#app');
