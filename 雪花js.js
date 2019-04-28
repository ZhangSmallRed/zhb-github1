//设置自我介绍中的第几位访客数
localStorage.lastname="Smith";//设置一个localStorage存储的名字lastname=Smith
//document.write("Last name:"+localStorage.lastname+"<br/>");//输出名字
if(localStorage.pagecount){//将local换成session关闭浏览器后再次打开数据将会重置；当浏览器刷新时触发
	localStorage.pagecount=Number(localStorage.pagecount)+1;//设置一个localStorage计数器等于数字类型的值
}else{
		localStorage.pagecount=1;
}



//音乐播放器
var bofang=document.getElementById("bofang");//获得播放按钮
var img1=document.getElementById("img1");
var yinyue=document.getElementById("yinyue");//获得音乐播放器
bofang.onclick=function(){//点击播放按钮，执行函数
if(yinyue.paused){//如果音乐是停止的，就执行下列方法
	yinyue.play();//播放音乐
	bofang.className='zhuanquan';//给播放按钮添加一个类，使图片转圈
	}else{
		yinyue.pause();//暂停音乐
		bofang.className='';//结束转圈效果
	}
}
	
	
	
	
//自我介绍	
var string =  "您好，这是您第"+localStorage.pagecount+"次访问此页面：很高兴您能在百忙之中看到一个小学生的页面，下面我将简单的做一个自我介绍：";
var text = document.getElementsByClassName('text')[0];//获得展示文本的div
var timer = null;//声明一个timer用来放setTimeout，初始化为null
var  num = 0;//定义一个num为0
function  show(){//声明一个函数，用来将文字一个个的展示出来
    text.innerHTML += string.charAt(num);//charAt() 方法可返回指定位置的字符。参数为字符串中    字符的位置的下标，这里从0开始。
    num++;//字符串的下标加加
   if(num<string.length){//当num小于字符串的长度时
	timer = setTimeout(show,200);//setTimeout() 方法用于在指定的毫秒数后调用函数或计算表达    式。这里将每200毫秒执行一次show函数
	}else if(num == string.length)//当num等于字符串的长度时
    {
        clearInterval(timer);//清除setTimeout。
    }   
}
var gushi=document.getElementsByClassName("gushi")[0];//获得gushi，自我介绍按钮
gushi.onclick=function(){//点击执行show（）函数
    show();
}


//中间数点击第一个div开始执行动画
var box1=document.getElementsByClassName('music-box1')[0];
var box2=document.getElementsByClassName('music-box2')[0];
var kaishu=document.getElementsByClassName('music-box2-fan')[0];
kaishu.onclick=function(){
	  box1.className='music-box11';
	  box2.className='music-box22';
}



//雪花特效
var minsize = 5;// 最小的雪花
var maxsize = 30;// 最大的雪花
var delay = 200;// 生成雪花的时间间隔
var snowColor = "#fff";// 雪花颜色
var snowDiv = document.createElement('div');// 生成一个雪花
snowDiv.className = "xh";//将雪花的样式做成css定义好的xh的动画效果
snowDiv.style.position = "fixed";//设置为相对定位
snowDiv.style.top = "0";//设置雪花得位置从顶部
snowDiv.style.color = snowColor;//白色的雪花
snowDiv.innerHTML = "❉";//雪花样式
var dHeight = document.documentElement.clientHeight;// 检测可视区的高度；
var dWidth = document.documentElement.clientWidth;// 检测可视区的宽度
setInterval(function(){
	var snowSize = minsize + Math.random()*maxsize;// 随机雪花的大小
	var startLeft = Math.random()*dWidth;// 雪花随机出现/停止的left值
	var stopLeft= Math.random()*dWidth;// 雪花随机出现/停止的left值
	var startHeight = 0;// 雪花开始的高度
	var stopHeight = dHeight -10;// 雪花停止的高度
	var speed =6+Math.random() *5 ;// 雪花飘落过程的速度
	var div = snowDiv.cloneNode(true);//snowDiv是将要被克隆的节点，如果为true,则该节点的        所有后代节点也都会被克隆,如果为false,则只克隆该节点本身.
	div.style.left = startLeft + 'px';//设置雪花出现的位置距左边的距离为随机的
	div.style.fontSize = snowSize + 'px'; //设置雪花的大小           
	document.body.appendChild(div);//将div插入到页面上
	animate(div,speed,stopHeight,stopLeft );//调用animate函数
},delay);
function animate(obj,speed,stopHeight,stopLeft){//定义一个函数
	 clearInterval(obj.timer);//清除一个setInterval（）
	 obj.timer = setInterval(function(){//设置一个setInterval（）
		 obj.style.top = speed + obj.offsetTop + 'px';//让雪花运动
		if(obj.offsetTop >= stopHeight)//当雪花距离浏览器上边框的距离大于我们设定雪花的停        止高度时
		{
		 clearInterval(obj.timer);//清除一个setInterval（）
		 document.body.removeChild(obj);// 到达设置的高度就移除
		 }
	 },50);    
}

    
