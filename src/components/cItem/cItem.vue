/**@author chenhaozhi
item组件
*/
<template>
    <div class="c-cell-item" @click="onClickFn()">
        <div class="cell-left">
            <img :src="leftIconPic"
                class="cell-left-icon"
                v-if="hasLeftIcon"
            >
            <p class="cell-left-text">{{leftText}}</p>
        </div>
        <div class="cell-right">
            <span class="right-text">{{rightText}}</span>
            <em class="icon" v-if="hasRightIcon"></em>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'cItem',
        props: {
            hasLeftIcon: {
                type: Boolean,
                default: true
            },
            hasRightIcon: {
                type: Boolean,
                default: true
            },
            leftIcon: {
                type: String,
                default: ''
            },
            leftText: {
                type: String,
                default: 'leftText'
            },
            rightText: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                leftIconPic: ''
            }
        },
        created(){
            if(this.hasLeftIcon){
                this.leftIconPic = this.leftIcon ? $static + this.leftIcon : '';
            }
        },
        methods: {
            onClickFn(){
                this.$emit('onClick');
            }
        },
        mounted(){
        
        }
    }
</script>

<style lang="scss">
    @import '../../common/css/mixin';
    .c-cell-item {
        @include flex-justify(space-between);
        height: 50px;
        line-height: 50px;
        font-size: 20px;
        color: #333;
        padding-left: 20px;
        padding-right: 20px;
        background: #ffffff;
        border-bottom: 1px solid #E0E0E0;
        .cell-left {
            @include flex-justify(space-between);
            img {
                width: 40px;
                height: 25px;
                padding-right: 15px;
            }
        }
        .cell-right {
            @include flex-justify(space-between);
            .right-text {
                font-size: 20px;
                padding-left: 15px;
            }
            .icon {
                width: 30px;
                height: 30px;
                padding-right: 10px;
                background: url(./right.png) no-repeat right center;
                background-size: cover;
            }
        }
    }
</style>