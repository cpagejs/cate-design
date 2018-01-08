<template>
    <footer class="bottom-tip" v-if="show">
        <div v-if="status == 'done'">数据加载完毕</div>
        <div v-if="status == 'more'">查看更多</div>
        <div v-if="status == 'loading'">
            <loading></loading>
        </div>
    </footer>
</template>

<script>
  export default {
      name: 'bottomTip',
      components: {

      },
      data() {
          return {

          }
      },
      props: {
          show: {
              type: Boolean,
              default: true
          },
          status: {
              type: String,
              default: 'more'
          },
      },
      created(){

      },
      mounted(){
        
      },
      methods: {

      }
  }
</script>

<style lang="scss">
    .bottom-tip{
        width: 100%;
        height: 40px;
        line-height: 40px;
        text-align: center;
        font-size: 0.3rem;
        margin-top: 0.1rem;
        color: #777;
        background: #f2f2f2;
    }
</style>