<template>
  <modal title="Sign In" @close="closeModal()">
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
        <!-- button -->
        <button class="btn btnPrimary">Submit!</button>
        <p class="link-to-sign-up" @click="redirTosignUp()">Sgin up</p>
      </form>
    </div>
  </modal>
</template>
<script>
import { required, minLength, email } from "vuelidate/lib/validators";
import modal from "@/components/UI/Modal.vue";

export default {
  components: { modal },
  data() {
    return {
      email: "",
      password: ""
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
  },
  methods: {
    closeModal() {
      this.email = "";
      this.password = "";
      this.$v.$reset();
      this.$emit("close");
    },
    onSubmit() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        const user = {
          email: this.email,
          password: this.password
        };
        console.log(user);
        this.closeModal();
      }
    },
    redirTosignUp() {
      this.closeModal();
      this.$emit("redir");
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
}

.link-to-sign-up {
  color: darkslateblue;
  font-size: 12px;
  cursor: pointer;
}
</style>
