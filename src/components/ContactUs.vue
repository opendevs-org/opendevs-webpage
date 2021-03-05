<template>
  <form class="w-full max-w-lg contact-form">
    <h2 class="text-4xl font-semibold text-white text-center">
      want to say something
    </h2>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label
          class="block uppercase tracking-wide text-yellow-700 text-xs font-bold mb-2"
        >
          Name <sup>{{ " " }}*</sup>
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
          Mobile
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
          E-mail<sup>{{ " " }}*</sup>
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
          Subject<sup>{{ " " }}*</sup>
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
          Description
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
        Send
      </button>
    </div>
  </form>
</template>

<script>
import * as InputValidations from "../utils/InputValidations";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
init("user_TGyjnXnxapi7xn7FPpyTE");
export default {
  name: "ContactUs",
  data: function() {
    return {
      username: "",
      email: "",
      subject: "",
      text: "",
      mobile: "",
      description: "",
      usernameerr: false,
      emailerr: false,
      subjecterr: false,
      texterr: false,
      mobileerr: false,
      descriptionerr: false
    };
  },
  methods: {
    submit(event) {
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
        var data = {

            username: this.username,
            email: this.email,
            mobile: this.mobile || "Not provided",
            subject: this.subject,
            description: this.description || "Not provided"
          
        };
        //////////////////////////////////////Todo email
        const TEMPLATE_ID = "template_xgwzxjg"
        emailjs
          .send("service_y6z2vei", TEMPLATE_ID, data)
          .then(
            function(response) {
              console.log("SUCCESS!", response.status, response.text);
            },
            function(error) {
              console.log("FAILED...", error);
            }
          );


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

      this.subject = "";
      this.description = "";
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

<style scoped></style>
