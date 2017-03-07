function help(){ return 'See instructions below :)';}
		
function about(){log('JS Fun Console v. 0.1 Alpha');}

function print(t){log(t);}

/*----------------------------------------------------*/

window.onload = function(){document.getElementById('code').focus();}

fun={
	randomBool : function(){
		var a = Math.random() - Math.random();
		return (a>0);
	},
	
	timestamp: function(){
		return ((new Date).getTime());
	}
}

		
function execute(){
	var code = document.getElementById('code');
	if(code.value==''){log('<code style="color:grey">Please, enter code</code>');return false}
	log('<code style="color:yellow">'+code.value+'</code>');
	try{
		a = new Function("{\n"+code.value+"\n}")();
		//a = eval(code.value);
		//log('<code style="color:grey;font-size:12px;">'+a+'</code>');
	}catch(e){log('<code style="color:red; font-size:12px;">'+e+'</code>');}
	code.value = '';
	code.focus();
}
	
function clear(){
	document.getElementById('history').innerHTML = '';;
}
	
function log(text){
	var his = document.getElementById('history');
	his.innerHTML = his.innerHTML  + text+'<br/>';
	his.scrollTop = his.scrollHeight;
}
		
function onCtrlEnter(ev, handler) {
	ev = ev || window.event;
	if (ev.keyCode == 10 || ev.keyCode == 13 && (ev.ctrlKey || ev.metaKey && browser.mac)) {
		handler();
		return false;
	}	
}