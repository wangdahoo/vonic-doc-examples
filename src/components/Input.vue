<template>
  <div class="page" v-nav="{title: '输入框'}">
    <div class="page-content padding-top">

      <!-- type: text, password, email, tel -->
      <div class="item item-divider">
        有标签:
      </div>
      <von-input type="text" v-model="username" placeholder="用户名/手机/邮箱" label="用户名"></von-input>
      <von-input type="password" v-model="password" placeholder="密码" label="密码" style="margin-bottom: 5px;"></von-input>

      <div class="item item-divider">
        无标签:
      </div>
      <von-input type="text" v-model="username" placeholder="用户名/手机/邮箱"></von-input>

    </div>
  </div>
</template>
<script>
  export default{
    data() {
      return {
        username: '',
        password: ''
      }
    }
  }
</script>
