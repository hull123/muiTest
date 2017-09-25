
var imgArr=new Array("img/banner1.jpg", "img/banner2.jpg", "img/banner3.jpg", "img/banner4.jpg", "img/banner5.jpg", "img/banner6.jpg");
var imgValue=document.getElementById('banner');
var num=0;
var timer;
var recommendTitle=document.getElementById('recom-t');
var searchValue=document.getElementById('input');
var searchIcon=document.getElementsByClassName('search');
window.onload=function(){//初始加载
	/* document.getElementById('banner').src=imgArr[0];//加载页面时将banner赋给src
	 timer = setInterval(function () {//轮播定时
        play()
        }, 3000);*/
        console.log(recommendTitle);
}

function play() {//轮播图
	num=num+1; //每次加一
    //进行判断，如果num大于最后一张时,图片返回第一张
    //// 1 2 3 4
    if(num>imgArr.length-1){
        num=0;
    }
    document.getElementById('banner').src=imgArr[num];
}

function searchV(value){//获取input输入的值
	console.log('22222222222');
	console.log(value);
}

function getFocus(){//获取焦点
	searchValue.placeholder='';
}

function loseBlur(){//失去焦点
	searchValue.placeholder='搜索商品';
}

function searchResult(){//点击搜索按钮事件
	console.log('11111111111');
}