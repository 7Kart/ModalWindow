<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <!-- modal with validate -->
          <button class="btn btnPrimary" @click="modalSignIn = !modalSignIn">Sign In</button>
          <button class="btn btnPrimary" @click="modalSignUp = !modalSignUp">Sign Up</button>

          <modalSignIn v-show="modalSignIn" @redir="modalSignUp = true" @close="modalSignIn = false"/>
          <modalSginUp v-show="modalSignUp" @close="modalSignUp = false" />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalSignIn from '@/components/SignIn.vue'
import modalSginUp from '@/components/SignUp.vue'

export default {
  components: { modals, modalSignIn, modalSginUp },
  data () {
    return {
      modalSignIn: false,
      modalSignUp: false
    }
  }
}
</script>
