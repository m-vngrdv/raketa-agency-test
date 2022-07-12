<template>
  <section class="section">
    <div class="r-row">
      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input label="Фамилия" placeholder="Введите данные" v-model="userCopy.firstName"></r-input>
      </div>

      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input label="Имя" placeholder="Введите данные" v-model="userCopy.lastName"></r-input>
      </div>

      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-input label="Отчество" placeholder="Введите данные" v-model="userCopy.patronymic"></r-input>
      </div>

      <div class="r-col r-col-xl-6 r-col-md-6 r-col-sm-12">
        <r-date-input label="Дата рождения" v-model="userCopy.bday"></r-date-input>
      </div>
    </div>

    <div v-if="isUserDataChange" class="section__footer r-row">
      <div class="section__col-btn-reset r-col r-col-md-2 r-col-sm-12">
        <r-button @click="restoreUserData" outlined>отменить</r-button>
      </div>

      <div class="section__col-btn-confirm r-col r-col-md-4 r-col-sm-12">
        <r-button :disabled="disabledUserDataButton" @click="updateUserData">сохранить изменения</r-button>
      </div>
    </div>
  </section>
</template>

<script>
import _ from 'lodash'
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
    isUserDataChange() {
      return isChanged(this.user, this.userCopy, ['firstName', 'lastName', 'patronymic', 'bday'])
    },
    disabledUserDataButton() {
      return _.isEmpty(this.userCopy.firstName) || _.isEmpty(this.userCopy.lastName)
    },
  },
  methods: {
    ...mapActions(['loadUser', 'updateUser']),
    restoreUserData() {
      restoreChangedData(this.user, this.userCopy, ['firstName', 'lastName', 'patronymic', 'bday'])
    },
    updateUserData() {
      let newData = _.differenceWith(_.toPairs(this.userCopy), _.toPairs(this.user), _.isEqual)
      if (!_.isEmpty(newData)) {
        this.updateUser(_.fromPairs(newData))
      }
    },
  },
}
</script>
