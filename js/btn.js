var result = [];
var oBtn = document.querySelectorAll(".btn");
for(var i=0; i<oBtn.length; i++) {
	var value = oBtn[i].getAttribute('click');
	if(value && (result.indexOf(value) < 0)) {
		result.push(value);
	}
}
for(var i=0; i<result.length; i++) {
	loadCss(result[i]);
}
var fadeObjects = document.querySelectorAll(".btn[click='fade']");
var skipObjects = document.querySelectorAll(".btn[click='skip']");
addClass(fadeObjects,'fade');
addClass(skipObjects,'skip');
function addClass(objects,className) {
	for(var i=0; i<objects.length; i++) {
		objects[i].onclick = function() {
			this.classList.add(className);
		}
	}
}