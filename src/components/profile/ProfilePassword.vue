<template>
  <section class="section">
    <h2 class="section-title">Изменить пароль</h2>

    <div class="r-row">
      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input
          label="Новый пароль"
          password
          message="минимум 6 символов, буквы и цифры"
          v-model="newPassword"
        ></r-input>
      </div>
      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input label="Повторите пароль" password v-model="newPasswordConfirm"></r-input>
      </div>
    </div>

    <div v-if="isPasswordTyped" class="section__footer r-row">
      <div class="section__col-btn-reset r-col r-col-md-2 r-col-sm-12">
        <r-button @click="resetNewPassword" outlined>отменить</r-button>
      </div>

      <div class="section__col-btn-confirm r-col r-col-md-4 r-col-sm-12">
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
