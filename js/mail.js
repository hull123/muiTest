 (function($, doc) {
	var data=[{
		"title":"希腊进口",
		"describe":"干红干白组合",
		"img":"../images/ganH.jpg"
	},{
		"title":"韩国家宝",
		"describe":"蜂蜜柚子茶",
		"img":"../images/fengM.jpg"
	},{
		"title":"希腊进口",
		"describe":"干红干白组合",
		"img":"../images/ganH.jpg"
	},{
		"title":"韩国家宝",
		"describe":"蜂蜜柚子茶",
		"img":"../images/fengM.jpg"
	}]

 	var recommendTitle=document.getElementById('recomT');
 	var recommendText=document.getElementById('recom-p');
 	var recommendImg=document.getElementById('img-product');
 	for(int i=0; i<=4; i++){
 		recommendTitle.innerText=data[i].title;
 		recommendText.innerText=data[i].describe;
 		recommendImg.src=data[i].img;
 		
 	}
    console.log(recommendTitle);
 	mui.init();
			//创建webview模式选项卡
			var subPages = [
				'tmpl/home.html',
				'tmpl/contact.html',
				'tmpl/friendly.html',
				'tmpl/userCenter.html'
			];
			var styles = {
				top: '45px',
				bottom: '51px'
			}
			var main; //初始化主webv
			//使用5+api要监听plusready事件
			mui.plusReady(function() {
				//获取当前主webview
				main = plus.webview.currentWebview();
			//点击 主webview的透明遮罩层关闭菜单
				main.addEventListener('maskClick',closeMenu);
				//创建子webview
				for(var i = 0; i < subPages.length; i++) {
					var sub = plus.webview.create(subPages[i], subPages[i], styles)
					if(i > 0) { //默认 显示第一个子webview
						sub.hide();
						//隐藏方法二:plus.webview.hide(id)
					}
			//作为子webview追加到主webview
					main.append(sub)
				};
			});
			var title = document.querySelector('#title');
			var activeId = subPages[0];//默认的激活项webivew
//			点击切换webview
			mui('.mui-bar-tab').on('tap','a',function(){
//				修改标题
				title.innerHTML = this.querySelector('.mui-tab-label').innerHTML
//				获取当前的选中项的webview的id
				var targetId = this.getAttribute('href');
//				隐藏激活状态的webview
				plus.webview.hide(activeId,'slide-out-top',2000);
//				显示选中项的webview
				plus.webview.show(targetId,'slide-in-bottom',2000);
//				更改激活状态
				activeId = targetId;
			});
 })(mui, document)
