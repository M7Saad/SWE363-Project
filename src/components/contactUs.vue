<template>
  <div>
    <Navbar />

    <section id="contact" class="contact-section">
      <div class="container">
        <h1
          class="section-header"
          style="font-family: 'Secular One', sans-serif"
        >
          <strong>Contact us</strong>
        </h1>

        <div class="contact-wrapper">
          <form
            @submit.prevent="createContactMsg"
            id="contact-form"
            class="form-horizontal"
            role="form"
          >
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Your Name"
                name="name"
                v-model="name"
                required
              />
            </div>

            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Your Email"
                name="email"
                v-model="email"
                required
              />
            </div>

            <textarea
              class="form-control"
              rows="8"
              placeholder="How can we assist you?"
              name="message"
              required
              v-model="msg"
            ></textarea>

            <button
              class="btn btn-primary send-button"
              id="submit"
              type="submit"
              value="SEND"
            >
              <div class="alt-send-button">
                <i class="fa fa-paper-plane"></i
                ><span class="send-text"><strong>Send Message</strong></span>
              </div>
            </button>
          </form>

          <div class="direct-contact-container">
            <ul class="contact-list">
              <li class="list-item">
                <span class="contact-text place"
                  ><strong>Dhahran, KSA</strong></span
                >
              </li>

              <li class="list-item">
                <span class="contact-text phone">
                  <a href="tel:012-675-5576" title="Give me a call"
                    ><strong>(966) 5364-76070</strong></a
                  >
                </span>
              </li>

              <li class="list-item">
                <span class="contact-text gmail">
                  <a href="mailto:Mustashark@gmail.com" title="Send me an email"
                    ><strong>Mustashark@gmail.com</strong></a
                  >
                </span>
              </li>
            </ul>

            <hr />
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import { ContactMsg } from "../classes.js";
import { getDatabase, ref as dbRef, set } from "firebase/database";
export default {
  data() {
    return {
      name: "",
      msg: "",
      email: "",
    };
  },
  methods: {
    createContactMsg() {
      console.log(this.email);
      const msg = new ContactMsg(this.name, this.email, this.message);
      console.log(msg);
      //upload to firebase
      this.pushToFirebase();
    },
    async pushToFirebase(test) {
      console.log(this.email);
      const db = getDatabase();
      const msgRef = dbRef(db, "contactmsgs/" + this.name); //TODO :CHANGE TO USERID
      await set(msgRef, {
        name: this.name,
        email: this.email,
        message: this.msg,
      });
      console.log("msg has sent to the db");
    },
  },
};
</script>

<script setup>
import Navbar from "./Navbar.vue";
import Footer from "./Footer.vue";
</script>

<style scoped>
body {
  font-family: "Arial", sans-serif;
  margin: 0;
  padding: 0;
}

section#contact {
  padding: 40px 0;
}

h1.section-header {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
}
.section-header {
  text-align: center;
  font-size: 2.5em;
  color: #333;
  margin-bottom: 30px;
}

.contact-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
}
.contact-section {
  padding: 60px 0;
}

form {
  margin-bottom: 20px;
}
.container {
  max-width: 800px;
  margin: 0 auto;
  border: 5px solid #026773;
  border-radius: 10px;
}

.form-control {
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1em;
}

textarea.form-control {
  resize: vertical;
}

.btn-primary {
  background-color: rgb(1, 89, 88);
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.alt-send-button {
  display: flex;
  align-items: center;
}

.fa-paper-plane {
  margin-right: 10px;
}

.direct-contact-container {
  margin-top: 20px;
}

.contact-list {
  list-style: none;
  padding: 0;
}

.list-item {
  margin-bottom: 10px;
}

.contact-text {
  display: block;
  font-size: 1.1em;
  color: #555;
}

.contact-icon img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
}

hr {
  border: 0;
  border-top: 1px solid #ccc;
  margin: 20px 0;
}

.social-media-list {
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
}

.social-media-list li {
  margin-right: 20px;
}

.social-media-list a {
  text-decoration: none;
}
.contact-text.phone a,
.contact-text.gmail a {
  color: rgb(67, 192, 190);
  display: inline-block;
  padding: 8px;
  border-radius: 5px;
  text-decoration: none;
}
</style>
