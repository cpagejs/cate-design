/** 密码输入框
 * @author chenhaozhi
*/

<template>
    <div class="c-input-password" :class="{disabled: disabled}">
        <span>{{label}}</span>
        <input type="password"
            ref="input"
            v-bind:value="value"
            @input="_input()"
            @blur="_blur()"
            :length="length"
            :placeholder="placeholder"
            autocapitalize="off"
            :class="{disabled: disabled}"
            v-if="showPwd"
         />
         <input type="text"
            ref="input"
            v-bind:value="value"
            @input="_input()"
            @blur="_blur()"
            :length="length"
            :placeholder="placeholder"
            autocapitalize="off"
            :class="{disabled: disabled}"
            v-if="!showPwd"
         />
        <em 
            class="input-pwd-eye" 
            :class="{invisible: invisible}" 
            v-if="showToggle"
            @click="toggle">
        </em>
    </div>
</template>

<script>
    import util from 'common/js/util';

    export default {
        name: 'cInputPassword',
        props: {
            value: {
                type: String,
                default: ''
            },
            label: {
                default: '',
                type: String
            },
            length: {
                default: 20,
                type: Number
            },
            placeholder: {
                default: '请输入密码',
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            showToggle: {
                type: Boolean,
                default: true
            }
        },
        data(){
            return {
                showPwd: {
                    type: Boolean,
                    default: true
                },
                invisible: false
            }
        },
        methods: {
            _input(){
                this.$emit('onInput', this.$refs.input.value);
            },
            _blur(){
                this.$emit('onBlur', this.$refs.input.value);
            },
            focus() {
                this.$refs.input.focus();
            },
            val(){
                return this.$refs.input.value;
            },
            toggle(){
                const val = this.$refs.input.value;
                this.showPwd = !this.showPwd;
                this.invisible = !this.invisible;
                setTimeout(()=>{  
                    this.$refs.input.value = val;
                },0);
            }
        }
    }
</script>

<style lang="scss">
    @import '../../common/css/mixin'; 
    .c-input-password {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        height: 80px;
        line-height: 80px;
        border-bottom: 1px solid #e0e0e0;
        background: #fff;
        &.disabled {
            background: $input-disabled;
        }
        span {
            display: inline-block;
            font-size: 30px;
            color: #333333;
            padding-top: 4px;
        }
        input {
            flex: 1;
            text-align: left;
            border: none;
            font-size: 30px;
            height: 30px;
            padding: 25px 0;
            &.disabled {
                background: $input-disabled;
            }
        }
        .input-pwd-eye {
            display: inline-block;
            width: 50px;
            height: 50px;
            background: url(./icon/eye.png);
            background-size: cover;
            &.invisible {
                background: url(./icon/eye2.png);
                background-size: cover;
            }
        }
    }
</style>