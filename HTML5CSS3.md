### HTML5
- 网页中编写多个空格默认情况会自动被浏览器解析为一个空格。
- 实体：
    1. 空格
    2. 版权
    3. 大于小于
- meta:
    1. charset
    2. name(keywords/description)/content 
- 标题：h1-h6
- 块元素：页面中独占一行
    1. p:p元素内不能放任何块元素
    2. h1-h6
    3. hgroup
    4. blockquote
- 行内元素：页面中不会独占一行
    1. em
    2. strong
    3. q
    4. span
    5. a：内部可以嵌套除其自身外的任何元素
    6. `<img>`是行内替换元素，相当于`inline-block`
- 列表：
    1. 有序列表
    2. 无序列表
    3. 定义列表
- 超链接
    1. 路径：./表示当前文件所在的目录，../表示当前文件所在的目录的上一级
    2. target属性：_self / _blank
    3. href设置为#表示回到页面顶部，可以用#配合id去到本页任何位置
    4. 可使用` href="javascript:;"`作为占位符使用
-  img：属于自结束标签，替换元素，引入图片的路径规则和超链接一致
-  audio：引入音频文件，属性controls/autoplay/loop，可用src属性或者内部source标签配合内部src指定文件（可指定多个文件，在老版解决兼容性问题）。可使用embed标签支持IE8。video标签引入视频使用方法类似audio
-  表格 
   1. table /tr 行/td 单元格
   2. 横向合并单元格 `<td colspan="2">C4</td>`
   3. 纵向合并单元格 `<td rowspan="2">C4</td>`
   4. 长表格
      1. 头部 <thead>/主体 <tbody>/底部 <tfoot> /头部单元格 <th>
-  表单 form
   1. `<form action="">` action指定表单指定服务器的地址
   2. 提交按钮 `<input type="submit" value="按钮文字">`,input是自结束标签
   3. 数据要提交到服务器中，必须为元素指定一个name属性，如文本框`<input type="text" name="username">`
   4. 密码框 `<input type="password" name="pwd">`
   5. 单选框 `<input type="radio" name="radio" value="必须有" checked>` 一组，checked可将单选按钮设置为默认选中
   6. 多选框 `<input type="checkbox" name="radio" value="必须有" checked>` 一组，checked可将单选按钮设置为默认选中
   7. 下拉列表 `<select name=""><option value="1">选项一</option></select>` 
   8. 普通按钮 `<input type="button" value="按钮">`
   9. 颜色 `<input type="color">`
   10. 属性：readonly/disable/autocomplete/autofocus 
---

### CSS3

- 内联样式表（style属性）、内部样式表（style标签）、外部样式表（link href引入）
- 基本语法：选择器+声明块
- 元素
    1. 父元素
    2. 子元素
    3. 祖先元素（一个元素的父元素也是其祖先元素）
    4. 后代元素（一个元素的子元素也是其后代元素）
    5. 兄弟元素
- 选择器
    1. 元素选择器（根据标签名）
    2. id选择器
    3. 类选择器(class)
    4. 通配选择器（*）
    5. 交集选择器（选择器1选择器2选择器n{声明}）（如果其中有元素选择器，必须用元素选择器开头）
    6. 并集选择器（（选择器分组）选择器1,选择器2,选择器n{声明}）
    7. 子元素选择器（父元素>子元素）
    8. 后代元素选择器（祖先 后代）
    9. 选择之后一个兄弟（前一个 + 下一个）
    10. 选择之后所有兄弟（前一个 ～ 下一个）
    11. 属性选择器 [属性名]/[属性名=属性值]/[属性名^=属性值]（选择属性值以指定属性值开头的元素）/[属性名$=属性值]（选择属性值以指定属性值结尾的元素）/[属性名*=属性值]（选择属性值中含有某些指定属性值的元素）
    12. 伪类选择器：伪类描述一个元素的特殊状态（第一个元素、被点击的元素、鼠标移入的元素），使用:开头
        1. `:first-child` 第一个子元素
        2. `:last-child` 最后一个子元素
        3. `:nth-child()` 选中第N个子元素,()内n表示选中第n个；2n或even表示选中偶数位的元素；2n+1或odd表示选中奇数位的元素。
        4. `:first-of-type/:last-of-type/:nth-of-type()`用法与上条类似，只不过是在同类型元素中进行排序
        5. `:not()` 否定伪类，将符合条件的元素从选择器中去除
        6. a元素的伪类：`a:link/a:visited/a:hover/a:active`
    13. 伪元素选择器（伪元素表示页面中一些特殊的并不真实存在的元素）
        1. `::first-letter` 表示第一个字母
        2. `::first-line` 表示第一行
        3. `::selectio`n 表示选中的内容
        4. `::before` 元素的开始（必须结合content属性使用）
        5. `::after` 元素的最后（必须结合content属性使用）
