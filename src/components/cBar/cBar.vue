/**条形进度条组件
 * @author 夏小宅
 */
<template>
    <div class="c-progress-bar">  
        <span :style="{width: percentData, backgroundColor: color}"></span>  
    </div>  
</template>
<script>
export default {
    name: 'cBar',
    props: {
        percent: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#FF6E4E'
        }
    },
    data() {
        return {
            percentData: ''
        };
    },
    created(){
        this.percentData = '0%';
        setTimeout(()=>{
            this.percentData = this.percent + '%';
        },0);
    },
    watch: {
        percent(val){
            this.percentData = '0%';
            setTimeout(()=>{
                this.percentData = val + '%';
            },0);
        }
    }
}
</script>

<style lang="scss">
    .c-progress-bar{  
        position: relative;
        padding: 5px;  
        width: 100%;  
        height: 10px;  
        background-color: #dedede;  
        border-radius: 6px;  
        box-sizing: border-box;
        span {
            display: inline-block;  
            height: 10px;   
            width: 0;  
            border-radius: 6px;  
            transition: all 1s ease;
            position: absolute;  
            left: 0;
            top: 0;
            z-index: 1;  
        }
    }  
</style>
