<script>

import axios from 'axios';

export default {
  name: 'App',

  data() {
    return {
      base_url: 'http://127.0.0.1:8000',
      projects: ''
    }
  },

  mounted() {


    axios
      .get(`${this.base_url}/api/projects`)
      .then(response => {
        console.log(response);
        this.projects = response.data.projects

      })


  }


}


</script>


<template>
 <h1>funziona</h1>
 <div v-for="project in projects.data">
  ciao
 </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