- 样式的继承：为一个元素设置的样式同时也会应用到它的后代元素上
    1. 注意：并不是所有样式都会被继承，如背景相关的和布局相关的样式都不会被继承。
- 选择器的权重
    1. 内联样式>ID选择器>类和伪类选择器>元素选择器>通配选择器（继承的样式没有优先级）
    2. 比较优先级时，需要将所有选择器的优先级相加计算（分组选择器则是单独计算）
    3. 选择器累加不会超过其最大数量级（多个类选择器相加不能超过单个ID选择器）
    4. 如果优先级计算后相同，则优先使用靠下的样式
    5. 可以在某个样式后添加`!important`，则此时该样式会获取到最高的优先级，甚至超过内联样式（慎用）
- 单位
    1. 长度单位：
       1. 像素： px (不同屏幕像素大小不同，像素越小的屏幕显示效果越清晰)
       2. 百分比： 也可以设置为相对于其父元素属性的百分比，可使子元素跟随父元素的大小改变而改变
       3. em：em是相对于自身元素的字体大小来计算的，1 em= 1 font-size
       4. rem: rem是相对于根元素的字体大小来计算的
    2. 颜色单位：
       1. 直接使用颜色名
       2. RGB值：RGB(红，绿，蓝)
       3. RGBA值：A表示透明度（0-1）
       4. 16进制RGB值
       5. HSL/HSLA：hsl(色相0-360,饱和度%,亮度%)/hsla(色相0-360,饱和度%,亮度%,透明度0-1)
- 文档流 normal flow(网页最底下一层)
    1. 元素在文档流中特点
       1. 块元素：在页面中独占一行，默认宽度撑满父元素，默认高度是被子元素撑开。自上向下垂直排列。
       2. 行内元素：不会独占页面一行，只占自身的大小。自左向右水平排列。如果一行中容纳不下行内元素，元素会换行。宽高都被内容撑开
- 盒模型（块元素） CSS将页面中的所有元素都设置为了一个矩形的盒子
    1. 盒的组成部分：一个盒子可见框大小由内容区、内边距和边框共同决定，计算其大小应该将这三个部分加到一起计算。
       1. 内容区 content: width和height只是设置内容区的宽高，不是整个盒子的大小
       2. 边框 border：border-width有一个默认值，不写不影响效果
       3. 内边距 padding：内边距的设置会影响到盒子的大小，背景颜色会延伸到内边距上
       4. 外边距 margin：不会影响盒子可见框的大小，但会影响盒子的位置，默认情况下设置左、上外边距会移动元素自身，而设置右、下外边距会移动其他元素。margin会影响盒子实际占用空间的大小。
       5. 设置四个方向参数：
          1. 四个值：上 右 下 左
          2. 三个值：上 左右 下
          3. 两个值：上下 左右 
    2. 元素水平布局：width设置为固定值，margin-left/margin-right设置为auto
    3. 元素垂直布局：默认情况下父元素的高度被子元素撑开。要让文字在父元素中垂直居中，只需将父元素的line-height设置成和父元素height同样的值
    4. 垂直外边距重叠问题：相邻的垂直方向外边距会发生重叠的现象
       1. 兄弟元素：兄弟元素间的相邻垂直外边距会取绝对值较大值（两者皆正值或皆负值），或两者的和（两者一正一反）
       2. 父子元素：父子元素间相邻垂直外边距，子元素的会传递给父元素（上外边距）。
       3. 不完美的解决方案：
          1. padding
          2. 父元素加border
       4. 完美的解决方案：为父元素引入clearfix类
            ```
            clearfix::before,clearfix::after{
                content:'';
                display:table;
                clear:all;
            }
            ```
