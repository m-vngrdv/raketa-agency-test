<template>
  <div class="r-date-input__wrapper">
    <div class="r-date-input__head">
      <label class="r-date-input__label">{{ label }}</label>
    </div>
    <div class="r-date-input__content">
      <div class="r-date-input__select-wrapper r-date-input__select-wrapper--day">
        <select class="r-date-input__select" v-model="daySelected">
          <option v-for="day in days" :key="day" :value="day">{{ day }}</option>
        </select>
      </div>
      <div class="r-date-input__select-wrapper r-date-input__select-wrapper--month">
        <select class="r-date-input__select" v-model="monthSelected">
          <option v-for="month in months" :key="month.value" :value="month.value">{{ month.name }}</option>
        </select>
      </div>
      <div class="r-date-input__select-wrapper r-date-input__select-wrapper--year">
        <select class="r-date-input__select" v-model="yearSelected">
          <option v-for="year in years" :key="year" :value="year">{{ year }}</option>
        </select>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
  },
  data() {
    return {
      currentYear: new Date().getFullYear(),
      currentMonth: new Date().getMonth(),
    }
  },
  computed: {
    parseDate() {
      return new Date(Date.parse(this.value)) || new Date()
    },
    daySelected: {
      get() {
        return this.parseDate.getDate()
      },
      set(newDay) {
        this.$emit('input', new Date(this.parseDate.setDate(newDay)).toISOString().substring(0, 10))
      },
    },
    monthSelected: {
      get() {
        return this.parseDate.toLocaleDateString(undefined, { month: '2-digit' })
      },
      set(newMonth) {
        this.$emit('input', new Date(this.parseDate.setMonth(newMonth - 1)).toISOString().substring(0, 10))
      },
    },
    yearSelected: {
      get() {
        return this.parseDate.getFullYear()
      },
      set(newYear) {
        this.$emit('input', new Date(this.parseDate.setYear(newYear)).toISOString().substring(0, 10))
      },
    },
    days() {
      return new Date(this.currentYear, 1, 0).getDate()
    },
    months() {
      return new Array(12).fill(0).map((_, i) => {
        return {
          name: new Date(`${i + 1}/1`).toLocaleDateString(undefined, { month: 'long' }),
          value: new Date(`${i + 1}/1`).toLocaleDateString(undefined, { month: '2-digit' }),
        }
      })
    },
    years() {
      let minYear = this.currentYear - 18,
        maxYear = this.currentYear + 120,
        years = []

      years = Array.apply(null, { length: maxYear + 1 })
        .map(Number.call, Number)
        .slice(minYear)

      if (this.yearSelected < minYear) years.unshift(this.yearSelected)

      return years
    },
  },
}
</script>

<style lang="scss" scoped>
.r-date-input {
  &__wrapper {
  }

  &__head {
  }

  &__label {
    display: inline-block;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 23px;
  }

  &__content {
    display: flex;
    border: 1px solid $gray;
    border-radius: 5px;
  }

  &__select-wrapper {
    position: relative;
    border-right: 1px solid $black;

    &:last-child {
      border-right: none;
    }
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      right: 9px;
      width: 20px;
      height: 20px;
      background-image: url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m4 7 6 6 6-6' stroke='%23000' stroke-width='1.5'/%3E%3C/svg%3E");
      background-repeat: no-repeat;
      background-position: center;
      transform: translateY(-50%);
      z-index: -1;
    }
    &--day {
      flex-grow: 1;
      width: 100%;
      @include respond-to('md') {
        flex: 0 0 100px;
      }
      @include respond-to('sm') {
        flex: 0 0 33.33%;
      }
    }

    &--month {
      flex: 0 0 200px;
      @include respond-to('md') {
        flex: 1 0 auto;
      }
      @include respond-to('sm') {
        flex: 0 0 33.33%;
      }
    }

    &--year {
      flex-grow: 1;
      width: 100%;
      @include respond-to('md') {
        flex: 0 0 100px;
      }
      @include respond-to('sm') {
        flex: 0 0 33.33%;
      }
    }
  }

  &__select {
    width: 100%;
    margin: 0;
    padding: 9px 30px 9px 14px;
    text-transform: capitalize;
    font-size: 14px;
    color: $black;
    border: none;

    outline: none;
    background: transparent;
    appearance: none;
  }
}
</style>
