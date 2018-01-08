/** 输入框，字数限制
 * @author chenhaozhi
*/

<template>
    <div class="c-input-text" :class="{disabled: disabled}">
        <span>{{label}}</span>
        <input type="text"
            ref="input"
            v-bind:value="value"
            @input="parseText()"
            @blur="_blur()"
            :length="length"
            :placeholder="placeholder"
            :class="{disabled: disabled}"
            autocapitalize="off" />
    </div>
</template>

<script>
    import util from 'common/js/util';

    export default {
        name: 'cInput',
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
                default: '请输入',
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {
                
            }
        },
        methods: {
            parseText(){
                const length = parseInt(this.length);
                if(this.$refs.input.value.length > length){
                    this.$refs.input.value = this.$refs.input.value.substring(0, length);
                }
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
            }
        }
    }
</script>

<style lang="scss">
    @import '../../common/css/mixin';   
    .c-input-text {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
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
        }
        input {
            text-align: left;
            border: none;
            font-size: 30px;
            width: 300px;
            height: 30px;
            padding: 25px 0;
            &.disabled {
                background: $input-disabled;
            }
        }
    }
</style>