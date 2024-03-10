<template>
    <v-container>
      <v-card>
        <v-card-title class="text-h5">Login</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="login" ref="form">
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn color="primary" type="submit">Login</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/register')">Register</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be at least 6 characters',
        ],
      };
    },
    methods: {
      async login() {
        // Here, you'd typically make an API call to your backend to authenticate the user
        console.log('Login attempt with:', this.email, this.password);
        // After successful login, redirect the user, e.g., this.$router.push('/dashboard');
      },
    },
  };
  </script>
  