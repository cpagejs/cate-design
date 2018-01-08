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

<c-button text="点击" @onClick="buttonClick"></c-button>
```
### 属性
| 属性 | 类型 | 作用 |
| :------ | :------ | :------ |
| text | 类型String  默认'' | 按钮文字 |
| color | 类型String  默认'#448FF2' | 按钮颜色 |
| disabled | 类型Boolean  默认false | 按钮是否允许点击 |

### 事件
| 属性 | 作用 |
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
| 属性 | 作用 |
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

## 5，cConfirm 确认框组件
```
import { cConfirm } from 'ui-vue';
```

## 6，cHeaderBack 顶部导航组件
```
import { cHeaderBack } from 'ui-vue';
```

## 7，cInput 输入框组件
```
import { cInput } from 'ui-vue';
```

## 8，cInputPassword 密码输入框组件（可显示密码）
```
import { cInputPassword } from 'ui-vue';
```

## 9，cItem 列表组件
```
import { cItem } from 'ui-vue';
```

## 10，cLoading loading组件
```
import { cLoading } from 'ui-vue';
```

## 11，cScrollAble 页面scroll组件
```
import { cScrollAble } from 'ui-vue';
```

## 12，cScrollX 左右滚动组件
```
import { cScrollX } from 'ui-vue';
```

## 13，cSlide 抽屉组件
```
import { cSlide } from 'ui-vue';
```

## 14，cSwiper 图片切换组件
```
import { cSwiper } from 'ui-vue';
```

## 15，cSwitch 开关组件
```
import { cSwitch } from 'ui-vue';
```

## 16，cTabs tab切换组件
```
import { tabs, tabItem } from 'ui-vue';
```

## 17，cTimeCircle 圆环倒计时组件
```
import { cTimeCircle } from 'ui-vue';
```

## 18，cTimeCount 普通倒计时组件
```
import { cTimeCount } from 'ui-vue';
```

## 19，提示框组件
```
需要全局引入可用
this.$toast({
    text: 'loading'
})
```



