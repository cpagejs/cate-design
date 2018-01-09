/** 导航条--返回
 * @author chenhaozhi
*/

<template>
    <header class="c-header-back">
        <i @click="back"></i>
        <p class="ellipsis">{{title}}</p>
    </header>
</template>

<script>
    export default {
        name: 'cHeaderBack',
        components: {

        },
        props: {
            title: {
                default: ''
            }
        },
        data(){
            return {

            }
        },
        methods: {
            back(){
                this.$router && this.$router.go(-1);
                this.$emit('onBack');
            }
        }
    }
</script>

<style lang="scss">
    .c-header-back {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: #fff;
        box-shadow: 0 1px 0 #efefef;
        border-bottom: 1px #ccc solid;
        z-index: 10;
        i {
            position: absolute;
            left: 10px;
            top: 12px;
            width: 25px;
            height: 25px;
            line-height: 20px;
            background: url(./left.png) no-repeat left center;
            background-size: cover;
        }
        p {
            width: 100%;
            text-align: center;
            font-size: 22px;
        }
    }
</style>