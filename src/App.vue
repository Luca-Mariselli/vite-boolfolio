<script>


import AppHeader from './components/AppHeader.vue';


export default {
  name: 'App',

  components: {
    AppHeader,
  },
  data() {
    return {

    }
  },
  methods: {
  },
  mounted() {
  }
}








</script>


<template>

  <AppHeader></AppHeader>
  <RouterView />


  <!-- <ProjectCard /> -->

</template>

<style scoped></style>
