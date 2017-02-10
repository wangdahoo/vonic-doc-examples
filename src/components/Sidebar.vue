<template>
  <div class="page has-navbar"
    v-nav="{ 
      title: '侧边栏',
      showMenuButton: true,
      menuButtonText: menuButtonText,
      onMenuButtonClick: toggleSidebar
    }">
    <div class="page-content padding-top">
      <div class="list" thin-border>
        <div class="item item-icon-right" @click="toggleSidebarRight()">
          Show Sidebar
          <i class="icon ion-ios-arrow-right"></i>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        menuButtonText: '<a class="button button-icon icon ion-navicon"></a>',
        sidebar: undefined,
        sidebarRight: undefined
      }
    },

    mounted() {
      let template = `
        <p style="font-size: 13px;">
        No man is an island,<br>
        entire of itself.<br>
        Every man is a piece of the continent,<br>
        a part of the main.<br>
        If a clod be washed away by the sea,<br>
        Europe is the less,<br>
        as well as if a promontory were,<br>
        as well as if a manor of thy friend's or of thine own were.<br>
        Any man's death diminishes me.<br>
        Because I am involved in mankind.<br>
        And,<br>
        therefore,<br>
        never send to know for whom the bells tolls,<br>
        it tolls for thee.<br>
        </p>
      `
      this.sidebar = $sidebar.fromTemplate(template, {position: 'left'})

      this.sidebarRight = $sidebar.fromTemplate('<h5>右边栏</h5>', {position: 'right'})
    },

    destroyed() {
      $sidebar.destroy()
    },

    methods: {
      toggleSidebar() {
        this.sidebar.toggle()
      },

      toggleSidebarRight() {
        this.sidebarRight.toggle()
      }
    }
  }
</script>
