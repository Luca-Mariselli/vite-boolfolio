<script>


export default {
  components: {

  },
  data() {
    return {
      menu: [
        {
          name: 'Home',
          route: 'home'
        },
        {
          name: 'About',
          route: 'about'
        },
        {
          name: 'Projects',
          route: 'projects'
        },
        {
          name: 'Contacts',
          route: 'contacts'
        }
      ]
    }
  },
  methods: {
  },
  mounted() {
  }
}
</script>

<template>



  <main>
    <nav class="nav justify-content-center">
      <RouterLink :to="{ name: item.route }" class="nav-link" v-for="item in menu">
        {{ item.name }}
      </RouterLink>
    </nav>
  </main>



</template>

<style scoped></style>
