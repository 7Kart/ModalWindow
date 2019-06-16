<template>
  <modal title="Sign Up" @close="closeModal()">
    <!-- body -->
    <div slot="body">
      <form @submit.prevent="onSubmit">
        <!-- email -->
        <div class="form-item" :class="{ errorInput: $v.email.$error }">
          <label>Email:</label>
          <p class="errorText" v-if="$v.email.$dirty && !$v.email.required">Field is required!</p>
          <p class="errorText" v-if="!$v.email.email">Email is not correct!</p>
          <input :class="{ error: $v.email.$error }" v-model.trim.lazy="$v.email.$model">
        </div>

        <!-- password -->
        <div class="form-item" :class="{ errorInput: $v.password.$error }">
          <label>Password:</label>
          <p class="errorText" v-if="$v.password.$dirty && !$v.password.required">Field is required!</p>
          <p
            class="errorText"
            v-if="!$v.password.minLength"
          >The password is too short! Need {{ $v.password.$params.minLength.min }} symbol!</p>
          <input :class="{ error: $v.password.$error }" v-model.trim.lazy="$v.password.$model">
        </div>

        <!-- confirm password -->
        <div class="form-item" :class="{ errorInput: $v.confirmPass.$error }">
          <label>Confirm password:</label>
          <p
            class="errorText"
            v-if="$v.confirmPass.$dirty &&  !$v.confirmPass.sameAsPassword"
          >Passwords must be identical.</p>
          <input
            :class="{ error: $v.confirmPass.$error }"
            v-model.trim.lazy="$v.confirmPass.$model"
          >
        </div>
        <!-- button -->
        <button class="btn btnPrimary">Submit</button>
      </form>
    </div>
  </modal>
</template>
<script>
import { required, minLength, email, sameAs } from "vuelidate/lib/validators";
import modal from "@/components/UI/Modal.vue";

export default {
  components: { modal },
  data() {
    return {
      email: "",
      password: "",
      confirmPass: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPass: {
      sameAsPassword: sameAs("password")
    }
  },
  methods: {
    closeModal() {
      this.email = "";
      this.password = "";
      this.confirmPass = "";
      this.$v.$reset();
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password,
          confirmPass: this.confirmPass
        };
        console.log(user);
        this.closeModal();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.form-item .errorText {
  margin-bottom: 8px;
  font-size: 13.4px;
  color: #de4040;
}
input.error {
  border-color: #de4040;

  animation-name: shakeError;
  animation-fill-mode: forward;
  animation-duration: 0.6s;
  animation-timing-function: ease-in-out;
}

@keyframes shakeError {
  0% {
    transform: translateX(0);
  }

  15% {
    transform: translateX(0.375rem);
  }

  30% {
    transform: translateX(-0.375rem);
  }

  45% {
    transform: translateX(0.375rem);
  }

  60% {
    transform: translateX(-0.375rem);
  }

  75% {
    transform: translateX(0.375rem);
  }
  90% {
    transform: translateX(-0.375rem);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
