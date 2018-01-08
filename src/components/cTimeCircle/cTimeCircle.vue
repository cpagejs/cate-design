/**
 * @author chenhaozhi
 * 圆环倒计时组件
 */
<template>
    <div class="c-time-circle">
        <div class="circle" :class="{'clip-auto': clipAuto}">  
            <div class="percent left" v-bind:style="{transform: 'rotate('+ (360-rotate) +'deg)'}"></div>  
            <div class="percent right" :class="{wth0: wth0}"></div>  
        </div>  
        <div class="num"><span>{{time}}</span>s</div>
    </div>
</template>

<script>
    import { event } from 'common/js/event.js';
    export default {
        name: "cTimeCircle",
        data() {
            return {
                clipAuto: false,
                wth0: true,
                rotate: 0,
                time: 0
            };
        },
        props: {
            timer: {
                type: Number,
                default: 60
            }
        },
        created() {
            const self = this;
            clearInterval(loading);
            var loading = setInterval(()=>{  
                if(self.rotate >= 360){  
                    clearInterval(loading);
                    self.rotate = 360;
                    event.$emit('timeCircle');
                    return;
                }else if(self.rotate >= 180){  
                    self.clipAuto = true;
                    self.wth0 = false; 
                }  
                self.rotate += 360/self.timer;  
                self.time++;
            },1000);  
        },
        mounted() {}
    };
</script>

<style lang="scss">
    @import './index';
</style>