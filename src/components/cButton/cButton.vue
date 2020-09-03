/**普通按钮组件
 * @author 夏小宅
 */
<template>
    <h1 
        class="c-button" 
        :class="[{'c-button-disabled': disabled}, `c-button-${type}`]"
        :style="styleObj"  
        @click="buttonClick"
    >{{text}}</h1>
</template>

<script>
  export default {
      name: 'cButton',
      components: {

      },
      data() {
          return {
              styleObj: {}
          }
      },
      props: {
          text: {
              type: String,
              default: ''
          },
          color: {
              type: String,
              default: ''
          },
          disabled: {
              type: Boolean,
              default: false
          },
          type: {
              type: String,
              default: 'default'
          }
      },
      created(){
          this.styleObj = {
              backgroundColor: this.disabled ? '#D0D0D0' : this.color,
              pointerEvents: this.disabled ? 'none' : 'auto'
          };
      },
      watch:{
        disabled(val){
            this.styleObj = {
                backgroundColor: val ? '#D0D0D0' : this.color,
                pointerEvents: val ? 'none' : 'auto'
            }
        }
      },
      methods: {
          buttonClick(){
              this.$emit('onClick');
          }
      }
  }
</script>

<style lang="scss">
    .c-button {
        width: 100%;
        height: 40px;
        line-height: 40px;
        color: #fff;
        font-size: 20px;
        text-align: center;
        border-radius: 6px;
        font-weight: normal;
    }
    .c-button-primary {
        background-color: #448FF2;
    }
    .c-button-default {
        color: #000;
        background-color: #fff;
        border: 1px solid rgba($color: #000000, $alpha: 0.08)
    }
    .c-button-warning {
        background-color: #e94f4f;
    }
</style>