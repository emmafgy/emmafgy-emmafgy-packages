## 自定义主题

1.创建自定义主题scss，内容如下
```scss

// 1-修改scss变量改变主题

// 以下是全部变量
$primary-color: #1890ff ; // 主题色
$danger-color: #ff4d4f ; // 危险色
$font-size-base: 14px ; // 主字号
$font-size-icon: 30px ; // icon 字号
$hover-color:#e6f7ff ; // hover
$border-bottom-color:#e8e8e8 ; // border-bottom-color
$background-color:#fafafa ;
$triangle-color:#bfbfbf ; // 三角形color
$message-error-color:#f56c6c ; // 错误color
$message-error-border-color:#fde2e2 ; // 错误color
$message-error-background-color:#fef0f0 ; // 错误color
$message-success-color:#67c23a ;// 成功color
$message-success-border-color:#e1f3d8 ;// 成功color
$message-success-background-color:#f0f9eb ;// 成功color
$message-warn-color:#e6a23c ; // 提示color
$message-warn-border-color:#faecd8 ; // 提示color
$message-warn-background-color:#fdf6ec ; // 提示color
$box-shadow-color:#e6e6e6 ; // 阴影color
$table-stripe-color:#fafafa ; // table 斑马纹 color

// 2-引入全部组件scss
@import "@emmafgy/vue-components/src/theme/src/index.scss"; // 所有组件的scss

```

2.引入第一步创建的scss文件即可