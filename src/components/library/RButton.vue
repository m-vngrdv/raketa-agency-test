<template>
  <button
    class="r-button"
    :disabled="disabled"
    :class="{ 'r-button--outlined': outlined }"
    @click="handleOnClick($event)"
  >
    <slot>{{ label }}</slot>
  </button>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleOnClick() {
      this.$emit('click')
    },
  },
}
</script>

<style lang="scss" scoped>
.r-button {
  padding: 10px 29px;

  font-family: $TTHRegular;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: 1px;
  text-transform: uppercase;
  color: $white;

  background-color: $black;
  border: 1px solid $black;
  border-radius: 8px;
  outline: none;

  transition: transform 0.5s ease;
  cursor: pointer;
  &:disabled {
    background-color: $gray;
    border-color: $gray;
  }

  &:not([disabled]) {
    &:hover {
      transform: translateY(-2px);
    }
  }
  &:active {
    background-color: $ship-gray;
  }
  &:focus {
    border-color: $light-orange;
  }
  &--outlined {
    background-color: transparent;
    color: $black;
    &:active {
      background-color: $cold-gray;
    }
  }
  @include respond-to('md') {
    padding: 10px;
    width: 100%;
  }

  @include respond-to('sm') {
    padding: 10px;
    width: 100%;
  }
}
</style>
