class util {
  // 设置大小
  setSize() {
    function setS() {
      const width = document.documentElement.clientWidth;
      const myWidth = 750 / 100;
      const fontSize = width / myWidth;
      document.documentElement.style.fontSize = fontSize + 'px';
    }
    setS();
    window.onresize = function () {
      setS();
    }
  }

  // 验证电话号码
  checkPhone(phone) {
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      return false;
    }
    return true;
  }


  formatDateTime(inputTime) {
    if (inputTime == undefined) {
      return ''
    }
    var date = new Date(parseInt(inputTime) * 1000);
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var minute = date.getMinutes();
    var second = date.getSeconds();
    minute = minute < 10 ? ('0' + minute) : minute;
    second = second < 10 ? ('0' + second) : second;
    return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
  }

  // 获取当前小时
  getHour() {
    const date = new Date();
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    return hour;
  }

  // 时间转时间戳
  getTime(hour) {
    var date = new Date();
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    var day = hour.split(' ')[0];
    var h = hour.split(' ')[1];
    d = (day == '今天') ? d : (d + 1);
    d = d < 10 ? ('0' + d) : d;

    var stringTime = y + '/' + m + '/' + d + ' ' + h + ':00';
    var timestamp2 = Date.parse(new Date(stringTime));
    timestamp2 = timestamp2 / 1000;
    return timestamp2;
  }

  // 根据时间获取时间戳
  getTimeStamp(time) {
    return Date.parse(time) / 1000;
  }

  // 根据当前时间戳
  getNowStamp(time) {
    return Date.parse(new Date) / 1000;
  }

  // 合并数组
  mergeArray() {
    return Array.prototype.concat.apply([], arguments)
  }
}

const Util = new util();
export default Util;