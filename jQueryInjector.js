javascript:(function(e,s){
	e.src=s;
	e.onload=function(){
		jQuery.noConflict();
		window.$ = window.jQuery;
		console.log('jQuery injected')
	};
	document.head.appendChild(e);
})(document.createElement('script'),'//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js')