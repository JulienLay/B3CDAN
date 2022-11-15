const MonTitle = {
  props: ["tata"],
  template : 
  `
  <h1>To do list sur Vue.js avec Julien and Sylvain 😄</h1>
  <h3>Vous avez {{tata.length}} task(s).</h3>
  `
}

const Formulaire = {
  data() {
    return {
     task : {}
    };
  },
  emits: ["create"],
  methods: {
    createTask() {
      this.task.id = Date.now();
      this.$emit("create", this.task);
      console.log("task créée !");
      this.task = {};
    },
  },
  template : 
  `
  <form @submit.prevent="createTask">
  <input type="text" id="task" placeholder="Ajouter task" v-model="task.name" required />
  </form>
  `
}

const Tasks = {
  props: ["toto"],
  emits: ["delete"],
  methods: {
    deleteTask(task) {
      this.$emit("delete", task);
    },
    editTask(task) {
      this.$emit("edit", task);
    },
  },
  template : 
  `
  <div v-for="task in toto" :key="task.id">
    <label contenteditable="false" id="nom">{{task.name}}</label>
    <a href="" @click.prevent="deleteTask(task)"><i>Delete</i></a>
    <a href="" @click.prevent="editTask"><i>Edit</i></a>
  </div>
  `
}

const options = {
  data() {
    return {
     tasks : []
    };
  },
  methods: {
    createTask(task) {
      this.tasks.unshift(task);
    },
    deleteTask(task) {
      const newTasks = this.tasks.filter((t) => {
        return task.id != t.id;
      });

      this.tasks = newTasks;
    },
    editTask() {
      const maBalise = document.getElementById("nom");
      maBalise.setAttribute("contenteditable", "true");
      // maBalise.addEventListener('keypress', function (e) {
      //   if (e.key === 'Enter') {
      //     maBalise.setAttribute("contenteditable", "false");
      //   }
      // });
    },
  },
  components: { MonTitle, Formulaire, Tasks }
};

Vue.createApp(options).mount("#app");
