<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <span>Hello</span>
    <div>Hello</div>
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    background-color: #efefef;
    font-size: .14rem;
  }
  html,body{
    height: 100%;
  }
  html{
  font-size: 100px;
}
p{
  width: 1rem;
  height: 1rem;
  background-color: red;
}
html{
  font-size: 100px!important;
}
  </style>
