/**
 * @author 夏小宅
 * 图片切换组件
 */
<template>
  <section class="c-swiper-section">
    <div v-if="imgList.length">
      <swiper :options="swiperOption" class="swiper-box" :style="{height: height}" ref="mySwiper">
        <swiper-slide class="swiper-item" v-for="item in imgList" :key="item.id">
          <img :src="item.picUrl" :alt="item['name']" @click="redirectUrl(item['redirectUrl'])">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination" :class="[`swiper-page-style-${pageStyle}`, `swiper-page-position-${pagePos}`]"></div>
      </swiper>
    </div>
    <div v-if="!imgList.length" class="swiper-not-show" :style="{height: height}">loading</div>
  </section>
  
</template>

<script>
  import { swiper, swiperSlide } from 'vue-awesome-swiper';

  export default {
    name: 'cSwiper',
    components: {
      swiper,
      swiperSlide
    },
    data() {
      return {
        swiperOption: {
          notNextTick: true,
          pagination: {
            el: '.swiper-pagination'
          },
          direction: 'horizontal',
          slidesPerView: 'auto',
          paginationClickable: true,
          spaceBetween: 30,
          mousewheelControl: true,
          autoplay : {
            disableOnInteraction: false,
          },
          loop: true,
          passiveListeners : false,
          preventClicks: false,
        }
      }
    },
    props: {
      imgList: {
        type: Array,
        default: function(){
          return [
            {
              picUrl: '',
              redirectUrl: '',
              name: ''
            }
          ]
        }
      },
      height: {
        type: String,
        default: '3rem'
      },
      // 分页类型, dot:点，bg:带透明背景，line:横线
      pageStyle: {
        type: String,
        default: 'dot'
      },
      pagePos: {
        type: String,
        default: 'center'
      }
    },
    computed: {
      swiper() {
        if(this.imgList.length){
          return this.$refs.mySwiper.swiper
        }
      }
    },
    methods: {
      redirectUrl(url){
        if(url != ''){
          window.location.href= url;
        }
      },
      startFn(){
        if(this.swiper){
          this.swiper.autoplay.running == true;
          this.swiper.autoplay.paused == false;
          this.swiper.autoplay.start();
        }
      },
      stopFn(){
        this.swiper && this.swiper.autoplay.stop();
      }
    }
  }
</script>

<style lang="scss">
  // @import '../../common/css/swiper.min.css';
  @import './index';
</style>