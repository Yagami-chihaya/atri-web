<template>
  <div class="login">
    <div class="form" id="loginform">
      <h1> Login </h1>
      <form novalidate>
        <p class="email">
          <label for="email">Email login <span>*</span>
          </label>
          <input class="input" required type="email" id="email" name="email" pattern="@" />
          <span class="validation error"> Please enter a valid email</span>
          <span class="validation req"> This field is required</span>
        </p>
        <p class="password">
          <label for="password">Password <span>*</span></label>
          <input class="input" required type="password" id="password" name="password" />
          <span class="validation req"> This field is required</span>
        </p>
        <p class="remember">
          <input class="checkbox" type="checkbox" id="remember" />
          <label for="remember"> Remember me</label>

        </p>
        <p class="login">
          <input type="submit" value="Login" @click="submit" />
        </p>
      </form>
    </div>
  </div>
</template>

<script>

import { useCounterStore } from '/src/store/index.js'
import { storeToRefs } from 'pinia'


export default {
  el: '',
  data() {
    return {
      formIsValid: true,

    }
  },
  methods: {
    validateThisField: function (field) {
      if (field.required && field.value === '') {
        field.classList.add('required');
        this.formIsValid = false;
      }
      if (field.pattern
        && !(new RegExp(field.pattern).exec(field.value) !== null)) {
        field.classList.add('invalid');
        this.formIsValid = false;
      }

    },
    submit: function () {
      const store = useCounterStore()

      const { isLogin, aPlayer, systeam_voice } = storeToRefs(store)

      isLogin.value = true
      
      setTimeout(() => {
        aPlayer.value.play()
      
        systeam_voice.value['start_voice'].play()
      }, 1000);
      
    }
  },
  mounted() {


    const form = document.getElementById('loginform');
    const fields = form.querySelectorAll('input');

    const _this = this

    /*
     form.addEventListener('focus', function (e) {
      e.target.classList.remove('required');
      e.target.classList.remove('invalid');
    }, true); */

    form.addEventListener('blur', function (e) {
      e.target.classList.remove('required');
      e.target.classList.remove('invalid');


      _this.validateThisField(e.target);
    }, true);

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      Array.prototype.forEach.call(fields, _this.validateThisField);

      if (!this.formIsValid) {
        form.classList.remove('errors');
        setTimeout(function () { form.classList.add('errors'); }, 0);
      }
    });
  }
}
</script>

<style scoped>
.checkbox+label:before {
  background: #ffffff;
  border: 1px solid #d8d8d8;
}

.checkbox:checked+label:before {
  background: #5a3b5d;
  border-color: #5a3b5d;
}

.checkbox+label:before {
  transition: background 0.2s, border-color 0.2s;

}

.checkbox:not(:checked)+label:after {
  transform: scale(0);
}

.checkbox:checked+label:after {
  transform: scale(1);
}

.checkbox+label:after {
  transition: transform 0.4s;
}

@-webkit-keyframes shakeMe {

  0%,
  100% {
    transform: translateX(0);
  }

  20%,
  60% {
    transform: translateX(-10px);
  }

  40%,
  80% {
    transform: translateX(10px);
  }
}

@keyframes shakeMe {

  0%,
  100% {
    transform: translateX(0);
  }

  20%,
  60% {
    transform: translateX(-10px);
  }

  40%,
  80% {
    transform: translateX(10px);
  }
}

.errors {
  -webkit-animation-name: shakeMe;
  animation-name: shakeMe;
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
}

body {
  background: #fedc2a;
  font-family: "Raleway", sans-serif;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.form {
  background: #fff;
  border: 1px solid #d9d9d9;
  color: #636363;
  width: 300px;
  border-radius: 4px;
  margin: 0 auto;
  padding: 20px 30px;
}

.form h1 {
  text-transform: uppercase;
  font-weight: normal;
  font-size: 1.5em;
  text-align: center;
  margin: 0;
  padding: 10px 0px;
  border-bottom: 1px solid #dcdcdc;
}

form p {
  margin: 25px 0 10px 0;
  position: relative;
}

p.remember {
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-bottom: 1px solid #dcdcdc;
}

.email label,
.password label,
.input {
  display: block;
  width: 100%;
  padding-bottom: 10px;
  box-sizing: border-box;
}

[type="submit"] {
  display: block;
  color: #5a3b5d;
  font-weight: bold;
  border-radius: 2px;
  background: #fedc2a;
  box-shadow: 5px 5px 0 0 #fedc2a, inset 4px 4px 0 0 white;
  border: 2px solid #5a3b5d;
  border-radius: 3px;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
  transition: background 0.3s;
}

[type="submit"]:hover {
  background: white;
  box-shadow: 5px 5px 0 0 #fedc2a, inset 4px 4px 0 0 white;
}

[type="submit"]:active,
[type="submit"]:focus {}

[type="password"],
[type="email"] {
  padding: 20px;
}

[type="password"]:focus,
[type="email"]:focus {
  outline: none;
}

.input {
  font-size: 0.85em;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  height: 40px;
  transition: border-color 0.4s, box-shadow 1s;
}

.input:active,
.input:focus {
  border: 1px solid #5a3b5d;
  box-shadow: 4px 4px 0 #c7a9cd;
}

.checkbox {
  position: absolute;
  left: -300%;
}

.checkbox+label {
  position: relative;
  padding-left: 25px;
  cursor: pointer;
}

.checkbox+label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  width: 15px;
  height: 15px;
  border-radius: 2px;
}

.checkbox:focus+label:before {
  border: 1px solid #5a3b5d;
  box-shadow: 4px 4px 0 #c7a9cd;
}

.checkbox+label:after {
  content: " ";
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.7 8.7" enable-background="new 0 0 10.7 8.7"><path fill="white" d="M4.2 8.7c-.3 0-.5-.3-.7-.5l-3.2-3.1c-.4-.4-.4-1.1 0-1.5s1-.4 1.4 0l2.4 2.3 4.9-5.6c.4-.4 1-.5 1.4-.1.4.4.5 1 .1 1.4l-5.6 6.6c-.1.2-.4.5-.7.5z"/></svg>') no-repeat;

  position: absolute;
  left: 2px;
  top: 3px;
  width: 13px;
  height: 13px;
}

.invalid {
  border-color: #b7004c;
}

.required {
  border-color: #b54300;
}

.validation {
  display: block;
  font-size: 0.8em;
  padding-top: 0.5em;
  position: absolute;
  right: 0;
  opacity: 0;
  transition: opacity 1s;
}

.validation.req {
  color: #b54300;
}

.validation.error {
  color: #b7004c;
}

.invalid:not(.required)~.validation.error {
  opacity: 1;
  transform: scale(1);
}

.required~.validation.req {
  opacity: 1;
  transform: scale(1);
}
</style>