- 盒模型（行内元素）
    1. 行内元素不支持设置宽度和高度
    2. 行内元素可以设置padding/margin和border，但是垂直方向上不会影响页面的布局
- 默认样式：浏览器设置的，编写网页时需要去除的，可使用重置样式表去除(reset.css)
- 其他设置
    1. 盒子的大小：默认由内容区+内边距+边框决定
       1. box-sizing：用来设置盒子尺寸的计算方式(width和height的作用)
          1. content-box 默认值，宽高用来设置内容区的大小
          2. border-box 宽高用来设置整个盒子可见框的大小
    2. 轮廓和圆角：
       1. outline：设置元素的轮廓线，用法和border一样，但不会影响到可见框的大小
       2. box-shadow：设置元素的阴影，不影响页面布局
          1. 第一个参数：水平偏移量，设置阴影的水平位置，正数向右负数向左
          1. 第二个参数：垂直偏移量，设置阴影的垂直位置，正数向下负数向上
          2. 第三个参数：阴影的模糊半径，值越大阴影越模糊
          3. 第三个参数：阴影的颜色
       3. border-radius：圆角（半径）
          1. 四个值：左上 右上 右下 左下
          2. 三个值：左上 右上/左下 右下
          3. 两个值：左上/右下 右上/左下
          4. 设置为圆形 `border-radius:50%`
- 浮动：
    1. 浮动的特点
       1. 元素设置浮动后会脱离文档流，不再占用文档流的位置
       2. 浮动后元素会向父元素的左侧或右侧移动
       3. 浮动元素默认不会从父元素中移出
       4. 浮动元素向左右移动时不会超过它前面的其他浮动元素
       5. 若浮动元素上面是一个没有浮动的块元素，则浮动元素无法上移
       6. 浮动元素的高度不会超过它上面的浮动兄弟元素
       7. 浮动元素不会盖住文字，文字会自动环绕在浮动元素周围
    2. 浮动的作用
       1. 实现水平方向的布局
    3. 元素脱离文档流后的特点
        1. 块元素不再独占页面一行
        2. 宽高默认都被内容撑开
        3. 无需再区分行内和块元素
    4. 高度塌陷问题：子元素浮动后，脱离文档流，无法撑起父元素的高度，导致父元素高度丢失，其他元素会自动上移
       1. 解决方案其一：BFC（Block Formatting Context）块级格式化环境，是CSS中一个隐含属性，开启BFC后该元素会变成一个独立的布局区域，具有以下特点：
          1. 开启BFC的元素不会被浮动元素覆盖
          2. 开启BFC的元素子元素和父元素的外边距不会重叠
          3. 开启BFC的元素可以包含浮动的子元素
       2. 可以开启BFC的做法：
          1. 设置父元素浮动（不推荐）
          2. 将父元素设置为行内块元素（不推荐）
          3. 将父元素的overflow设置为非visible的值（hidden）(常用)
       3. 解决方案二：clear可以清楚浮动元素对当前元素所产生的影响
          1. 可选值：
             1. left:清除左侧浮动元素对当前元素的影响
             2. right:清除右侧浮动元素对当前元素的影响
             3. both:清除两侧浮动元素中对当前元素最大影响的一侧
          2. 原理：设置后浏览器会自动为元素添加一个上外边距，使其位置不受其他元素影响
          3. 解决方式：
             ```
                父元素::after{
                    content:'';
                    display:block;
                    clear:both;
                }
             ```
    5. 同时解决高度塌陷和外边距重合问题（最佳）：
        ```
        .clearfix::before,clearfix::after{
            content:'';
            display:table;
            clear:both;
        }
        ``` 
