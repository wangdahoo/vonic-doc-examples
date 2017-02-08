<template>
  <div class="page" v-nav="{title: '文字提示、加载提示'}">
    <div class="page-content padding-top">
      <div class="list" thin-border>
        <div class="item item-icon-right" @click="toast()">
          Toast <span class="item-note">文字提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
        <div class="item item-icon-right" @click="loading('正在加载..')">
          Loading <span class="item-note">加载提示</span>
          <i class="icon ion-ios-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    methods: {
      loading(tips) {
        $loading.show(tips).then(() => {
          console.log('loading showed')

          $loading.hide(2000).then(() => {
            console.log('loading hide')
          })
        })
      },

      toast() {
        $toast.show('发送成功', 1500).then(() => {
          console.log('toast hide')
        })
      }
    }
  }
</script>