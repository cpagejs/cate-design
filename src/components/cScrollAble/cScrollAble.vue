/**@author 夏小宅
 * 页面滚动组件
 */
<template>
    <section class="screen-fixed scroll-able" ref="myScrollAble">
        <div v-show="!showDataStatus(data)">
            <top-tip :show="topTipShow" :ready="topReady"></top-tip>
            <slot></slot>
            <div v-if="!showDataStatus(data)">
                <bottom-tip :show="bottomTipShow" :status="bottomStatus"></bottom-tip>
            </div>
        </div>
        <div class="loading-style" v-show="loadingShow && showDataStatus(data)"><loading></loading></div>
        <div class="not-data-wraper" v-if="noData">
            <slot name="no-data"></slot>
        </div>
    </section>
</template>
<script>
    import { event } from 'common/js/event.js';
    import BScroll from "better-scroll";
    import topTip from './top-tip.vue';
    import bottomTip from './bottom-tip.vue';

    const props = {
        props: ['data']
    };

    export default {
        name: "cScrollAble",
        mixins: [props],
        components: {
            topTip,
            bottomTip
        },
        props: {
            topTipShow: {
                type: Boolean,
                default: true
            },
            bottomTipShow: {
                type: Boolean,
                default: false
            },
            canPullUp: {
                type: Boolean,
                default: true
            },
            canPullDown: {
                type: Boolean,
                default: true
            },
            noDataType: {
                type: String,
                default: '1'
            }
        },
        data(){
            return {
                loadingShow: true,
                pullUp: false,
                pullDown: false,
                noData: false,
                topReady: true,
                bottomStatus: 'more',
                showInfo: false
            }
        },
        mounted() {
            const self = this;
            function runInit(){
                setTimeout(() => {
                    self._initScroll();
                }, 200);
            }
            runInit();
            event.$on('tabChange',(msg)=>{
                setTimeout(() => {
                    if(self.scroll.scrollerWidth == 0){
                        self.refresh();
                    }
                }, 200);
            });
        },
        methods: {
            _initScroll() {
                const self = this;
                this.scroll = new BScroll(this.$refs.myScrollAble, {
                    probeType: 1,
                    scrollY: true,
                    click: true
                });
                this.scroll.on('scroll', (pos)=> {
                    if(pos.y > 100) {
                        self.topReady = false;
                        self.pullUp = true;
                    }else {
                        self.pullUp = false;
                    }
                });
                this.scroll.on('scrollEnd', (pos)=>{
                    self.topReady = true;
                    if(self.canPullUp && self.pullUp && pos.y == 0){
                        self.$emit('pullUp');
                    }
                    if(self.canPullDown){
                        if (this.scroll.y <= (this.scroll.maxScrollY + 50)) {
                            this.$emit('pullDown');
                        }
                    }
                });
                this.scroll.on('touchEnd', (pos)=>{
                    self.$emit('touchEnd', {
                        x: pos.x,
                        y: Math.abs(pos.y),
                        height: Math.abs(this.scroll.maxScrollY)
                    });
                });
            },
            refresh() {
                this.scroll && this.scroll.refresh();
            },
            showDataStatus(data){
                return JSON.stringify(data) == '' || JSON.stringify(data) == '' || JSON.stringify(data) == '[]' || JSON.stringify(data) == '{}'
            }
        },
        watch: {
            data: {
                handler: function (val, oldVal) { 
                    const self = this;
                    setTimeout(()=>{
                        self.refresh();  
                    },50);
                },
                deep: true
            },
        }
    };
</script>
<style lang="scss">
    .scroll-able {
        .not-data-wraper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            
        }
        .loading-style {
            text-align: center;
            margin-top: 150px;
        }
    }
</style>