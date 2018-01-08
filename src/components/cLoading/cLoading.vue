/** loading组件
 * @author chenhaozhi
*/
<template>
    <div class="c-loading">
        <div class="loading-container container1">
            <div class="circle1" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle2" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle3" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle4" :style="{backgroundColor:`${color}`}"></div>
        </div>
        <div class="loading-container container2">
            <div class="circle1" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle2" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle3" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle4" :style="{backgroundColor:`${color}`}"></div>
        </div>
        <div class="loading-container container3">
            <div class="circle1" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle2" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle3" :style="{backgroundColor:`${color}`}"></div>
            <div class="circle4" :style="{backgroundColor:`${color}`}"></div>
        </div>
    </div>
</template>
<script>
    export default {
        name: "cLoading",
        props: {
            color: {
                type: String,
                default: "#6284e2"
            }
        }
    };
</script>
<style lang="scss">
    .c-loading {
        width: 40px;
        height: 40px;
        position: relative;
        margin: 0 auto;
        .loading-container {
            position: absolute;
            width: 100%;
            height: 100%;
            div {
                width: 6px;
                height: 6px;
                background-color: #6284e2;
                border-radius: 100%;
                position: absolute;
                animation: bouncedelay 1.2s infinite ease-in-out;
                animation-fill-mode: both;
            }
        }
        .circle1 {
            top: 0;
            left: 0;
        }
        .circle2 {
            top: 0;
            right: 0;
        }
        .circle3 {
            right: 0;
            bottom: 0;
        }
        .circle4 {
            left: 0;
            bottom: 0;
        }
        .container1 {
            .circle2 {
                animation-delay: -0.9s;
            }
            .circle3 {
                animation-delay: -0.6s;
            }
            .circle4 {
                animation-delay: -0.3s;
            }
        }
        .container2 {
            transform: rotateZ(45deg);
            .circle1 {
                animation-delay: -1.1s;
            }
            .circle2 {
                animation-delay: -0.8s;
            }
            .circle3 {
                animation-delay: -0.5s;
            }
            .circle4 {
                animation-delay: -0.2s;
            }
        }
        .container3 {
            transform: rotateZ(90deg);
            .circle1 {
                animation-delay: -1s;
            }
            .circle2 {
                animation-delay: -0.7s;
            }
            .circle3 {
                animation-delay: -0.4s;
            }
            .circle4 {
                animation-delay: -0.1s;
            }
        }
    }

    @keyframes bouncedelay {
        0%,
        80%,
        100% {
            transform: scale(0);
        }
        40% {
            transform: scale(1);
        }
    }
</style>