<!--
  博客默认顶部菜单栏
-->

<template>
    <el-container>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
    </el-container>
  </template>
  
  <script>
  import { useRouter } from 'vue-router'
  import { useStore } from 'vuex'
  import Footer from './DsFooter.vue'
  import Header from './DsHeader.vue'
  import Main from './DsMaa.vue'
  
  export default {
    components: {
        Header,
        Main,
        Footer
    },
    setup () {
      const menuEl = ref(null)
      const router = useRouter()
      const store = useStore()
      const toSearch = () => {
        router.push({
          name: 'BlogSearch'
        })
      }
      const toHome = () => {
        router.push({
          name: 'BlogHome'
        })
      }
      watchEffect(() => {
        if (menuEl.value?.childNodes) {
          // eslint-disable-next-line no-unused-expressions
          menuEl.value?.childNodes.forEach(item => {
            item.dataset.selected = (item.dataset.index === store.state.g.header.curSelected).toString()
          })
        }
        // console.log(store.state.g.header.curSelected)
      })
      return {
        toHome,
        toSearch,
        store,
        menuEl
      }
    }
  }
  </script>
  
  <style lang="less">
  </style>
  