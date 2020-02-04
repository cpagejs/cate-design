# ui-vue前端UI框架

框架基于vue2开发

## 安装
```
npm install --save ui-vue

全局引入
import 'ui-vue/dist/css/index.css';
import * as ui-vue from 'ui-vue';
Object.keys(ui-vue.default).forEach(key=>{
  Vue.use(ui-vue.default[key]);
});
```

## 1，cBar 水平进度条组件
```
import { cBar } from 'ui-vue';

<c-bar percent='20' color="#f60"></c-bar>
```
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| percent | 类型String  默认'' | 进度条的百分比 |
| color | 类型String  默认'#FF6E4E' | 进度条的颜色 |

## 2，cButton 按钮组件
```
import { cButton } from 'ui-vue';

<c-button text="点击" @onClick="buttonClick" type="primary"></c-button>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| text | 类型String  默认'' | 按钮文字 |
| color | 类型String  默认'#448FF2' | 按钮颜色 |
| disabled | 类型Boolean  默认false | 按钮是否允许点击 |
| type | default/primary/warning，默认default | 按钮类型 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 返回按钮点击事件 |

## 3，cButtonFooter 底部按钮组件
```
import { cButtonFooter } from 'ui-vue';

<c-button-footer text="点击" @onClick="buttonClick"></c-button-footer>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| text | 类型String  默认'' | 按钮文字 |
| color | 类型String  默认'#448FF2' | 按钮颜色 |
| disabled | 类型Boolean  默认false | 按钮是否允许点击 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 返回按钮点击事件 |

## 4，cCircle 水平进度条组件
```
import { cCircle } from 'ui-vue';

<c-circle percent='100'></c-circle>
```
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| percent | 类型String  默认'' | 进度条的百分比 |
| percent | 类型String  默认'' | 进度条的百分比 |
## 5，cConfirm 确认框组件
```
import { cConfirm } from 'ui-vue';

 <confirm ref="myConfirm" confirm-text="提交" @confirm="confirmFn()">
    <div slot="inner">
        inner test
    </div>
</confirm>

this.$refs.myConfirm.show();
this.$refs.myConfirm.hide();
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| type | 类型Number  默认1 | 弹窗显示类型--1：普通确认框; 2：支持顶部背景图，按钮组有空隙; 3：弹窗里面没有内容，自由发挥 |
| showBtn | 类型Boolean  默认true | 是否显示默认按钮 |
| showCancelBtn | 类型Boolean  默认true | 是否显示取消按钮 |
| confirmText | 类型String  默认‘确定’ | 确认按钮名称 |
| cancelText | 类型String  默认‘取消’ | 取消按钮名称 |
| cancelBtnStyle | 类型Object 默认{} | 取消按钮样式 例：{'marginTop':'10px'} |
| confirmBtnStyle | 类型Object 默认{} | 确认按钮样式 例：{'marginTop':'10px'} |
| innerStyle | 类型Object 默认{} | 确认按钮样式 例：{'marginTop':'10px'} |
| showBg | 类型Boolean  默认true | 是否显示弹窗遮罩层 |
| bgColor | 类型String  默认‘rgba(0,0,0,0.4)’ | 弹窗遮罩层颜色 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| confirm | 确认按钮点击事件 |
| cancel | 取消按钮点击事件 |

## 6，cHeaderBack 顶部导航组件
```
import { cHeaderBack } from 'ui-vue';
<c-header-back title="详情页" @onBack="backFn"></c-header-back>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| title | 类型String  默认'' | 导航标题 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 返回按钮点击事件 |

## 7，cInput 输入框组件
```
import { cInput } from 'ui-vue';
<c-input ref="input1"  @onInput="inputFn" @onBlur="blurFn"></c-input>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| placeholder | 类型String  默认'请输入' | placeholder值 |
| value | 类型String  默认'' | 输入框默认值 |
| label | 类型String  默认'' | label值 |
| length | 类型Number  默认20 | 最多可输入的字符长度 |
| disabled | 类型Boolean  默认false | 是否禁止输入 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onInput | input输入时候的事件，返回值value |
| onBlur | input失去焦点的事件，返回值value |

## 8，cInputPassword 密码输入框组件（可显示密码）
```
import { cInputPassword } from 'ui-vue';
<c-input-password ref="input1"  @onInput="inputFn" @onBlur="blurFn"></c-input-password>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| placeholder | 类型String  默认'请输入' | placeholder值 |
| value | 类型String  默认'' | 输入框默认值 |
| label | 类型String  默认'' | label值 |
| length | 类型Number  默认20 | 最多可输入的字符长度 |
| disabled | 类型Boolean  默认false | 是否禁止输入 |
| showToggle | 类型Boolean  默认true | 是否显示右侧切换图标 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onInput | input输入时候的事件，返回值value |
| onBlur | input失去焦点的事件，返回值value |

## 9，cItem 列表组件
```
import { cItem } from 'ui-vue';
<c-item :has-left-icon="hasIcon" left-icon="leftIcon.png" left-text="测试" right-text="10" @onClick="handelC()"></c-item>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| hasLeftIcon | 类型Boolean  默认true | 判断左侧是否有图标 |
| hasRightIcon | 类型Boolean  默认true | 判断右侧是否有图标 |
| leftIcon | 类型String  默认'' | 左侧图标，图标位置位于src/assets/img/icon/ |
| leftText | 类型String  默认'' | 左侧文案 |
| rightText | 类型String  默认'' | 右侧文案 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 点击事件 |

## 10，cLoading loading组件
```
import { cLoading } from 'ui-vue';
<c-loading color="#f60"></c-loading>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| color | 类型String  默认'#6284e2' | loading颜色 |

