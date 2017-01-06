# du-Tab

- html
```html
    <div id="du-TabBox1" class="du-TabBox">
        <ul class="du-TabNav">
            <li class="du-TabActive"><a href="javascript:;">新闻</a></li>
            <li><a href="javascript:;">电影</a></li>
            <li><a href="javascript:;">图片</a></li>
        </ul>
        <ul class="du-TabCon">
            <li class="du-TabActive"><div>点击事件：新闻的内容</div></li>
            <li><div>点击事件：电影的内容</div></li>
            <li><div>点击事件：图片的内容</div></li>
        </ul>
    </div>
```
- css
```html
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/du-Tab.css"/>
```
- js
```html
    <script src="js/jquery-1.10.1.min.js"></script>
    <script src="js/du-Tab.js"></script>
```
- show
```javascript
   var tab1 = new DuTab('du-TabBox1');
   tab1.init({});
```

```javascript
    var tab2 = new DuTab('du-TabBox2');
    tab2.init({
        event:'mouseover'
    });
```

```javascript
    var tab3 = new DuTab('du-TabBox3');
    tab3.init({
        event:'mouseover',
        index:2,
        delay:300
    });
```

```javascript
    var tab4 = new DuTab('du-TabBox4');
    tab4.init({
        event:'mouseover',
        delay:0
    });
    tab4.autoPlay(1000);
```
[demo.html](https://dujunhui.github.io/du-Tab/demo.html)