<template>
  <div>
    <h1 class="page-title">Личный кабинет</h1>

    <profile-user-data :userCopy="userCopy" />

    <profile-password />

    <profile-contacts :userCopy="userCopy" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import ProfileUserData from '@/components/profile/ProfileUserData.vue'
import ProfilePassword from '@/components/profile/ProfilePassword.vue'
import ProfileContacts from '@/components/profile/ProfileContacts.vue'

export default {
  data() {
    return {
      userCopy: {},
    }
  },
  components: {
    ProfileUserData,
    ProfilePassword,
    ProfileContacts,
  },
  watch: {
    user: {
      deep: true,
      handler() {
        this.copyUser()
      },
    },
  },
  computed: {
    ...mapGetters(['getUser']),
    user() {
      return this.getUser
    },
  },
  methods: {
    ...mapActions(['loadUser']),
    copyUser() {
      this.userCopy = JSON.parse(JSON.stringify(this.user))
    },
  },
  mounted() {
    this.loadUser().then(() => {
      this.copyUser()
    })
  },
}
</script>