## 11，cScrollAble 页面scroll组件
```
import { cScrollAble } from 'ui-vue';
 <c-scroll-able @pullUp="pullUpFn" @pullDown="pullDownFn" ref="scrollList" :data="data" :bottom-tip-show="bottomTipShow">
    <div>xxx</div>
</c-scroll-able>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| topTipShow | 类型Boolean  默认true | 是否显示 上拉加载数据
| bottomTipShow | 类型Boolean  默认false | 是否显示 下拉加载数据
| canPullUp | 类型Boolean  默认true | 是否允许上拉加载数据
| canPullDown | 类型Boolean  默认true | 是否允许下拉加载数据
| data | 类型Any | 默认[] | 列表数据，用于数据监听，如果数据为空则呈现loading状态
| noDataType | 类型String 默认'1' | data数据为空时候，展示的缺省页面

### 事件
| 事件 | 作用 |
| :------ | :------ |
| pullUp | 上拉时候事件响应 |
| pullDown | 下拉时候事件响应 |

## 12，cScrollX 左右滑动组件
```
import { cScrollX } from 'ui-vue';

<c-scroll-x>
  <div class="item">
    xxx
  </div>
</c-scroll-x>
```

## 13，cSlide 抽屉组件
```
import { cSlide } from 'ui-vue';
<slide ref="mySlider">
    内容
</slide>
```
### 事件
| 事件 | 作用 |
| :------ | :------ |
| show | 打开侧滑，this.$refs.mySlider.show() |
| hide | 关闭侧滑，this.$refs.mySlider.hide() |

## 14，cSwiper 图片切换组件
```
import { cSwiper } from 'ui-vue';
<c-swiper :img-list="imgList" page-style="dot" page-pos="center" height="3rem"></c-swiper>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| imgList | 类型Array 默认[] | 图片列表信息 |
| pageStyle | 类型String  默认'dot' | 分页器类型，‘dot’  'line' |
| pagePos | 类型String 默认'center' | 分页器位置，'left'   'center'   'right' |
| height | 类型String 默认'300px' | 图片高度 |

## 15，cSwitch 开关组件
```
import { cSwitch } from 'ui-vue';
<c-switch ref="mySwitch" :checked="checked"></c-switch>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| color | 类型String | 默认'#a0a0a0' 未选中时候颜色 |
| activeColor | 类型String | 默认'#448ff2' 选中时候颜色 |
| checked | 类型Boolean | 默认false 是否选中 |
| disabled | 类型Boolean | 默认false 是否可以选择 |

## 16，cTabs tab切换组件
```
import { tabs, tabItem } from 'ui-vue';
<tabs @onClick="tabClick" :active-index="activeIndex" active-color="#f60" icon-width="0.4rem">
    <tab-item 
        title="转让中" 
        top-icon="login_password_visible.png" 
        active-top-icon="login_password_invisible.png"
    >
        转让中
    </tab-item>
    <tab-item 
        title="可转让"
        top-icon="login_password_visible.png" 
        active-top-icon="login_password_invisible.png"
    >
        可转让
    </tab-item>
</tabs>
```
### tabs组件属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| activeIndex | 类型Number 默认0 | 默认选中的tab |
| normalColor | 类型String 默认'#333' | 选项卡默认字体和下划线颜色 |
| activeColor | 类型String 默认'#448FF2' | 选项卡选中时候字体和下划线颜色 |
| showBorderRight | 类型Boolean  默认false | 是否显示右侧线条，border-right |
| showBottomLine | 类型Boolean  默认true | 是否显示底部下划线 |
| iconWidth | 类型String 默认'40px' | icon图标宽度 |
| iconWidth | 类型String 默认'40px' | icon图标高度 |
| position | 类型String 默认'normal' | tab位置，normal在文档流里，top最顶部，bottom最底部 |

### tab-item 组件属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| title | 类型String | 默认'' tab标题，可以是字符串，也可以是html |
| topIcon | 类型String | 默认'' 默认显示的图标 |
| activeTopIcon | 类型String | 默认'' 点击状态下显示的图标 |


## 17，cTimeCircle 圆环倒计时组件
```
import { cTimeCircle } from 'ui-vue';
<c-time-circle :timer="timer"></c-time-circle>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| timer | 类型Number | 默认60 倒计时时间 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| timeCircle | 倒计时结束时候派发的事件，使用时候先引入event |

## 18，cTimeCount 普通倒计时组件
```
import { cTimeCount } from 'ui-vue';
<c-time-count :date="date"></c-time-count>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| date | 类型String  默认'' | 日期格式 |

## 19，提示框组件
```
需要全局引入可用
this.$toast({
    text: 'loading'
})
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| text | 类型String | 默认'loading' 提示文案 |
| shape | 类型String | 默认'square' 提示框形状，'square'正方形，'rect'长方形 |
| type | 类型String | 默认'tip' 提示框icon显示类型，'tip'：没有icon，'success'：成功,  'error'：失败，'loading'：loading |
| delay | 类型Number | 默认1500 提示框显示时间，单位ms |
| showBg | 类型Boolean | 默认false 是否显示遮罩层 |
| position | 类型String | 默认'center' 提示框显示位置，'center'：居中，'top'：顶部，'bottom'：底部 |



