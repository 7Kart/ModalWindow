<template>
  <div class="wrapper">
    <div class="wrapper-content">

      <section>
        <div class="container">
          <!-- modal with validate -->
          <button class="btn btnPrimary" @click="modalValidate = !modalValidate">Show modal with form + validate</button>
          <modalValidate v-show="modalValidate" @close="modalValidate = false"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import modals from '@/components/UI/Modal.vue'
import modalValidate from '@/components/ModalValidate.vue'

export default {
  components: { modals, modalValidate },
  data () {
    return {
      modalValidate: false
    }
  },
  methods: {
    submitSecondForm () {
      console.log({
        name: this.modalSecond.name,
        email: this.modalSecond.email
      })
      this.modalSecond.name = '';
      this.modalSecond.email = '';
      this.modalSecond.show = false;
    }
  }
}
</script>
