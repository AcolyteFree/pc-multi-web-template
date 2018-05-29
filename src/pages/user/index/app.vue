<template>
  <div id="app">
    <el-card class="index-card">
      <div slot="header">
        My Codes
      </div>
      <ul>
        <li>
          <a href="https://github.com/Plortinus/vue-multiple-pages" target="_blank">
            Vue Multiple Pages
          </a>
        </li>
        <li>
          <a href="https://github.com/Plortinus/element-china-area-data" target="_blank">
            Element China Area Data
          </a>
        </li>
      </ul>
      <el-button type="primary" @click="gogogo">To Customer Home Page</el-button>
      <el-button type="primary" plain @click="tototo">To User Login Page</el-button>
    </el-card>
    <div class="danger">
      <p>test</p>
      <span>span</span>
    </div>
    <div class="customer">
      <p>test</p>
      <span>span</span>
    </div>
  </div>
</template>

<script>
  import logo from 'assets/img/logo.png'
  import modal from 'components/modal.vue'
  export default {
    components: {
      modal
    },
    data () {
      return {
        msg: 'Use Vue 2.0 Today!',
        logoImg: logo
      }
    },
    methods: {
      gogogo () {
        location.assign('../customer/home.html')
      },
      tototo () {
        location.assign('../user/login.html')
      }
    }
  }
</script>

<style lang="postcss">
  .index-card {
    display: flex;
    width: 1000px;
    margin: 100px auto;
  }
  body {
    display: flex;
    font: 100%/1.5 system-ui;
  }
</style>



