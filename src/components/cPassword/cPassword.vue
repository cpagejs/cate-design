/** 六位密码输入框组件
 * @author 夏小宅
*/
<template>
    <div class="c-password" @click="focus">
        <input 
            ref="pwd" 
            type="tel" 
            maxlength="6" 
            class="password-style" 
            v-model="value" 
            :class="{'pwd-disabled': disabled}"
        />
        <ul class="pwd-wraper" :class="{'pwd-disabled': disabled}">
            <li><i v-if="valueLength > 0"></i></li>
            <li><i v-if="valueLength > 1"></i></li>
            <li><i v-if="valueLength > 2"></i></li>
            <li><i v-if="valueLength > 3"></i></li>
            <li><i v-if="valueLength > 4"></i></li>
            <li><i v-if="valueLength > 5"></i></li>
        </ul>
  </div>
</template>

<script>
    import { event } from 'common/js/event.js';

    export default {
        name: 'cPassword',
        props: {
            isFocus: {
                type: Boolean,
                default: true
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                value: "",
                valueLength: 0,
            }
        },
        watch: {
            value(curVal) {
                if(!this.disabled){
                    if (/[^\d]/g.test(curVal)) {
                        this.value = this.value.replace(/[^\d]/g, "");
                    } else {
                        this.valueLength = curVal.length;
                    }

                    if(curVal.length == 6){console.log(123)
                        event.$emit('password-end');
                    }
                }
                
            }
        },
        mounted(){
 
        },
        methods: {
            focus() {
                this.value = '';
                this.$refs.pwd.focus();
            },
            val(val){
                if(val){
                    this.value = val;
                }
                return this.value;
            },
            add(val){
                if(this.value.length < 6){
                    this.value += val;
                }
            }
        }
    }
</script>

<style lang="scss" >
    .c-password  {
        position: relative;
        .pwd-disabled {
            pointer-events: none;
            background: #e8e8e8;
        }
        .password-style {
            position: absolute;
            left:-100%;
            opacity: 0;
            z-index: -1;
        }
        .pwd-wraper{
            width: 100%;
            height: 44px;
            padding-bottom: 1px;
            margin: 0 auto;
            background: #fff;
            border: 1px solid #ddd;
            display: flex;
            cursor: pointer;
            &.pwd-disabled {
                pointer-events: none;
                background: #e8e8e8;
            }
            li {
                list-style-type: none;
                text-align: center;
                line-height: 44px;
                flex: 1;
                border-right: 1px solid #ddd;
                &:last-child {
                    border-right: 0;
                }
                i {
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                    background: #000;
                    display: inline-block;
                }
            }
        }
        
    }
</style>
