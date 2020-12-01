//封装ajax  
/*
参数：
method：请求的方式： get，post
url: 请求地址
data:请求的参数
success :返回的回调函数 function
*/

function ajax(method,url,data,success){
	var xhr = null;
	//异常处理
	try{
		xhr = new XMLHttpRequest();
	}catch(e){
		xhr = ActiveXObject('Microsoft.XMLHTTP');
	}
	xhr.open(method,url,true);
	if(method == 'get'){
		xhr.send();
	}else{//post方式需要设置请求头
		xhr.setRequestHeader('content-type','application/x-www-form-urlencoded');
		xhr.send(data);	
	}
	//等待接收数据
	xhr.onreadystatechange = function(){
		if(xhr.readyState == 4){
			if(xhr.status == 200){
				//success 回调函数  ，带回了 从服务器端返回的数据
				success && success(xhr.responseText);
			}else{
				alert("访问出错，error："+xhr.status);
			}
		}
	}
	//服务器的返回错误码
	//200表示正确
	/*经常使用的报错码：200（成功），
	301(永久重定向) ，
	304（临时重定向），
	305（proxy代理），
	400（客户端请求语法错误），
	401（用户的身份验证没通过），
	403（参数出问题，服务器端不理解，），
	404（页面没找到），
	405（请求方式不对），
	5**（服务器端错误） */
	
}