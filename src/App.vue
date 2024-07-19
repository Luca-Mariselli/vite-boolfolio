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
  <p>{{ project.title }}</p>
 </div>
</template>

<style scoped>

</style>
