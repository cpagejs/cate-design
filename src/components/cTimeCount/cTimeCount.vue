/**@author 夏小宅
* 倒计时效果
 */
<template>
  <section class="c-time-count">
      <h1>
          <span>{{timeData.hour}}</span><em> : </em><span>{{timeData.minute}}</span><em> : </em><span>{{timeData.second}}</span>
      </h1>
      <p>预售倒计时</p>
  </section>
</template>

<script>
    export default {
        name: "cTimeCount",
        data() {
            return {
                timeData: {
                    hour: '',
                    minute: '',
                    second: ''
                }
            };
        },
        props: {
            date: {
                type: String,
                default: '2019-10-16 10:15:26'
            }
        },
        methods: {
            timeCount(date){
                var now = new Date(),
                    endDate = new Date(Date.parse(date)),
                    leftTime = endDate.getTime()-now.getTime(),
                    leftsecond = parseInt(leftTime/1000),
                    day = Math.floor(leftsecond/(60*60*24)),
                    hour = Math.floor((leftsecond-day*24*60*60)/3600),
                    hour = hour<10 ? '0'+hour : hour,
                    minute = Math.floor((leftsecond-day*24*60*60-hour*3600)/60),
                    minute = minute<10 ? '0'+minute : minute,
                    second = Math.floor(leftsecond-day*24*60*60-hour*3600-minute*60),
                    second = second<10 ? '0'+second : second; 
                this.timeData =  {
                    hour: hour,
                    minute: minute,
                    second: second
                }
            },
        },
        mounted() {
            const self = this;
            clearInterval(timer);
            var timer = setInterval(()=>{
                if(Date.parse(self.date) < Date.parse(new Date())){
                    clearInterval(timer);
                }else {
                    self.timeCount(self.date);
                }
            },1000);
        }
    };
</script>

<style lang="scss">
    .c-time-count {
        h1 {
            text-align: center;
        }
        span {
            display: inline-block;
            padding: 3px 5px;
            font-size: 32px;
            color: #fff;
            background: #FF9140;
            border-radius: 2px;
            em {
                display: inline-block;
                font-size: 80px;
                font-weight: 800;
                color: #4A4A4A;
                vertical-align: top;
            }
        }
        p {
            color: #FF9140;
            font-size: 32px;
            padding-top: 5px;
            text-align: center;
        }
    }
</style>