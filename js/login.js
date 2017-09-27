
function getAccountFocus(){
	document.getElementById('icon-wode1').style.color='#e22425';
	}

function getAccountBlur(){
	document.getElementById('icon-wode1').style.color='#aaa';
}

function getPasswordFocus(){
		document.getElementById('icon-password').style.color='#e22425';
	}

function getPasswordBlur(){
	document.getElementById('icon-password').style.color='#aaa';
}

(function($, doc) {
	
	document.getElementById("loginValue").addEventListener('input', function() {
		console.log(this.value);
	});
	document.getElementById("passwordValue").addEventListener('input', function() {
		console.log(this.value);
	});

	document.getElementById('buttonAction').addEventListener('tap', function() {
		mui("#input_example input").each(function() {
			//若当前input为空，则alert提醒 
			if(!this.value || this.value.trim() == "") {
				var label = this.previousElementSibling;
				mui.alert(label.innerText + "不允许为空");
				check = false;
				return false;
			} else {
				mui.openWindow('mail.html');
			}
		});
	})

}(mui, document));		