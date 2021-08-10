## CSS
常用的css类,引入了所有组件，或者单独引入了index.css，可以直接使用

::: details 点击查看源码

```vue

<style lang="scss">

//=====主题颜色==========
$primary-color: #1890ff !default; // 主题色
$danger-color: #ff4d4f !default; // 危险色
$font-size-base: 14px !default; // 主字号
$font-size-icon: 30px !default; // icon 字号
$hover-color:#e6f7ff !default; // hover
$border-bottom-color:#e8e8e8 !default; // border-bottom-color
$background-color:#fafafa !default;
$triangle-color:#bfbfbf !default; // 三角形color
$message-error-color:#f56c6c !default; // 错误color
$message-error-border-color:#fde2e2 !default; // 错误color
$message-error-background-color:#fef0f0 !default; // 错误color
$message-success-color:#67c23a !default;// 成功color
$message-success-border-color:#e1f3d8 !default;// 成功color
$message-success-background-color:#f0f9eb !default;// 成功color
$message-warn-color:#e6a23c !default; // 提示color
$message-warn-border-color:#faecd8 !default; // 提示color
$message-warn-background-color:#fdf6ec !default; // 提示color
$box-shadow-color:#e6e6e6 !default; // 阴影color
$table-stripe-color:#fafafa !default; // table 斑马纹 color

:export {
	primaryColor:$primary-color;
	fontSizeBase:$font-size-base;
	fontSizeIcon:$font-size-icon;
	hoverColor:$hover-color;
	borderBottomColor:$border-bottom-color;
	backgroundColor:$background-color;
  triangleColor:$triangle-color;
  messageSuccessColor:$message-success-color;
  messageErrorColor:$message-error-color;
  messageWarnColor:$message-warn-color;
}



//============flex ==============

%flex-base {
	display: flex;
	align-items: center;
}

%flex-between {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

%flex-around {
	display: flex;
	justify-content: space-around;
	align-items: center;
}

%flex-center {
	display: flex;
	justify-content: center;
	align-items: center;
}

%flex-baseline {
	display: flex;
	align-items: baseline;
}

%flex-column-base {
	display: flex;
	flex-direction: column;
}

%flex-column-around {
	@extend %flex-column-base;
	align-items: center;
	justify-content: space-around;
}

%flex-column-center {
	@extend %flex-column-base;
	align-items: center;
	justify-content: center;
}

%flex-column-between {
	@extend %flex-column-base;
	justify-content: space-between;
	align-items: center;
}

%flex-wrap-base {
	display: flex;
	flex-wrap: wrap;
}

%flex-wrap-center {
	@extend %flex-wrap-base;
	justify-content: center;
	align-content: center;
}

%flex-wrap-between {
	@extend %flex-wrap-base;
	justify-content: space-between;
	align-content: center;
}

%flex-wrap-around {
	@extend %flex-wrap-base;
	justify-content: space-around;
	align-content: center;
}

.flex-1 {
	flex: 1;
}

//=========单行多行 省略 =============

//单行省略
%row-ignore {
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	word-break: break-all;
}

//任意行
@mixin design-ignore($rows) {
	overflow: hidden;
	text-overflow: ellipsis;
	word-break: break-all;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: $rows;
}


//===================实现类==============

.hover-class {
	background: #fafafa;
}

.radius-base {
	border-radius: 10px;
}

.font-w-b {
	font-weight: bold;
}

.font-color-666 {
	color: #666;
}

.font-color-999 {
	color: #999;
}

//flex
.flex {
	display: flex;
}

.flex-0-0-auto{
  flex:0 0 auto;
}

.flex-base {
	@extend %flex-base;
}

.flex-center {
	@extend %flex-center;
}

.flex-between {
	@extend %flex-between;
}

.flex-baseline {
	@extend %flex-baseline;
}

.flex-column-base {
	@extend %flex-column-base;
	}

.flex-column-center {
	@extend %flex-column-center;
}

.flex-column-around {
	@extend %flex-column-around;
}

.flex-column-between {
	@extend %flex-column-between;
}

.flex-wrap-around {
	@extend %flex-wrap-around;
}

//文字省略
.ignore1 {
	@include design-ignore(1);
}

.ignore2 {
	@include design-ignore(2);
}

.ignore3 {
	@include design-ignore(3);
}

//hover-class
.hover-class {
	background: #fafafa;
}

.color-title {
	color: #17233d;
}

.font-base {
	font-size: 14px;
}

.font-sm {
	font-size: 12px;
}

//margin
.margin-top {
	margin-top: 20px;
}

.margin-top-sm {
	margin-top: 10px;
}

.margin-top-smm {
	margin-top: 5px;
}

.margin-top-lg {
	margin-top: 30px;
}

.margin-right {
	margin-right: 20px;
}

.margin-right-sm {
	margin-right: 10px;
}

.margin-right-lg {
	margin-right: 30px;
}

.margin-left {
	margin-left: 20px;
}

.margin-left-sm {
	margin-left: 10px;
}

.margin-left-smm {
	margin-left: 3px;
}

.margin-left-lg {
	margin-left: 30px;
}

//float
.float-left {
	float: left;
}

.float-right {
	float: right;
}

.float-clear {
	overflow: hidden;
}

//position
.pos-relative {
	position: relative;
}

.pos-absolute {
	position: absolute;
}

.pos-fixed {
	position: fixed;
}

//text-right
.text-right {
	text-align: right;
}

.text-center {
	text-align: center;
}

//	cursor;
.cursor-pointer {
	cursor: pointer;
}


// 
.overflow-hidden{
  overflow: hidden;
}

</style>

```
:::