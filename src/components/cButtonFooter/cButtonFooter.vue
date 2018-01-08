/**底部按钮组件
 * @author chenhaozhi
 */
<template>
    <h1 
        class="c-button-footer" 
        :class="[{'button-footer-disabled': disabled}]"
        :style="styleObj"  
        @click="buttonClick"
    >{{text}}</h1>
</template>

<script>
  export default {
      name: 'cButtonFooter',
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
              default: '#448FF2'
          },
          disabled: {
              type: Boolean,
              default: false
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
    .c-button-footer {
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 60px;
        line-height: 60px;
        color: #fff;
        font-size: 16px;
        text-align: center;
    }
</style>