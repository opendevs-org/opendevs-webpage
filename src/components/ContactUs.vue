<template>
  <form class="w-full max-w-lg contact-form">
    <h2 class="text-4xl font-semibold text-white text-center contactform_heading">
      want to say something
    </h2>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          name <sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-first-name"
          type="text"
          placeholder="full name"
          v-model="username"
          @change="changeHandler"
          name="username"
        />
        <p v-if="this.usernameerr" class="text-red-500 text-xs italic">
          entered name is not valid
        </p>
      </div>
      <div class="w-full md:w-1/2 px-3">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          mobile
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="grid-last-name"
          type="text"
          placeholder="10 digit mobile no"
          v-model="mobile"
          @change="changeHandler"
          name="mobile"
        />
        <p v-if="this.mobileerr" class="text-red-500 text-xs italic">
          invalid mobile number
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          e-mail<sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="email"
          type="email"
          placeholder="enter your email"
          v-model="email"
          @change="changeHandler"
          name="email"
        />
        <p v-if="this.emailerr" class="text-red-500 text-xs italic">
          invalid email format
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          subject<sup>{{ " " }}*</sup>
        </label>
        <input
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          placeholder="enter the subject"
          v-model="subject"
          @change="changeHandler"
          name="subject"
        />
        <p v-if="this.subjecterr" class="text-red-500 text-xs italic">
          subject line is not appropriate
        </p>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          description
        </label>
        <textarea
          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500 h-48 resize-none"
          id="message"
          placeholder="maximum limit 1024 characters"
          v-model="description"
          @change="changeHandler"
          name="description"
        ></textarea>
      </div>
    </div>
    <p v-if="this.descriptionerr" class="text-red-500 text-xs italic">
      description can be of maximum 1024 words
    </p>
    <div class="text-center">
      <button
        class="shadow bg-green-600 hover:bg-green-200 hover:text-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
        type="button"
        @click="submit"
      >
        send
      </button>
      <SnackBar :display="display" :success="success" :close="closeSnackBar" />
    </div>
  </form>
</template>

<script>
import * as InputValidations from "../utils/InputValidations";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
import SnackBar from "./SnackBar.vue";
init(process.env.GRIDSOME_EMAILJS_USER_ID); //// Opendevs user ID from EmailJS
export default {
  name: "ContactUs",
  components: { SnackBar },
  data: function() {
    const userdata = JSON.parse(localStorage.getItem("userdata"));
    return {
      username: userdata?.username || "",
      email: userdata?.email || "",
      subject: "",
      text: "",
      mobile: userdata?.mobile || "",
      description: "",
      usernameerr: false,
      emailerr: false,
      subjecterr: false,
      texterr: false,
      mobileerr: false,
      descriptionerr: false,
      success: false,
      display: false
    };
  },
  methods: {
    submit(event) {
      let valid = false;
      const {
        validateEmail,
        validateMobile,
        validateName,
        validateDescription,
        validateSubject
      } = InputValidations;
      if (
        validateEmail(this.email) &&
        validateMobile(this.mobile) &&
        validateName(this.username) &&
        validateDescription(this.description) &&
        validateSubject(this.subject)
      ) {
        const emailData = {
          username: this.username,
          email: this.email,
          mobile: this.mobile || "Not provided",
          subject: this.subject,
          description: this.description || "Not provided"
        };
        const TEMPLATE_ID = process.env.GRIDSOME_EMAILJS_TEMPLATE_ID;
        const SERVICE_ID = process.env.GRIDSOME_EMAILJS_SERVICE_ID;
        emailjs ////EMAIL JS CODE
          .send(SERVICE_ID, TEMPLATE_ID, emailData)
          .then(
            function(response) {
              valid = true;
            },
            function(error) {
              valid = false;
            }
          );
        ////////////////////////////////

        var sheetsData = {
          Name: this.username,
          Email: this.email,
          Mobile: this.mobile || "Not provided",
          Subject: this.subject,
          Description: this.description || "Not provided"
        };

        fetch(
          process.env.GRIDSOME_SHEET_BEST_URL,
          {
            method: "POST",
            mode: "cors",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(sheetsData) /////Google Sheet Code
          }
        )
          .then(response => response.json())
          .then(data => {
            valid = true;
          })
          .catch(err => {
            valid = false;
          });
      } else {
        console.log("failed");
        this.usernameerr = InputValidations.validateName(this.username)
          ? false
          : true;
        this.usernameerr = InputValidations.validateName(this.username)
          ? false
          : true;
        this.mobileerr = InputValidations.validateMobile(this.mobile)
          ? false
          : true;
        this.subjecterr = InputValidations.validateSubject(this.subject)
          ? false
          : true;
        this.descriptionerr = InputValidations.validateDescription(
          this.description
        )
          ? false
          : true;
      }
      localStorage.setItem(
        "userdata",
        JSON.stringify({
          username: this.username,
          email: this.email,
          mobile: this.mobile
        })
      );
      if (valid) {
        this.display = true;
        this.success = true;
      } else {
        this.display = true;
        this.success = false;
      }
      setTimeout(() => {
        this.display = false;
      }, 4000);
      this.subject = "";
      this.description = "";
    },
    closeSnackBar() {
      this.display = false;
      this.success = false;
    },
    changeHandler(event) {
      //   console.log(event.target.name , event.target.value);
      if (event.target.name === "username")
        this.usernameerr = InputValidations.validateName(this.username)
          ? false
          : true;
      else if (event.target.name === "email")
        this.usernameerr = InputValidations.validateName(this.username)
          ? false
          : true;
      else if (event.target.name === "mobile")
        this.mobileerr = InputValidations.validateMobile(this.mobile)
          ? false
          : true;
      else if (event.target.name === "subject")
        this.subjecterr = InputValidations.validateSubject(this.subject)
          ? false
          : true;
      else if (event.target.name === "description")
        this.descriptionerr = InputValidations.validateDescription(
          this.description
        )
          ? false
          : true;
    }
  }
};
</script>

<style scoped>
.contactform_heading{
  margin-bottom: 5%;
}
</style>