- 定位position：通过定位可以把元素摆放到页面的任意位置
    1. 参数：
       1. static：默认值，未开启定位
       2. relative：开启元素的相对定位
       3. absolute：开启元素的绝对定位
       4. fixed：开启元素的固定定位
       5. sticky：开启元素的粘滞定位
    2. relative 相对定位
       1. 开启后如果不设置偏移量，元素不会发生变化
       2. 参照元素在文档流中的位置定位 
       3. 相对定位会提升元素的层级
       4. 相对定位不会使元素脱离文档流
       5. 相对定位不会改变元素的性质（块还是块，行内还是行内）
    3. absolute 绝对定位
       1. 开启后如果不设置偏移量，元素位置不会发生变化
       2. 绝对定位会使元素脱离文档流
       3. 绝对定位会改变元素的性质（行内变成块，块元素的宽高被内容撑开）
       4. 绝对定位会提升元素的层级
       5. 绝对定位元素是相对于其包含块进行定位的
          1. 包含块，在正常情况下就是离当前元素最近的祖先块元素；**在绝对定位的情况下，就是离当前元素最近的开启了定位的元素。如果所有的祖先元素都没有开启定位，则相对于根元素进行定位**
       6. 绝对定位布局：
          1. 水平方向布局需要算入left和right，默认会自动调整right的值（默认left和right是auto），如果left\right\margin\width中有auto，则浏览器会自动调整值为auto的项
          2. 垂直方向布局需要算入top和bottom，默认会自动调整bottom的值（默认top和bottom是auto），如果top\bottom\margin\hight中有auto，则浏览器会自动调整值为auto的项
    4. fixed 固定定位
       1. 固定定位也是一种绝对定位，所以大部分特点和绝对定位一样
       2. 固定定位是参照于浏览器视口的定位
       3. 固定定位的元素不会随网页滚动条滚动
    5. sticky 粘滞定位（兼容性不好） 
        1. 和相对定位效果基本一致
        2. 可以在元素到达某个位置时将其固定
- 元素的层级
    1. 对于开启定位的元素，可通过z-index指定元素层级，参数为一个整数，越大元素的层级越高。元素层级越高越优先显示
    2. 元素层级相同时，优先显示HTML靠下的元素
    3. 祖先元素无法遮盖后代元素
