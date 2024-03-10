<template>
    <v-container>
      <v-card>
        <v-card-title class="text-h5">Register</v-card-title>
        <v-card-text>
          <v-form @submit.prevent="register" ref="form">
            <v-text-field
              label="Email"
              prepend-icon="mdi-email"
              type="email"
              v-model="email"
              :rules="emailRules"
              required
            ></v-text-field>
            <v-text-field
              label="Username"
              prepend-icon="mdi-account"
              v-model="username"
              :rules="usernameRules"
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
            <v-btn color="primary" type="submit">Register</v-btn>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn text @click="$router.push('/login')">Already have an account? Login</v-btn>
        </v-card-actions>
      </v-card>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        username: '',
        password: '',
        emailRules: [
          v => !!v || 'Email is required',
          v => /.+@.+\..+/.test(v) || 'Email must be valid',
        ],
        usernameRules: [
          v => !!v || 'Username is required',
          v => v.length >= 3 || 'Username must be at least 3 characters',
        ],
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length >= 6 || 'Password must be at least 6 characters',
        ],
      };
    },
    methods: {
      async register() {
        // Here, you'd typically make an API call to your backend to register the user
        console.log('Registration attempt with:', this.email, this.username, this.password);
        // After successful registration, redirect the user, e.g., this.$router.push('/login');
      },
    },
  };
  </script>
  