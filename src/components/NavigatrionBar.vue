<template>
  <v-app-bar app>
    <v-toolbar-title>MyApp</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="$router.push('/')">Home</v-btn>
    <v-btn text @click="$router.push('/board')">Board</v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavigationBar',
};
</script>