- 字体&背景
    1. 字体
       1. 和font-size相关：em相当于当前元素的一个font-size, rem相当于根元素的一个font-size
       2. font-family 字体族：
          1. serif 衬线字体
          2. san-serif 非衬线字体
          3. monospace 等宽字体
       3. 用户使用服务器字体方法：@font-face
    2. 图标字体（icofont）：可将图标设置为字体，通过font-face的形式对字体进行引入（例如fontawesome.com或阿里的icofont）
       1. 将css和webfonts移入项目，通过css引入后使用<i class="用的图标的类名"></i>
       2. 通过伪元素设置图标字体:
          1. 通过before找到要设置图标的元素
          2. 在content中设置字体编码
          3. 设置字体样式：font-family和font-weight
       3. 通过实体设置：<i class="图标类名">&#x字体图标编码;</i>
    3. 行高：文字占有的实际高度，可通过line-height设置，可使用一个大小或一个整数（字体的指定倍数）
        1. 字体框：就是字体存在的格子，设置font-size实际上就是在设置字体框的高度
        2. 行高会在字体框的上下平均分配
        3. 所以可以将行高设置为和高度相同的值，则单行文字会在一个元素中垂直居中
        4. 行高常用来设置文字行间距，行间距=行高-字体大小
    4. 字体简写属性：font: 字体大小/行高 字体族 （行高可省略）
    5. 文本样式
       1. text-align 文本对齐方式 left/right/center/justify
       2. vertical-align 元素垂直对齐方式 baseline/top/bottom/middle
       3. 因为图片基线产生的空隙可使用设置vertical-align的方式解决
       4. text-decoration 文本装饰 none/underline/line-through/overline
       5. white-space 如何处理空白 nomal/nowrap不换行/pre保留空白
       6. text-overflow:ellipsis 设置多出内容用省略号表示
    6. 背景
       1. 背景颜色：background-color
       2. 背景图片：background-image:url(路径)
          1. 可同时设置背景图片和背景颜色，此时背景颜色成为背景图片的背景色
          2. 若背景图片小于元素，背景图片会自动在元素中平铺将元素铺满
          3. 若背景图片大于元素，一部分背景图片会无法完全显示
       3. 背景重复：background-repeat:repeat/repeat-x/repeat-y/no-repeat
       4. 背景位置：background-position:
          1. 通过top left right bottom center几个词设置，需要设置两个词，如果只写一个则第二个默认为center
          2. 通过偏移量设置：水平方向偏移量  垂直方向偏移量
       5. 背景范围：background-clip:border-box(背景会出现在边框下)/padding-box(背景会出现在内容区和内边距)/content-box(背景只会出现在内容区)
       6. 背景偏移量计算原点：background-origin:border-box(背景图片的偏移量从边框处开始计算)/padding-box(背景图片的偏移量从内边距开始计算)/content-box(背景图片的偏移量从内容区开始计算)
       7. 背景图片的大小：background-size:
          1. 宽度 高度（第二个值不写为auto）
          2. cover （图片比例不变，将元素铺满，图片可能会显示不全）
          3. contain （图片比例不变，将图片在元素中完整显示，图片可能无法铺满元素）
       8. 背景图片是否跟随元素移动：background-attachment:scroll（背景图片会跟随元素移动）/fixd（背景图片不会跟随元素移动）/
       9. 背景属性简写：background:顺序随意，无必须写的要求，但是background-size必须写在background-position后面，用/隔开，background-origin必须在background-clip前面
       10. CSS-Sprite (雪碧图，只适用于背景图片): 解决图片闪烁问题，可将多个小图片统一保存到一个大图片中，通过调整background-position切换显示图片的部分，这样图片会同时加载到网页中，可以避免图片闪烁问题。
       11. 渐变（对老版本IE兼容不好）
           1.  线性渐变：background-image:linear-gradient(指定方向，开头颜色，结尾颜色)
               1.  指定方向：to left/to right/to bottom/to top/XXX deg(指定旋转度数)
               2.  渐变可以同时指定多个颜色，多个颜色默认情况下平均分布，也可以手动指定渐变分布情况
               3.  repeating-linear-gradient()可以平铺的线性渐变（重复平铺）
           2. 径向渐变：background-image:radial-gradient(开头颜色，结尾颜色)
              1. 默认情况下在正方形元素内部渐变径向渐变的形状为圆形，在长方形内部径向渐变的形状为椭圆形，也可手动指定径向渐变的大小
    7. 表格
       1. 边框间距：border-spacing:0px;
       2. 设置边框合并：border-collapse:collapse
       3. 浏览器会自动创建tbody并把tr全放进其中，所以tr不是table子元素，不能用table的子元素选择器选中tr
       4. td可通过vertical-align/text-align设置元素居中，可配合display:table-cell实现元素在父元素中完全居中
