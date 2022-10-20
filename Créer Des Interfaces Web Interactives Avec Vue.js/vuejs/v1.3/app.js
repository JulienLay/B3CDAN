console.log('coucou');

const option = {
    data(){
        return{
            firstname: "gaetan",
            name: "corin",
            age:{
                monage: "27"
            },
            message: "mon message",
            admin: true,
            pasadmin: false
        }
    }
};
let app = Vue.createApp(option);
app.mount('#app');
