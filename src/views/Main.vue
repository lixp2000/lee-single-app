<template lang="pug">
  .layout
    Layout(:style="{minHeight: '100vh'}")
      Sider(collapsible, :collapsed-width="78", v-model="isCollapsed")
        Menu(active-name="1-1", theme="dark", width="auto", :class="menuitemClasses")
          MenuItem(name="1-1", to="/vue/#")
            Icon(type="ios-navigate")
            span Option 1
          
          MenuItem(name="1-2")
            Icon(type="search")
            span Option 2

      Layout
        Header(:style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}")
        Content(:style="{padding: '0 16px 16px'}")
          .mT-20
            #single-vue.single-spa-vue
              #vue
</template>
<script>
export default {
  data() {
    return {
      isCollapsed: false
    }
  },
  computed: {
    menuitemClasses: function() {
      return ['menu-item', this.isCollapsed ? 'collapsed-menu' : '']
    }
  }
}
</script>
<style lang="stylus" scoped>
.single-spa-vue
  width 100%
  height 400px

.layout-con
  height: 100%
  width: 100%

.menu-item span
  display: inline-block
  overflow: hidden
  width: 69px
  text-overflow: ellipsis
  white-space: nowrap
  vertical-align: bottom
  transition: width .2s ease .2s

.menu-item i
  transform: translateX(0px)
  transition: font-size .2s ease, transform .2s ease
  vertical-align: middle
  font-size: 16px

.collapsed-menu span
  width: 0px
  transition: width .2s ease

.collapsed-menu i
  transform: translateX(5px)
  transition: font-size .2s ease .2s, transform .2s ease .2s
  vertical-align: middle
  font-size: 22px
</style>
