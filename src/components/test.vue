<template>
    <div id="app">
      <header>
        <h1>Mustashark</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </header>
  
      <main>
        <!--take input, one field-->
        <input type="text" v-model="inputField" placeholder="Enter something">
        <!--take input, one field-->
        <button @click="pushToFirebase">Push to Firebase</button>
      </main>
  
      <footer>
        <p>© 2024 Mustashark. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getDatabase, ref as dbRef, set } from "firebase/database";
  
  export default {
    data() {
      return {
        imageUrl: 'https://victoria.mediaplanet.com/app/uploads/sites/105/2019/08/MainImage_A5-2.jpg',
        inputField: '',
      };
    },
    methods: {
      async pushToFirebase() {
        const db = getDatabase();
        const inputRef = dbRef(db, "users/" +"123");  // Change 'inputField' to the path where you want to store the data
        await set(inputRef, this.inputField);
        console.log('Data stored in Firebase!');
      },
    },
  };
  </script>