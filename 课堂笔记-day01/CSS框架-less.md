# 1. Less 入门

### 1.1 有了 CSS，为什么还需要 Less

CSS（层叠样式表）是一门历史悠久的标记性语言，同 HTML 一道，被广泛应用于万维网（World Wide Web）中。HTML 主要负责文档结构的定义，CSS 负责文档表现形式或样式的定义。作为一门标记性语言，CSS 的语法相对简单，对使用者的要求较低，但同时也带来一些问题：CSS 需要书写大量看似没有逻辑的代码，不方便维护及扩展，不利于复用，尤其对于非前端开发工程师来讲，往往会因为缺少CSS 编写经验而很难写出组织良好且易于维护的 CSS 代码，造成这些困难的很大原因源于 CSS 是一门非程序式语言，没有变量、函数、SCOPE（作用域）等概念。
LESS 为 Web 开发者带来了福音，它在 CSS 的语法基础之上，引入了变量，Mixin（混入），运算以及函数等功能，大大简化了 CSS 的编写，并且降低了 CSS 的维护成本，就像它的名称所说的那样，LESS 可以让我们用更少的代码做更多的事情。

### 1.2什么是 Less

LESS CSS 是一种动态样式语言，属于 CSS 预处理语言的一种，它使用类似 CSS的语法，为 CSS 的赋予了动态语言的特性，如变量、继承、运算、函数等，更方便CSS 的编写和维护。

LESS CSS 可以在多种语言、环境中使用，包括浏览器端、桌面客户端、服务端。
说明：本质上，LESS 包含一套自定义的语法及一个解析器，用户根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 CSS 文件。LESS 并没有裁剪 CSS 原有的特性，更不是用来取代 CSS 的，而是在现有 CSS 语法的基础上，为 CSS 加入程序式语言的特性。

### 1.3 如何使用Less

Less不能在客户端直接执行，需要转换成标准的CSS语法。下面列出了几种Less的使用方法：

**命令行**

```html
在 Node.js 环境中使用 Less ：

npm install -g less
> lessc styles.less styles.css

在浏览器环境中使用 Less ：

<link rel="stylesheet/less" type="text/css" href="styles.less" />
<script src="//cdnjs.cloudflare.com/ajax/libs/less.js/3.11.1/less.min.js" ></script>
```

### 1.4 Less 初体验

