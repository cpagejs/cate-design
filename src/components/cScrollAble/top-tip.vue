<template>
    <header class="top-tip" v-if="show">
        <div class="tip tip-top-ready" v-if="ready"><em></em><p>下拉即可刷新...</p></div>
        <div class="tip tip-top-go" v-else><em></em><p>松开立即刷新...</p></div>
    </header>
</template>

<script>
  export default {
      name: 'topTip',
      components: {

      },
      data() {
          return {
              topTip: ''
          }
      },
      props: {
          show: {
              type: Boolean,
              default: true
          },
          ready: {
              type: Boolean,
              default: true
          }
      },
      methods: {

      }
  }
</script>

<style lang="scss">
    @import '../../common/css/mixin';

    .top-tip {
        position: absolute;  
        top: -100px;  
        left: 0;
        width: 100%;  
        height: 44px;  
        line-height: 44px;   
        text-align: center;
        font-size: 30px;
        color: #555;
        z-index: 1; 
        .tip {
            @include flex-justify();
            em {
                display: inline-block;
                width: 44px;
                height: 44px;
                line-height: 44px;
                margin-right: 20px;
            }
        }
        .tip-top-ready {
            em {
                transform: rotate(180deg);
                background: url(./icon/down.png) no-repeat center center;
                background-size: cover;
            }
        }
        .tip-top-go {
            em {
                background: url(./icon/down.png) no-repeat center center;
                background-size: cover;
            }
        }
    }
</style>