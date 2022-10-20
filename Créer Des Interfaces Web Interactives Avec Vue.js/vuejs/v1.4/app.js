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
            users: ["pierre", "antoine", "lucas"]
        }
    }
};
let app = Vue.createApp(option);
app.mount('#app');
