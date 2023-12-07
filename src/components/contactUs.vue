<template>
  <Navbar />

  <section id="contact">
    <h1 class="section-header">Contact</h1>

    <div class="contact-wrapper">
      <form
        @submit.prevent="createContactMsg"
        id="contact-form"
        class="form-horizontal"
        role="form"
      >
        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="text"
              class="form-control"
              id="name"
              placeholder="Enter your name"
              name="name"
              v-model="name"
              required
            />
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-12">
            <input
              type="email"
              class="form-control"
              id="email"
              placeholder="Enter your email"
              name="email"
              v-model="email"
              required
            />
          </div>
        </div>

        <textarea
          class="form-control"
          rows="10"
          placeholder="Write your message"
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
            <i class="fa fa-paper-plane"></i><span class="send-text">SEND</span>
          </div>
        </button>
      </form>

      <div class="direct-contact-container">
        <ul class="contact-list">
          <li class="list-item">
            <span class="contact-text place">dhahran, KSA</span>
          </li>

          <li class="list-item">
            <span class="contact-text phone"
              ><a href="tel:1-212-555-5555" title="Give me a call"
                >(012) 675-5576</a
              ></span
            >
          </li>

          <li class="list-item">
            <span class="contact-text gmail"
              ><a href="mailto:Mustashark@gmail.com" title="Send me an email"
                >Mustashark@gmail.com</a
              ></span
            >
          </li>
        </ul>

        <hr />
        <ul class="social-media-list">
          <li><a href="#" target="_blank" class="contact-icon"> </a></li>
          <li><a href="#" target="_blank" class="contact-icon"> </a></li>
          <li><a href="#" target="_blank" class="contact-icon"> </a></li>
        </ul>
      </div>
    </div>
  </section>

  <footer>
    <p>© 2024 Mustashark. All rights reserved.</p>
  </footer>
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
</script>
<style>
header {
  background-color: indigo;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  align-items: center;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  text-transform: uppercase;
}

footer {
  background-color: indigo;
  color: white;
  text-align: center;
  padding: 10px;
  position: fixed;
  bottom: 0;
  width: 100%;
}
body {
  margin: 0;
  padding: 0;
  padding-bottom: 100px;
}

#contact {
  width: 100%;
  height: 100%;
}

.section-header {
  text-align: center;
  margin: 0 auto;
  padding: 40px 0;
  font: 300 80px "Oswald", sans-serif;
  text-transform: uppercase;
  letter-spacing: 6px;
}

.contact-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 auto;
  padding: 20px;
  position: relative;
  max-width: 840px;
  font-size: 24px;
}

.form-horizontal {
  max-width: 400px;
  font-family: "Lato";
  font-weight: 400;
}

.form-control,
textarea {
  max-width: 700px;
  background-color: #000;
  letter-spacing: 1px;
  font-size: 24px;
  padding: 20px;
}

.send-button {
  margin-top: 15px;
  height: 60px;
  width: 500px;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
}

.alt-send-button {
  width: 400px;
  height: 50px;
  transition: all 0.2s ease-in-out;
  align-items: center;
}

.send-text {
  display: flex;
  justify-content: center;
  display: block;
  margin-top: 10px;
  font: 700 20px "Lato", sans-serif;
  letter-spacing: 2px;
  font-size: 30px;
}
.alt-send-button:hover {
  transform: translate3d(0px, -29px, 0px);
}

.direct-contact-container {
  max-width: 600px;
}

.contact-list {
  list-style-type: none;
  margin-left: -100px;
  padding-right: 20px;
  font-size: 24px;
}

.list-item {
  line-height: 4;
}

.contact-text {
  font: 300 20px "Lato", sans-serif;
  letter-spacing: 1.9px;
}

.place {
  margin-left: 62px;
}

.phone {
  margin-left: 56px;
}

.gmail {
  margin-left: 53px;
}

.contact-text a {
  text-decoration: none;
  transition-duration: 0.2s;
}

.contact-text a:hover {
  text-decoration: none;
}

.social-media-list {
  position: relative;
  font-size: 22px;
  text-align: center;
  width: 100%;
  margin: 0 auto;
  padding: 0;
}

.social-media-list li {
  position: relative;
  display: inline-block;
  height: 60px;
  width: 60px;
  margin: 10px 3px;
  line-height: 60px;
  border-radius: 50%;
  background-color: rgb(27, 27, 27);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 60px;
  height: 60px;
  line-height: 60px;
  border-radius: 50%;
  opacity: 0;
  box-shadow: 0 0 0 1px black;
  transition: all 0.2s ease-in-out;
}

.social-media-list li:hover:after {
  opacity: 1;
  transform: scale(1.12);
  transition-timing-function: cubic-bezier(0.37, 0.74, 0.15, 1.65);
}

.social-media-list li:hover a {
  color: #000;
}

hr {
  border-color: black;
}

@media screen and (max-width: 850px) {
  .contact-wrapper {
    display: flex;
    flex-direction: column;
  }
  .direct-contact-container,
  .form-horizontal {
    margin: 0 auto;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 300px;
  }
  .social-media-list li {
    height: 60px;
    width: 60px;
    line-height: 60px;
  }
  .social-media-list li:after {
    width: 60px;
    height: 60px;
    line-height: 60px;
  }
}

@media screen and (max-width: 569px) {
  .direct-contact-container,
  .form-wrapper {
    float: none;
    margin: 0 auto;
  }
  .form-control,
  textarea {
    margin: 0 auto;
  }

  .name,
  .email,
  textarea {
    width: 280px;
  }

  .direct-contact-container {
    margin-top: 60px;
    max-width: 280px;
  }
  .social-media-list {
    left: 0;
  }
  .social-media-list li {
    height: 55px;
    width: 55px;
    line-height: 55px;
    font-size: 2rem;
  }
  .social-media-list li:after {
    width: 55px;
    height: 55px;
    line-height: 55px;
  }
}

@media screen and (max-width: 410px) {
  .send-button {
    width: 99%;
  }
}
#submit {
  background-color: indigo;
  color: #000;
}
.phone a,
.gmail a {
  color: rgb(1, 1, 30);
}
#contact-form input[type="text"],
#contact-form input[type="email"],
#contact-form textarea {
  width: 500px;
  font-size: 25px;
  padding: 15px;
  margin-bottom: 15px;
}
</style>
