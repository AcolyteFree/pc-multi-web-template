<template>
  <div id="app">
    <div class="dd">
      Home
    </div>
    <img v-bind:src="logoImg">
    <h1></h1>
    <el-button @click.native="startHacking">Let's do it</el-button>
  </div>
</template>

<script>
import logo from 'assets/img/logo.png'
export default {
  data () {
    return {
      msg: 'Use Vue 2.0 Today!',
      logoImg: logo
    }
  },

  methods: {
    startHacking () {
      this.$notify({
        title: 'It Works',
        message: 'We have laid the groundwork for you. Now it\'s your time to build something epic!',
        duration: 6000
      })
    }
  }
}
</script>

<style lang="less">
  @base: #f938ab;
  body {
    background-color: @base;
  }

</style>
