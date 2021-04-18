window.onload = function() {
	var odiv = document.getElementById('odiv');
	odiv.onmouseover = function() {
		startMover(0);
	}
	odiv.onmouseout = function() {
		startMover(-200);
	}
}
var timer = null;

function startMover(itarget) { //速度和目标值
	clearInterval(timer); //执行当前动画同时清除之前的动画
	var odiv = document.getElementById('odiv');
	timer = setInterval(function() {
		var speed = (itarget - odiv.offsetLeft) / 10; //缓冲动画的速度参数变化值
		//如果速度是大于0，说明是向右走，那么就向上取整
		speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		//Math.floor();向下取整
		if (odiv.offsetLeft == itarget) {
			clearInterval(timer);
		} else {
			//clientLeft 返回对象的offsetLeft属性值和到当前窗口左边的真实值之间的距离 
			odiv.style.left = odiv.offsetLeft + speed + 'px';
		}
	}, 30);
}
