# du_TabController

- html
```html
    <div id="layOut_tab" class="du_tab">
        <ul class="du_tabNav clearFix">
            <li class="du_tabActive"><a href="javascript:;">新闻</a></li>
            <li><a href="javascript:;">电影</a></li>
            <li><a href="javascript:;">图片</a></li>
        </ul>
        <ul class="du_tabCon">
            <li class="du_tabActive"><div>点击事件：新闻的内容</div></li>
            <li><div>点击事件：电影的内容</div></li>
            <li><div>点击事件：图片的内容</div></li>
        </ul>
    </div>
```
- css
```html
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/du_TabController.css"/>
```
- js
```html
    <script src="js/du_TabController.js"></script>
```
- show
```javascript
    var tab1 = new Tab('layOut-tab');
    tab1.init({});
```

```javascript
    var tab2 = new Tab('layOut-tab');
    tab2.init({
        event:'mouseover'
    });
```

```javascript
    var tab3 = new Tab('layOut-tab');
    tab3.init({
        event:'mouseover',
        index:2,
        delay:300
    });
```

```javascript
    var tab4 = new Tab('layOut-tab');
    tab4.init({
        event:'mouseover',
        delay:0
    });
    tab4.autoPlay(1000);
```
