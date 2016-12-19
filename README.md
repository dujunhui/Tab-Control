# du_TabController

- view：

    <div id="layOut-tab" class="tab">
        <ul class="tab-nav clearFix">
            <li class="active"><a href="javascript:;">新闻</a></li>
            <li><a href="javascript:;">电影</a></li>
            <li><a href="javascript:;">图片</a></li>
        </ul>
        <ul class="tab-con">
            <li class="active"><div>点击事件：新闻的内容</div></li>
            <li><div>电影的内容</div></li>
            <li><div>图片的内容</div></li>
        </ul>
    </div>



- css:
    <link rel="stylesheet" href="css/reset.css"/>
    <link rel="stylesheet" href="css/du_TabController.css"/>


- js:
    <script src="js/du_TabController.js"></script>

- show1：
    var tab1 = new Tab('layOut-tab');
    tab1.init({});

- show2：
    var tab2 = new Tab('layOut-tab2');
    tab2.init({
        event:'mouseover'
    });

-show3：
    var tab3 = new Tab('layOut-tab3');
    tab3.init({
        event:'mouseover',
        index:2,
        delay:300
    });

-show4：
    var tab4 = new Tab('layOut-tab4');
    tab4.init({
        event:'mouseover',
        delay:0
    });
    tab4.autoPlay(1000);
