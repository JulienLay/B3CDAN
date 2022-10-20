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
            pasadmin: false,
            users: ["pierre", "antoine", "lucas"],
            email: "gaetancorin@hotmail.fr",
            url: "https://www.ecole-ipi.com"
        }
    }
};
let app = Vue.createApp(option);
app.mount('#app');
