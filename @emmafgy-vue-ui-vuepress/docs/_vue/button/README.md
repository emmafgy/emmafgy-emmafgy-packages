## Button 按钮
按钮

## 基本使用
<ef-button class="margin-top">button</ef-button>

::: details 点击查看代码

```vue
<ef-button>button</ef-button>
```
:::

## 不同类型的按钮

<div class="margin-top flex-base">
<ef-button class="" type="primary">primary</ef-button>
<ef-button class="margin-left" type="danger">danger</ef-button>
</div>

::: details 点击查看代码

```vue
<ef-button class="" type="primary">primary</ef-button>
<ef-button class="margin-left" type="danger">danger</ef-button>
```
:::

## 带图标的按钮

<div class="margin-top flex-base">
<ef-button icon="icon-search">search</ef-button>
<ef-button icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>

<div class="margin-top flex-base">
<ef-button type="primary" icon="icon-search">search</ef-button>
<ef-button type="primary" icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button type="primary" icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>

<div class="margin-top flex-base">
<ef-button type="danger" icon="icon-search">search</ef-button>
<ef-button type="danger" icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button type="danger" icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>

::: details 点击查看代码

```vue
<div class="margin-top flex-base">
<ef-button icon="icon-search">search</ef-button>
<ef-button icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>

<div class="margin-top flex-base">
<ef-button type="primary" icon="icon-search">search</ef-button>
<ef-button type="primary" icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button type="primary" icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>

<div class="margin-top flex-base">
<ef-button type="danger" icon="icon-search">search</ef-button>
<ef-button type="danger" icon="icon-integral-fill1" class="margin-left">search</ef-button>
<ef-button type="danger" icon="icon-favorites-fill" class="margin-left">search</ef-button>
</div>
```
:::


## 不同形状的按钮

<div class="margin-top flex-base">
<ef-button shape="circle" icon="icon-search"></ef-button>
<ef-button type="primary" shape="circle" icon="icon-integral-fill1" class="margin-left"></ef-button>
<ef-button type="danger" shape="circle" icon="icon-favorites-fill" class="margin-left"></ef-button>
</div>

<div class="margin-top flex-base">
<ef-button shape="round" >button</ef-button>
<ef-button type="primary" shape="round" icon="icon-integral-fill1" class="margin-left">button</ef-button>
<ef-button type="danger" shape="round" icon="icon-favorites-fill" class="margin-left">button</ef-button>
</div>

::: details 点击查看代码

```vue
<div class="margin-top flex-base">
<ef-button shape="circle" icon="icon-search"></ef-button>
<ef-button type="primary" shape="circle" icon="icon-integral-fill1" class="margin-left"></ef-button>
<ef-button type="danger" shape="circle" icon="icon-favorites-fill" class="margin-left"></ef-button>
</div>

<div class="margin-top flex-base">
<ef-button shape="round" >button</ef-button>
<ef-button type="primary" shape="round" icon="icon-integral-fill1" class="margin-left">button</ef-button>
<ef-button type="danger" shape="round" icon="icon-favorites-fill" class="margin-left">button</ef-button>
</div>
```
:::

## 不同尺寸的按钮

<div class="margin-top flex-base">
<ef-button>default</ef-button>
<ef-button size="middle" class="margin-left">middle</ef-button>
<ef-button size="small" class="margin-left">small</ef-button>
</div>

::: details 点击查看代码

```vue
<div class="margin-top flex-base">
<ef-button>default</ef-button>
<ef-button size="middle" class="margin-left">middle</ef-button>
<ef-button size="small" class="margin-left">small</ef-button>
</div>
```
:::

## 带loading的按钮

<div class="margin-top flex-base">
<ef-button :loading="true">loading</ef-button>
<ef-button :loading="true" type="primary" class="margin-left">loading</ef-button>
</div>

::: details 点击查看代码

```vue
<div class="margin-top flex-base">
<ef-button :loading="true">loading</ef-button>
<ef-button :loading="true" type="primary" class="margin-left">loading</ef-button>
</div>
```
:::

## 禁用的按钮

<div class="margin-top flex-base">
<ef-button disabled>disabled</ef-button>
<ef-button disabled type="primary" class="margin-left">disabled</ef-button>
</div>

::: details 点击查看代码

```vue
<div class="margin-top flex-base">
<ef-button disabled>disabled</ef-button>
<ef-button disabled type="primary" class="margin-left">disabled</ef-button>
</div>
```
:::


## Button Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 按钮类型 | String | primary,danger | - |
| icon | 按钮图标 | String | 参见Icon图标组件 | - |
| shape | 按钮形状 | String | circle，round | - |
| loading | loading | Boolean | - | false |
| size | String | middle，small | - | - |

## Button Event
|事件名|说明|
|--|--|
|click|点击事件|


<script>
export default {
  data() {
    return {

    }
  },
  methods:{

  },
  mounted () {

  }
}
</script>