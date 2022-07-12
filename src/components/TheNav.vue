<template>
  <section class="nav">
    <router-link :to="{ name: 'Home' }" class="nav__logo">
      <img class="nav__logo-icon" src="@/assets/logo.svg" />
    </router-link>

    <button class="nav__menu-btn" @click="toggleMobileMenu">
      <svg
        v-if="showMobileMenu"
        class="nav__menu-icon"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="30px"
        height="30px"
      >
        <path
          d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"
        />
      </svg>
      <svg
        v-else
        class="nav__menu-icon"
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fill="currentColor" d="M1.5 13.5h27v3h-27zM1.5 6h27v3h-27zM1.5 21h27v3h-27z" />
      </svg>

      Меню
    </button>

    <div class="nav__menu-wrapper" :class="{ 'nav__menu-wrapper--active': showMobileMenu }">
      <ul class="nav__list">
        <li class="nav__item">
          <router-link class="nav__link" :to="{ name: 'Catalog' }">
            <svg class="nav__link-img" width="35" height="35" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.372 0H5.474A5.475 5.475 0 0 0 0 5.474v4.896a5.475 5.475 0 0 0 5.474 5.474h4.898a5.475 5.475 0 0 0 5.474-5.474V5.474A5.474 5.474 0 0 0 10.372 0Zm2.737 10.37a2.736 2.736 0 0 1-2.737 2.737H5.474a2.737 2.737 0 0 1-2.737-2.737V5.474a2.737 2.737 0 0 1 2.737-2.737h4.898a2.737 2.737 0 0 1 2.737 2.737v4.896ZM29.53 0h-4.902a5.475 5.475 0 0 0-5.474 5.474v4.896a5.474 5.474 0 0 0 5.474 5.474h4.898A5.475 5.475 0 0 0 35 10.37V5.474A5.475 5.475 0 0 0 29.526 0h.004Zm2.737 10.37a2.736 2.736 0 0 1-2.737 2.737h-4.902a2.736 2.736 0 0 1-2.737-2.737V5.474a2.736 2.736 0 0 1 2.737-2.737h4.898a2.737 2.737 0 0 1 2.737 2.737l.004 4.896Zm-21.895 8.786H5.474A5.475 5.475 0 0 0 0 24.63v4.896A5.475 5.475 0 0 0 5.474 35h4.898a5.475 5.475 0 0 0 5.474-5.474V24.63a5.474 5.474 0 0 0-5.474-5.474Zm2.737 10.37a2.736 2.736 0 0 1-2.737 2.737H5.474a2.737 2.737 0 0 1-2.737-2.737V24.63a2.737 2.737 0 0 1 2.737-2.738h4.898a2.737 2.737 0 0 1 2.737 2.738v4.896Zm16.421-10.37h-4.902a5.475 5.475 0 0 0-5.474 5.474v4.896A5.474 5.474 0 0 0 24.628 35h4.898A5.475 5.475 0 0 0 35 29.526V24.63a5.475 5.475 0 0 0-5.474-5.474h.004Zm2.737 10.37a2.736 2.736 0 0 1-2.737 2.737h-4.902a2.737 2.737 0 0 1-2.737-2.737V24.63a2.736 2.736 0 0 1 2.737-2.738h4.898a2.737 2.737 0 0 1 2.737 2.738l.004 4.896Z"
                fill="currentColor"
              />
            </svg>
            Каталог
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" :to="{ name: 'Orders' }">
            <svg class="nav__link-img" width="45" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M17.59.49a1.669 1.669 0 0 0-2.36-.002L6.612 9.086H1.67a1.669 1.669 0 0 0 0 3.337h.837l3.21 18.096a6.538 6.538 0 0 0 6.446 5.403h20.334c3.18 0 5.89-2.273 6.447-5.403l3.21-18.096h1.045a1.669 1.669 0 0 0 0-3.337h-4.42L30.158.487a1.669 1.669 0 1 0-2.357 2.363l6.25 6.235H11.338l6.25-6.235A1.669 1.669 0 0 0 17.59.49Zm18.067 29.446a3.205 3.205 0 0 1-3.16 2.649H12.161a3.206 3.206 0 0 1-3.16-2.65L5.895 12.423h32.868l-3.106 17.514Z"
                fill="currentColor"
              />
              <path
                d="M19.419 27.476c.32.297.727.445 1.134.445.424 0 .848-.16 1.172-.481l8.512-8.408a1.669 1.669 0 0 0-2.345-2.374l-7.375 7.286-3.843-3.562a1.669 1.669 0 0 0-2.269 2.447l5.014 4.647Z"
                fill="currentColor"
              />
            </svg>
            Мои заказы
          </router-link>
        </li>
        <li class="nav__item">
          <router-link class="nav__link" :to="{ name: 'Profile' }">
            <svg class="nav__link-img" width="36" height="36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24.136 17.472a9.81 9.81 0 0 0 1.057-14.338 9.822 9.822 0 0 0-14.386 0 9.809 9.809 0 0 0 1.057 14.338 17.997 17.997 0 0 0-8.597 6.577A17.978 17.978 0 0 0 0 34.365V36h36v-1.635a17.978 17.978 0 0 0-3.267-10.316 17.997 17.997 0 0 0-8.597-6.577ZM11.455 9.835a6.546 6.546 0 0 1 13.09 0c0 1.735-.689 3.398-1.916 4.625a6.546 6.546 0 0 1-11.174-4.625ZM3.371 32.729a14.717 14.717 0 0 1 7.762-11.323 14.733 14.733 0 0 1 13.735 0 14.718 14.718 0 0 1 7.761 11.323H3.371Z"
                fill="currentColor"
              />
            </svg>
            Личный кабинет
          </router-link>
        </li>
      </ul>

      <button class="nav__logout" @click="logout">
        Выход
        <img src="@/assets/icons/logout.svg" alt="Иконка выхода" class="nav__logout-icon" />
      </button>
    </div>
  </section>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showMobileMenu: false,
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleMobileMenu() {
      this.showMobileMenu = !this.showMobileMenu
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  position: relative;
  min-height: 100vh;
  max-width: 120px;

  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: $TTHMedium;

  background-color: $black;
  @include respond-to('md') {
    min-height: auto;
    max-width: none;
    width: 100%;
    display: flex;
    align-items: center;
    line-height: 0px;
    text-align: left;
    background-color: $white;
    &::after {
      content: '';
      position: absolute;
      bottom: 0px;
      left: 0px;
      right: 0px;
      width: 100%;
      height: 1px;
      background-color: $black;
    }
  }

  &__logo {
    display: block;
    margin-bottom: 33px;
    font-size: 0px;
    @include respond-to('md') {
      display: inline-block;
      margin-bottom: 0px;
      margin-right: 25px;
    }
    @include respond-to('sm') {
      margin-right: 15px;
    }
  }
  &__logo-icon {
    @include respond-to('sm') {
      width: 50px;
      height: 50px;
    }
  }

  &__menu-btn {
    @include respond-to('md') {
      display: inline-flex;
    }
    display: none;
    padding: 0px;

    align-items: center;
    font-size: 24px;
    line-height: 20px;

    letter-spacing: 1px;
    text-transform: uppercase;
    color: $black;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      color: $light-orange;
    }
    @include respond-to('sm') {
      font-size: 14px;
      line-height: 20px;
    }
  }

  &__menu-icon {
    margin-right: 15px;
    @include respond-to('sm') {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }

  &__menu-wrapper {
    @include respond-to('md') {
      position: absolute;
      top: 120px;
      display: block;
      width: 120px;
      min-height: 100vh;
      background-color: $black;

      transform: translateX(-500px);
      transition: transform 0.3s ease;
      z-index: 999;

      &--active {
        transform: translateX(0);
      }
    }
    @include respond-to('sm') {
      padding: 20px 0;
      width: 100%;
      top: 50px;
    }
  }

  &__list {
    margin: 0px;
    padding: 0px;
    list-style: none;
  }

  &__item {
    margin-bottom: 40px;
    &:last-child {
      margin-bottom: 0px;
    }
  }

  &__link {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;

    font-size: 10px;
    line-height: 15px;
    text-decoration: none;
    color: $white;
    &:hover,
    &.router-link-active {
      color: $light-orange;
    }
  }

  &__link-img {
    margin-bottom: 10px;
  }

  &__logout {
    position: absolute;
    bottom: 53px;
    display: block;
    width: 100%;
    padding: 0px;
    font-size: 14px;
    line-height: 20px;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 1px;

    color: $white;
    background-color: transparent;
    border: none;
    cursor: pointer;
    &:hover {
      img {
        transform: translate(2px, -2px);
      }
    }
  }

  &__logout-icon {
    margin-left: 7px;
    transition: transform 0.5s ease;
  }
}
</style>
