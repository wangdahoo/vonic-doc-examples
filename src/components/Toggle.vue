<template>
  <div class="page has-navbar" v-nav="{title: '开关按钮'}">
    <div class="page-content padding-top">
      <von-toggle :text="toggleText" v-model="pushNotification"></von-toggle>
      <div class="item item-divider">开关状态: <span>{{ pushNotification ? '开启' : '关闭' }}</span></div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        toggleText: "是否开启推送",
        pushNotification: true
      }
    }
  }
</script>
