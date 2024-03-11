<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text class="mr-4" @click="$router.push('/')" style="text-transform: none;">
        <v-toolbar-title>NUMAN</v-toolbar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text @click="$router.push('/')">Home</v-btn>
      <v-btn text @click="$router.push('/board')">Board</v-btn>
      <v-btn text @click="$router.push('/login')">Login</v-btn>

    </v-app-bar>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
};
</script>

