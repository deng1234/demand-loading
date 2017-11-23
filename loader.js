//模块文件
var modules = {
	btn: {
		css: "btn",
		js: "btn"
	},
	circleBtn: {
		css: 'circle-btn',
		dependencies: ['btn']
	},
	menu: {
		class: 'menu',
	}
}
//加载CSS文件
function loadCss(url) {
	var link = document.createElement("link");
	link.rel = "stylesheet";
	link.type = "text/css";
	link.href = "css/"+url+".css";
	var head = document.getElementsByTagName("head")[0];
	head.appendChild(link);
}
//加载JavaScript文件
function loadJs(url) {
	var script = document.createElement('script');
    script.type = 'text/javascript';
    script.language = 'javascript';
    script.src = "js/"+url+".js";
    var head = document.getElementsByTagName("head")[0];
	head.appendChild(script);
}
//去除数组中重复的内容
function removeRepeat(args) {
	var result = [];
	for(var i=0; i<args.length; i++) {
		if(result.indexOf(args[i]) < 0) {
			result.push(args[i]);
		}
	}
	return result;
}
//需要引入的css
var cssArray = [];
//需要引入的JavaScript
var jsArray = [];
//遍历模块
for(module in modules) {
	var cssName = modules[module]['css'];
	var jsName = modules[module]['js'];
	var objects = document.querySelectorAll("."+cssName);
	if(objects.length){
		cssArray.push(cssName);
		if(jsName) {
			jsArray.push(jsName);
		}
	}
	var dependencies = modules[module]['dependencies'];
	if(dependencies) {
		for(var i=0; i<dependencies.length; i++) {
			var dependenciesCSS = modules[dependencies[i]]['css'];
			var dependenciesJS = modules[dependencies[i]]['js'];
			for(var j=0; j<objects.length; j++) {
				objects[j].classList.add(dependenciesCSS);
			}
			cssArray.push(dependenciesCSS);
			jsArray.push(dependenciesJS);
		}
	}
}
cssArray = removeRepeat(cssArray);
jsArray = removeRepeat(jsArray);
//加载css
for(var i=0; i<cssArray.length; i++) {
	loadCss(cssArray[i]);
}
//加载JavaScript
for(var i=0; i<jsArray.length; i++) {
	loadJs(jsArray[i]);
}