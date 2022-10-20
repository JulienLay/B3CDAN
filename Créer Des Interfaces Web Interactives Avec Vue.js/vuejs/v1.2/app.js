console.log('coucou');

const option = {
    data(){
        return{
            firstname: "gaetan",
            name: "corin",
            age:{
                monage: "27"
            },
            message: "mon message"
        }
    }
};
let app = Vue.createApp(option);
app.mount('#app');
