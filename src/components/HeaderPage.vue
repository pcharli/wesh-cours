<template>
    <header>
       <div class="wrapper">
        <nav>
                    <div class="nav-container">
                      <div id="logo">
                        <router-link to="/">
                          <img src="https://i.ibb.co/6nhfJz5/wish-logo-800.png" alt="logo" />
                        </router-link>
                      </div>
            
                      <ul id="icons">
                        <li>
                          <router-link to="/user-settings">
                            <i class="fas fa-user"></i>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/liked">
                            <i class="fas fa-heart"></i>
                          </router-link>
                        </li>
                        <li>
                          <router-link to="/shopping-cart">
                            <i class="fas fa-shopping-cart"></i>
                            <span></span>
                          </router-link>
                        </li>
                      </ul>
                    </div>
                  </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
    .router-link-active {
  color: red;
}
</style>