- 过渡 transition：可以指定一个属性发生变化时的切换方式，可简写以下属性
   1. 属性
      1. transition-property: 指定要过渡的属性，如width，多个属性用逗号隔开，所有属性用all
      2. transition-duration: 指定过渡持续时间（s和ms），如2s
      3. transition-timing-function: 过渡的时序函数(过渡执行方式)，如ease(默认值，先加速后减速)/linear(匀速)/ease-in(加速)/ease-out(减速)/ease-in-out(急加速减速)/cubic-bezier()/steps()分步执行，可设置第二个参数start/end设置何时开始执行过渡
      4. transition-delay: 指定过渡延迟时间
- 动画：可自动触发动态效果
   1. 设置动画效果，必须先设置一个关键帧，关键帧设置了动画执行的每个步骤
   ```
   @keyframes test{
      /*动画的开始位置，也可写0%*/
      from{ }
      /*动画的结束位置，也可写100%*/
      to{ }
   }
   ```
   2. animation-name(对当前元素生效的关键帧名):test
   3. animation-duration: 动画持续时间
   4. amination-delay:动画的延时
   5. amination-timing-function: 动画的时序函数
   6. animation-iteration-count: 动画执行次数，可选具体次数或infinite
   7. animation-direction: 动画运行方向，默认nomal，代表每次都从from到to运行/reverse 反向执行/alternate 重复执行动画时往复执行/alternate reverse
   8. animation-play-state: 设置动画执行状态，默认running/paused
   9. animation-fill-mode: 填充模式，默认none，动画执行完毕元素回到原来位置/forwards动画执行完毕元素会停在动画结束位置/backwards动画延时等待时，元素处于开始位置/both
- 变形 transform：设置元素变形效果，不影响页面布局，可写多个变形，用空格隔开
   1. 平移
      1. translateX() 沿X轴,参数可为具体数值或百分比（相对于自身）
      2. translateY() 沿Y轴,参数可为具体数值或百分比（相对于自身）
      3. translateZ() 沿Z轴，默认情况下无近大远小效果，如果想看到此效果需要给html设置perspective属性，即网页视距离
   2. 旋转：使元素沿着XYZ轴旋转指定的角度
      1. rotateX() 沿X轴，参数可为deg/turn，如果想看到此效果需要给html设置perspective属性，效果为俯仰
      2. rotateY() 沿Y轴，参数可为deg/turn，如果想看到此效果需要给html设置perspective属性，效果为左右侧
      3. rotateZ() 沿Z轴，参数可为deg/turn，当XY轴转动后Z轴视觉效果也会不同
   3. backface-visibility 设置是否显示元素的背面
   4. transform-style:preserve-3d 开启3D变形效果
   5. 缩放 scale
      1. scaleX() 沿X轴缩放
      2. scaleY() 沿Y轴缩放
      3. scale() 双方向缩放
   6. transform-origin 变形的原点：center默认从中间/0 0/20px 20px
- less：css预处理语言
  1. 选择器支持嵌套，子选择器写在父选择器内部，增加可读性
  2. //是less中的单行注释，不会被解析到css中（css的注释则会被解析到css文件中）
  3. 变量：可存储任意值
     1. 语法：@变量名：变量值，直接使用时以@变量名的形式使用即可，作为类名或一部分值使用，以@{变量名}的形式使用
     2. 出现多个重复变量名，调用时遵循就近原则
  4. 父元素选择器：&
     1. &表示外层父元素
  5. 扩展：extend 对当前选择器扩展指定选择器的样式；选择器() 直接对指定样式进行引用，相当于复制样式（mixins 混合）
  6. 混合：mixins 语法为：类选择器(){} 
     1. 混合函数中可以直接设置变量
      ```
      .test(@w){
         width:@w;
         height:100px;
         border:1px solid red;
      }
      div{
         .test(200px);
      }
      ```
     2. 调用混合函数，按顺序传递参数
     3. 混合函数的参数中可以设置默认值，如`.test(@w:100px,@h)`
  7. 在less中所有的数值都可以直接进行计算
  8. @import可以将其他less引入当前less, 可以对Less进行模块化处理
