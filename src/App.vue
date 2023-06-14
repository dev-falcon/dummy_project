<template>

  <v-app >

    <router-view>

    </router-view>

    <!-- <SalesPortalLogin /> -->

    <!-- <Leads  /> -->



  </v-app>
</template>

<script>
import Leads from './views/Leads.vue';
import SalesPortalLogin from "./views/SalesPortalLogin.vue";



export default {
  name: "App",

  components: {
    SalesPortalLogin,
    Leads,
  },
};
</script>



<style scoped>

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}


</style>
