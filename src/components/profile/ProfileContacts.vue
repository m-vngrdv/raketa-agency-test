<template>
  <section class="section">
    <h2 class="section-title section-title--contacts">Контактные данные</h2>
    <div class="r-row">
      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input
          label="Номер телефона"
          @focus="restoreContacts"
          :disabled="userCopy.isPhoneModerated"
          v-model="userCopy.phone"
        ></r-input>
      </div>
      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input
          label="Email"
          @focus="restoreContacts"
          :disabled="userCopy.isEmailModerated"
          v-model="userCopy.email"
        ></r-input>
      </div>
    </div>

    <div v-if="isUserPhoneChanged || isUserEmailChanged" class="section__footer r-row">
      <div class="section__col-btn-reset r-col r-col-md-2 r-col-sm-12">
        <r-button @click="restoreContacts" outlined>отменить</r-button>
      </div>

      <div class="section__col-btn-confirm r-col r-col-md-4 r-col-sm-12">
        <r-button @click="changeContact">сохранить изменения</r-button>
      </div>

      <div class="r-col r-col-xl-4 r-col-md-4 r-col-sm-12">{{ message }}</div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { isChanged, restoreChangedData } from '@/utils/profile'

export default {
  props: {
    userCopy: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
    message() {
      if (this.isUserPhoneChanged) return 'На ваш телефон будет отправлен код подтверждения'
      else return 'На вашу почту будет отправлен код подтверждения'
    },
    isUserPhoneChanged() {
      return isChanged(this.user, this.userCopy, ['phone'])
    },
    isUserEmailChanged() {
      return isChanged(this.user, this.userCopy, ['email'])
    },
  },
  methods: {
    ...mapActions(['updateUserContact']),
    restoreContacts() {
      restoreChangedData(this.user, this.userCopy, this.isUserPhoneChanged ? ['phone'] : ['email'])
    },
    changeContact() {
      let payload = {}
      this.isUserPhoneChanged ? (payload.phone = this.userCopy.phone) : (payload.email = this.userCopy.email)

      this.updateUserContact(payload)
    },
  },
}
</script>

<style lang="scss" scoped>
.section-title--contacts {
  margin-bottom: 34px;
  line-height: 50px;
  letter-spacing: -2px;
}
</style>
