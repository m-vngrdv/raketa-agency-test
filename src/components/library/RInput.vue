<template>
  <div class="r-input__wrapper">
    <div class="r-input__head">
      <label class="r-input__label">{{ label }}</label>
      <span class="r-input__messsage">{{ message }}</span>
    </div>

    <div class="r-input__inner">
      <input
        class="r-input"
        :placeholder="placeholder"
        :type="type"
        :disabled="disabled"
        v-model="val"
        @focus="handleOnFocus($event)"
      />
      <button v-if="password" @click="toggleType" class="r-input__show-pwd">
        <svg width="20" height="20" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="11" cy="11.5" r="2.75" stroke="currentColor" stroke-width="1.5" />
          <path
            d="M20.5 11.5c-1.834-3.575-5.4-6-9.5-6s-7.666 2.425-9.5 6"
            stroke="currentColor"
            stroke-width="1.5"
            stroke-linecap="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    password: {
      type: Boolean,
      default: false,
    },
    value: {
      type: String,
    },
    message: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showPassword: false,
    }
  },
  computed: {
    val: {
      get() {
        return this.value
      },
      set(newValue) {
        this.$emit('input', newValue)
      },
    },
    type() {
      if (this.password && !this.showPassword) return 'password'
      else return 'text'
    },
  },
  methods: {
    handleOnFocus() {
      this.$emit('focus')
    },
    toggleType() {
      this.showPassword = !this.showPassword
    },
  },
}
</script>

<style lang="scss" scoped>
.r-input {
  box-sizing: border-box;
  display: block;
  width: 100%;
  padding: 9px 14px;

  font-size: 14px;
  line-height: 20px;
  color: $black;

  border: 1px solid $gray;
  border-radius: 5px;
  &:focus {
    border-color: $light-orange;
    outline: none;
  }
  &:disabled {
    background-color: $cold-gray;
    border-color: $gray;
  }

  &::placeholder {
    color: $cold-gray;
  }

  &__wrapper {
  }

  &__head {
  }

  &__label {
    display: inline-block;
    margin-bottom: 9px;
    font-size: 14px;
    line-height: 20px;
  }

  &__inner {
    position: relative;
  }

  &__messsage {
  }

  &__show-pwd {
    position: absolute;
    top: 50%;
    right: 9px;
    padding: 0px;
    line-height: 0px;
    background-color: transparent;
    border: none;
    cursor: pointer;

    transform: translateY(-50%);
    &:hover {
      color: $light-orange;
    }
  }
}
</style>
