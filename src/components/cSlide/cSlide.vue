/**
 * @author 夏小宅
 * 侧滑组件
 */
<template>
    <section class="c-slide-container">
        <transition name="slide-fade">
            <div class="slide-inner" v-if="slideShow">
                <slot></slot>
            </div>
        </transition>
        <div class="slide-bg" 
            @click="hide($event)"
            v-if="slideShow"></div>
    </section>
</template>

<script>

    export default {
        name: 'cSlide',
        components: {
   
        },
        props: {

        },
        data(){
            return {
                slideShow: false
            }
        },
        created(){
            
        },
        methods: {
            show(){
                this.slideShow = true
            },
            hide(e){
                e.stopPropagation();
                this.slideShow = false;
            }
        }
    }
</script>

<style lang="scss">
    .c-slide-container {
        .slide-inner {
            position: fixed;
            top: 0;
            right: 0;
            bottom: 0;
            width: 500px;
            background: #fff;
            z-index: 100;
        }
        .slide-bg {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            width: 100%;
            background: rgba(0,0,0,0.5);
            z-index: 99;
        }
        .slide-fade-enter-active {
            transition: all .5s ease-in-out;
        }
        .slide-fade-leave-active {
            transition: all .5s ease-in-out;
        }
        .slide-fade-enter, .slide-fade-leave-active {
            transform: translateX(1200px);
            opacity: 0;
        }
    }
</style>