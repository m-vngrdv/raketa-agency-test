<template>
  <section class="section">
    <h2 class="section-title">Изменить пароль</h2>

    <div class="r-row">
      <div class="r-col r-col-6">
        <r-input label="Новый пароль" password v-model="newPassword"></r-input>
      </div>
      <div class="r-col r-col-6">
        <r-input label="Повторите пароль" password v-model="newPasswordConfirm"></r-input>
      </div>
    </div>

    <div v-if="isPasswordTyped" class="section__footer r-row">
      <div class="r-col">
        <r-button @click="resetNewPassword" outlined>отменить</r-button>
      </div>

      <div class="r-col">
        <r-button :disabled="!isPasswordEqual" @click="updatePassword">сохранить изменения</r-button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      newPassword: '',
      newPasswordConfirm: '',
    }
  },
  computed: {
    isPasswordTyped() {
      return this.newPassword !== '' || this.newPasswordConfirm !== ''
    },
    isPasswordEqual() {
      return this.newPassword === this.newPasswordConfirm
    },
  },
  methods: {
    ...mapActions(['updateUserPassword']),
    resetNewPassword() {
      this.newPassword = ''
      this.newPasswordConfirm = ''
    },
    updatePassword() {
      this.updateUserPassword().then(() => this.resetNewPassword())
    },
  },
}
</script>