[https://less.bootcss.com/](https://less.bootcss.com/)

1. 从官网下载一份 less.js (less.min.js )， 将 less.js(less.min.js)放到 js 目录中

2. 自己写一个简单的示例 less 文件，命名为：style.less， 内容如下：

   ```less
   @color:red;
   #header {
   	color: @color;
   }
   h2 {
   	color: @color;
   }
   ```

3. index.html 内容如下：

   ```html
   <html>
     <head>
       <link rel="stylesheet/less" type="text/css" href="less/style.less">
       <script src="js/less.min.js" type="text/javascript"></script>
     </head>
     <body>
       <div id="header">
       	这是网页的头部
       </div>
       <h2>
       	这是标题部分
       </h2>
     </body>
   </html>
   ```

# 2.Less 语言特性

## 2.1概览

作为 CSS 的一种扩展，LESS CSS 不仅向下兼容 CSS 的语法，而且连新增的特性也是使用 CSS 的语法。这样的设计使得学习 LESS 很轻松，而且你可以在任何时候回退到 CSS。

## 2.2变量

变量基本上是每个语言脚本上都会涉及的一个小小知识点，是学好语言脚本的必经之路。LESS 中也可以设置变量，然后通过变量可以改变整个网站的设计风格。良好的掌握 LESS 中变量的用法，是 LESS 的基础。

### 1.变量语法

使用方法就是在“@”后添加变量名称然后变量值用冒号“:”链接。

### 2.变量的作用域

如果对同一个变量定义两次的话，在当前作用域中最后一次定义的将被使用。这与 CSS 的机制类似，最后一次定义的值会成为这个属性的值。若定义在嵌套之中，
那么这个变量就只能服务于这个嵌套之内的属性了。变量也是没有顺序可言的，只要页面里有，都会按顺序覆盖，按顺序加载。

### 3.字符串插值

变量可以用像 @{name} 这样的结构，以类似 ruby 和 php 的方式嵌入到字符串中。

### 4.选择器插值

如果需要在选择器中使用 LESS 变量，只需通过使用和字符串插件一样的@{selector} 即可。

### 5.media query 作为变量

如果你希望在 media query 中使用 LESS 变量，你可以直接使用普通的变量方式。因为“~”后面的值是不被编译的，所以可以用作 media query 的参数。

### 6.用一个变量值的变量

在定义变量值时使用其它的变量。



## 2.3、混合(Mixins)

在 Less 中，混合可以将一个定义好的 class A 轻松的引入到另一个 class B 中，从而简单实现 class B 继承 class A 中的所有属性。我们还可以带参数地调用，就像
使用函数一样。

### 1.继承类名

 在 LESS 中，可以定义一些通用的属性集为一个 class，然后在另一个 class 中去调用这些属性。如果我们现在需要在其他 class 中引入那些通用的属性集，那么我们叧需要在任何 class 中调用就可以了。任何 CSS class, id 属性集都可以以同样的方式引入。

### 2.带参数混合

在 LESS 中，你还可以像函数一样定义一个带参数的属性集合，然后在其他选择器中像调用它.

### 3.隐藏属性继承

你也可以定义不带参数属性集合，如果你想隐藏这个属性集合，不让它暴露到CSS 中去，但是你还想在其他的属性集合中引用，你会发现这个方法非常的好用。

```less
.width () {
	width:1234px;
}
#height () {
	height:5678px;
}
.long {
	.width();
	.meng {
		#height();
	.width();
	} 
}
```

### 4.默认值混合

我们还可以给参数设置默认值。有了默认值，我们可以不用设置属性值也能被调用。

### 5.多参数混合

- 多个参数可以使用分号或者逗号分隔，这里推荐使用分号分隔，因为逗号有两重含义：它既可以表示混合的参数，也可以表示一个参数中一组值的分隔符。
  使用分号作为参数分隔符意味着可以将逗号分隔的一组值作为一个变量处理。换句话说，如果编译器在混合的定义或者是调用中找到至少一个分号，就会假设参数是使用分号分隔的，所有的逗号都属于参数中的一组值的分隔符。

- 2 个参数，每个参数都含有通过逗号分隔的一组值的情况：.name(1, 2, 3 ;something, else)。 

- 3 个参数，每个参数叧含一个数字的情况：.name(1, 2, 3)。  使用一个象征性的分号可以创建一个叧含一个参数，但参数包含一组值的混合：.name(1, 2, 3;)。 

- 逗号分隔的一组值参数的默认值：.name(@param1: red, blue;)。

  使用同样的名字和同样数量的参数定义多个混合是合法的。在被调用时，LESS会应用到所有可以应用的混合上。

  ```less
  .mixin(@width) {
   width-1: @width;
  }
  .mixin(@width; @height:2em) {
   width-2: @width;
   height-2: @height;
  }
  mixin(@width; @height; @margin: 2em) {
   width-3: @width;
   height-3: @height;
   margin: @margin @margin @margin @margin;
  }
  h1 {
   .mixin(red);
  }
  div {
   .mixin(#000,3px);
  }
  span {
   .mixin(#fff,3px,5px);
  }
  ```

### 6.@arguments 变量

提到 arguments 想必对 JavaScript 了解的伙伴儿大概有所眼熟，这个在JavaScript 中代表所有参数。而在 LESS 中代表的意思是一样的只不过用法有所不同。
如果你不想单独处理每一个参数的话就可以用@arguments。

### 7.!important 关键字

在 CSS 编写的时候经常会碰到在属性值后面添加!important 的时候。而在 LESS中为了能够方便，就设置了!important 关键字混合方法。调用时在混合后面加

上!important 关键字表示将混合带来的所有属性标记为!important。

# 3. Less基础语法

Less（Leaner Style Sheets）一种 CSS 扩展， 不仅向后兼容 CSS语法，它还为现有的 CSS 语法新增了额外的特性。下面我们就来讲述如何使用Less的基础语法。

## 3.1 注释（Comments）

行注释和块注释：

```less
/* 多行注释
@var: white;
@var: red;*/

// 单行注释
// @var: white;
// @var: red;
多行注释会被解释到css文件中,单行注释则不会
```

## 3.2 嵌套（Nesting）

Less给我们提供了嵌套的功能，用来代替级联选择器。假设我们有以下CSS：

```less
#header {
  color: black;
}
#header .navigation {
  font-size: 12px;
}
#header .logo {
  width: 300px;
}
```

在 Less 中，我们可以使用下面这种方式编写: 

```less
#header {
  color: black;
  .navigation {
    font-size: 12px;
  }
  .logo {
    width: 300px;
  }
}
```

这样的代码更简洁, 它模仿了 HTML 的结构。

使用这种方法照样可以在 mixins 中包含伪类(pseudo-selectors)。下面是一个经典的 clearfix 代码，在这里使用 mixins 重写了（& 表示当前选择器的父选择器）：

```less
.clearfix {
  display: block;
  zoom: 1;

  &:after {
    content: " ";
    display: block;
    font-size: 0;
    height: 0;
    clear: both;
    visibility: hidden;
  }
}
```



**嵌套指令和冒泡**

像`@media`或`@supports`这样的指令可以像选择器一样嵌套。最终指令会被提升到外部，与同一个规则集中的其他元素的相对顺序保持不变。这被称为冒泡。

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

编译输出：

```less
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```



## 3.3 运算（Operations）

算术运算符可以操作任何数字，颜色，或变量。在进行加、减或比较之前会先将它们的转换成相同的单位。计算结果的单位和左边操作数保持一致。如果单位之间不能转换，或没有意义，则单位会被忽略。不能转换的例子如：px转换成cm或rad转换成%。

```less
// 数字被传换成相同的单位
@conversion-1: 5cm + 10mm; // 6cm
@conversion-2: 2 - 3cm - 5mm; // -1.5cm

// 不能转换
@incompatible-units: 2 + 5px - 3cm; // result is 4px

// 变量参与运算
@base: 5%;
@filler: @base * 2; // 10%
@other: @base + @filler; // 15%
```

`*` 和 `/` 操作不会进行单位转换。大多数情况下没有意义，比如，长度乘以长度得面积，而CSS不支持指定面积。

```less
@base: 2cm * 3mm; // result is 6cm
```

你也可以计算颜色值：

```less
@color: #224488 / 2;  // #112244
background-color: #112244 + #111;  // #223355
```

然而，你可能会发现Less的颜色函数（专门处理颜色的函数）会更有用。



## 3.4 转义（Escaping）

转义允许您使用任何任意字符串作为属性或变量值。在`~"anything"`中的任何东西都是按照原样使用的，除了插值以外没有任何变化。

```less
@min768: ~"(min-width: 768px)";  // 或者 ~'(min-width: 768px)'

.element {
  @media @min768 {
    font-size: 18px;
  }
}
```

编译输出：

```less
@media (min-width: 768px) {
  .element {
     font-size: 18px;
  }
}
```



## 3.5 函数（Functions）

Less 提供了许多用于转换颜色，处理字符串和进行算术运算的函数。他们在函数参考一节有详细的的介绍。

这些函数使用起来非常简单。在下面的例子中我们使用 percentage 将 0.5 转换为 50%，然后将基础颜色值的饱和度增加了 5%，最后将背景颜色的亮度增加了 25% 之后又将色相值增加 8:

```less
@base: #f04615;
@width: 0.5;

.class {
  width: percentage(@width); // 返回 `50%`
  color: saturate(@base, 5%);
}
```



## 3.6 命名空间和访问器(namespace selectors)

有时候，为了更好地组织代码，你可能会想要将 mixins 进行分组，或包裹起来。在 Less 中做到这一点非常直观，假设你想在 `#bundle` 下捆绑一些 mixins 和变量，以便稍候复用或者编译输出：

```less
#bundle() {
  .button {
    display: block;
    border: 1px solid black;
    background-color: grey;
    &:hover {
      background-color: white
    }
  }
  .tab { ... }
  .citation { ... }
}
```

现在，如果我们想把`.button`规则集中的属性混和到`#header a`规则集中，我们可以这样做：

```less
#header a {
  color: orange;
  #bundle > .button;  // 也可以写成 #bundle.button
}
```

注意：如果你不想让命名空间中的代码编译输出到你的CSS中，比如，`#bundle .tab`，那么在命名空间之后添加一个括号`()`就可以了。

命名空间中声明的变量，在空间外部是不可用的。但是你可以使用上面的语法引用空间中的 mixins（`#bundle > .mixin-name`）。因此，你不能这么做：`#bundle > @variable-name`。



## 3.7 作用域（Scope）

Less 中的作用域与编程语言中的作用域概念非常相似。首先会在局部查找变量和 mixins，如果没找到，编译器就会在父作用域中查找，依次类推。 

```less
@var: red;

#page {
  @var: white;
  #header {
    color: @var; // white
  }
}
```

变量和 mixins 在使用之前不必先定义。因此下面的代码与前面的例子等价：

```less
@var: red;

#page {
  #header {
    color: @var; // white
  }
  @var: white;
}
```



## 3.8 导入（Importing）

导入工作和预想的一样。你可以导入一个.less文件，然后这个文件中的所有变量都可以使用了。如果导入的是.less文件，则文件的扩展名是可选的。

```less
@import "library"; // library.less
@import "typo.css";
```





