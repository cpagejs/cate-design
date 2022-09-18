# cate-design 一个基于 Vue3+TypeScript 的前端UI框架，简单易用
cate-design 一个基于 Vue3+TypeScript 的前端UI框架，简单易用，适合一般的H5项目。组件不断完善中

## 文档地址：[https://cpagejs.github.io/ui-vue3/](https://cpagejs.github.io/ui-vue3/)

备注：1.x版本是基于 Vue2.x 开发，2.x版本是基于 vue3+ts 开发
## 安装
```js
npm install --save cate-design
```

## 注册
```js
import { createApp } from 'vue';
// 然后全局引入css
import 'cate-design/dist/index.css';

// 可以全局注入组件
import cateDesign from 'cate-design';

const app = createApp(App);
app.use(cateDesign);
app.mount('#app');
```

## 1，cBar 水平进度条组件
```js
import { cBar } from 'cate-design';

<c-bar percent='20' color="#f60"></c-bar>
```
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| percent | 类型String  默认'' | 进度条的百分比 |
| color | 类型String  默认'#FF6E4E' | 进度条的颜色 |

## 2，cButton 按钮组件
```js
import { cButton } from 'cate-design';

<c-button text="btn text" type="primary" text-color="#fff" size="lg" @on-click="btnClick"/>
```
### 属性
| 属性 | 类型 | 作用 | 
| :------ | :------ | :------ | 
| text | 类型String  默认'' | 按钮文字 | 
| backgroundColor | 类型String | 自定义按钮颜色 | 
| textColor | 类型String | 自定义文字颜色 | 
| disabled | 类型Boolean  默认false | 按钮是否允许点击 | 
| type | default/primary/danger/link，默认default | 按钮类型 | 
| size | sm/lg  默认sm | 按钮大小 | 

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 返回按钮点击事件 |

## 3，cButtonFooter 底部悬浮按钮组件
```js
import { cButtonFooter } from 'cate-design';

<c-button-footer text="点击" @onClick="buttonClick"></c-button-footer>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| text | 类型String  默认'' | 按钮文字 |
| backgroundColor | 类型String | 自定义按钮颜色 | 
| textColor | 类型String | 自定义文字颜色 | 
| disabled | 类型Boolean  默认false | 按钮是否允许点击 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 返回按钮点击事件 |

## 4，cCircle 圆环进度条组件
```js
import { cCircle } from 'cate-design';

<c-circle percent='100'></c-circle>
```
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| percent | 类型String  默认'' | 进度条的百分比 |

## 5，cConfirm 确认框组件
```js
import { cConfirm } from 'cate-design';

 <confirm isShow="true" confirm-text="提交" @confirm="confirmFn()">
    <template #inner>
        inner test
    </template>
</confirm>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ | 
| isShow | 类型Boolean  默认true | 是否显示弹窗 |
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
```js
import { cHeaderBack } from 'cate-design';
<c-header-back title="详情页" @onBack="backFn"></c-header-back>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| title | 类型String  默认'' | 导航标题 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onBack | 返回按钮点击事件 |

## 7，cInput 输入框组件
```js
import { cInput } from 'cate-design';
<c-input ref="input1"  @onInput="inputFn" @onBlur="blurFn"></c-input>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| placeholder | 类型String  默认'请输入' | placeholder值 |
| value | 类型String  默认'' | 输入框默认值 |
| label | 类型String  默认'' | label值 |
| length | 类型Number  默认200 | 最多可输入的字符长度 |
| disabled | 类型Boolean  默认false | 是否禁止输入 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onInput | input输入时候的事件，返回值value |
| onBlur | input失去焦点的事件，返回值value |

## 8，cInputPassword 密码输入框组件（可显示密码）
```js
import { cInputPassword } from 'cate-design';
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
```js
import { cItem } from 'cate-design';
<c-item :has-left-icon="hasIcon" left-icon="leftIcon.png" left-text="测试" right-text="10" @onClick="handelC()"></c-item>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| avatar | 类型String  默认'' | 左侧图标 |
| title | 类型String  默认'' | 左侧文案 |
| description | 类型String  默认'' | 列表元素的描述内容 |
| rightText | 类型String  默认'' | 右侧文案 |
| rightArrow | 类型Boolean  默认true | 判断右侧是否有图标 |

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onClick | 点击事件 |

## 10，cLoading loading组件
```js
import { cLoading } from 'cate-design';
<c-loading color="#f60"></c-loading>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| color | 类型String  默认'#6284e2' | loading颜色 |
| styleLoading | 类型Object  默认{} | 自定义样式 |

## 11，cSlide 抽屉组件
```js
import { cSlide } from 'cate-design';
<c-slide>
    内容
</c-slide>
```
### 事件
| 事件 | 作用 |
| :------ | :------ |
| onBgClick | 背景区域被点击后触发 |

## 12，cSwitch 开关组件
```js
import { cSwitch } from 'cate-design';
<c-switch ref="mySwitch" :checked="checked"></c-switch>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| color | 类型String | 默认'#a0a0a0' 未选中时候颜色 |
| activeColor | 类型String | 默认'#448ff2' 选中时候颜色 |
| checked | 类型Boolean | 默认false 是否选中 |
| disabled | 类型Boolean | 默认false 是否可以选择 |

## 13，cTabs tab切换组件
```js
import { cTabs, cTabPane } from 'cate-design';

<c-tabs v-model="currentTabName" v-bind="args">
    <c-tab-pane name="React">
    <template #title>
        <b style="color: red">TabOne</b>
    </template>
    content1
    </c-tab-pane>
    <c-tab-pane name="Vue">content2</c-tab-pane>
    <c-tab-pane name="Cpage">content3</c-tab-pane>
</c-tabs>
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
| name | 类型String | 默认'' tab标题，可以是字符串 |


## 14，cTimeCircle 圆环倒计时组件
```js
import { cTimeCircle } from 'cate-design';
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

## 15，cTimeCount 普通倒计时组件
```js
import { cTimeCount } from 'cate-design';
<c-time-count :date="date"></c-time-count>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| date | 类型String  默认'' | 日期格式 |

## 16，menu菜单框组件
```js
<c-menu defaultIndex="0" mode="vertical" :onSelect="handleClick">
    <c-menu-item>link1</c-menu-item>
    <c-sub-menu title="下拉">
        <c-menu-item>link2-1</c-menu-item>
    </c-sub-menu>
    <c-menu-item>link3</c-menu-item>
</c-menu>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| defaultIndex | 类型String  默认'0' | 默认选中的菜单 | 
| mode | 类型String  默认'0' | 水平或者垂直, "horizontal" | "vertical" | 

### 事件
| 事件 | 作用 |
| :------ | :------ |
| onSelect | 菜单被点击时候调用 |

## 17，tree树形组件

## 18，提示框组件
```js
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