- 弹性盒 flex: 新的布局手段，用来代替浮动完成布局
  1.  弹性容器：通过display:flex/inline-flex设置弹性容器
  2.  弹性元素：弹性容器的子元素（弹性项），一个元素可以同时是弹性元素和弹性容器
  3.  主轴：弹性元素的排列方向
  4.  侧轴：与主轴垂直方向的
  5.  弹性容器的样式
     1. flex-direction 指定容器中弹性元素排列方式 默认row 水平排列/row reverse 反向水平排列/column纵向排列/column reverse 反向纵向排列
     2. flex-wrap 设置弹性元素是否自动换行，默认nowrap/wrap 元素沿辅轴自动换行/wrap-reverse
     3. flex-flow 是flex-wrap和flex-direction的简写属性
     4. justify-content 主轴元素如何排列，默认flex-start 元素沿主轴自左排/flex-end 元素沿主轴自右排/center 元素沿主轴居中排/space-around 空白分配到元素两侧/space-evenly 空白分布到元素单侧，兼容性不好/space-between 空白分布到元素间
     5. align-items 元素在辅轴上如何对齐，默认stretch 每行元素高度一致/flex-start 元素不拉伸，沿辅轴起边对齐/flex-end/center/baseline 基线对齐
     6. align-content 辅轴元素空白分配，默认flex-start /flex-end /center /space-around /space-evenly /space-between 
  6.  弹性元素的样式
      1. align-self: 覆盖当前弹性容器上的align-items
      2. flex-grow 指定弹性元素的伸展系数（父元素有多余空间时，子元素如何伸展，父元素剩余空间会按照比例进行分配），默认值是0
      3. flex-shrink 指定弹性元素的收缩系数（父元素空间不足容纳所有子元素时，子元素如何收缩），默认值是1，0为不收缩
      4. flex-basis 元素在主轴上的基础长度，默认值是auto，如果主轴是横向则指定的是元素宽度，如果主轴是纵向则指定的是元素高度
      5. flex 简写弹性元素的三个样式2.3.4.
      6. order 参数是整数，元素的排列顺序，小数在前
- 像素
  1. CSS像素：编写网页时使用的像素，如`width:100px`
  2. 物理像素：屏幕是由一个一个发光的小点组成的，分辨率说的就是屏幕中小点的数量，浏览器需要将CSS像素转换成物理像素，默认在PC端，一个CSS像素等于一个物理像素，但一个CSS像素最终由几个物理像素决定由设备和浏览器决定
  3. viewport 视口，屏幕中用来显示网页的区域，默认CSS像素是1920px，默认情况下移动端网页会将视口设为980px以保证正常访问，若网页宽度超过980px，移动端浏览器会自动对网页缩放以完整显示网页
  4. 不同屏幕的单位像素大小不同，像素越小越清晰 
  5. 移动端需要通过meta设置好视口大小：`<meta name="viewport" content="width=device-width,initial-scale=1.0">`
     1. 完美视口：将像素比设置为最佳像素比的视口大小（device-width表示设备宽度，即完美视口）
  6. 单位：移动端不能再使用px布局
     1. vw：表示视口的宽度viewport width（100vw=一个视口的宽度，1vw=1%视口的宽度），移动端都支持
     2. 网页中最小字体大小是12px，小于其的字体会被自动设置为12
     3. 可设置html的font为一个大小适中的vw，其他单位用rem对应
- 响应式布局
  1. 媒体查询
     1. 语法：@media 查询规则{}
     2. 查询规则
        1. 媒体类型(all/print/screen/speech)，可使用逗号连接多个类型，可在媒体类型前加only，表示只有该类型应用，可兼容一些老版本浏览器
        2. 媒体特性(width视口宽度/height视口高度/min-width 视口大于指定宽度时生效/max-width)
        3. 常用断点：/768px/992px/1200px，区间范围用and连接，`@media only screen and (min-width:500px) and (max-width:700px)`